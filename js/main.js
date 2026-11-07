window.addEventListener('load', function () {
  // ===== Convertir Latitud/Longitud a grados, minutos y segundos =====
  function toDMS(valor, esLat) {
    var v = parseFloat(valor);
    var dir = esLat ? (v >= 0 ? 'N' : 'S') : (v >= 0 ? 'E' : 'W');
    var total = Math.round(Math.abs(v) * 3600 * 100) / 100;
    var d = Math.floor(total / 3600);
    var m = Math.floor((total - d * 3600) / 60);
    var s = (total - d * 3600 - m * 60).toFixed(2);
    return d + '°' + m + "'" + s + '"' + dir;
  }

  var popupContent = document.getElementById('popup-content');
  new MutationObserver(function () {
    var html = popupContent.innerHTML;
    var nuevo = html
      .replace(/(Latitud[^0-9\-<]*(?:<[^>]*>\s*)*)(-?\d+\.\d+)/gi, function (m, pre, num) {
        return pre + toDMS(num, true);
      })
      .replace(/(Longitud[^0-9\-<]*(?:<[^>]*>\s*)*)(-?\d+\.\d+)/gi, function (m, pre, num) {
        return pre + toDMS(num, false);
      });
    if (nuevo !== html) popupContent.innerHTML = nuevo;
  }).observe(popupContent, { childList: true, subtree: true });

  // nombre = texto en el panel, tam = diámetro del halo (px), color = RGB
  var config = [
    { nombre: 'Luminarias',        capa: lyr_LUMINARIAS_6,        color: '255,215,0', tam: 32 },
    { nombre: 'Transformadores',   capa: lyr_TRANSFORMADORENSECO_4, color: '255,0,0',   tam: 30 },
    { nombre: 'Casetas eléctricas', capa: lyr_CASETASELECTRICAS_3, color: '80,60,255', tam: 40 },
    { nombre: 'Postes',            capa: lyr_POSTES_5,              color: '0,255,255', tam: 22 },
    { nombre: 'Pozos eléctricos', capa: lyr_POZOSELECTRICOS_2,     color: '255,140,0', tam: 22 }
  ];

  var lista = document.getElementById('luz-lista');
  var zonasActivas = {};   // { '1': true, '2': true, ... }

  // Ubicacion de la infraestructura electrica por zonas 
  function zonaDe(f) {
    var z = f.get('Zona');
    if (z === undefined || z === null || z === '') {
      var m = /Z(\d+)\s*$/i.exec(String(f.get('Codigo') || ''));
      z = m ? m[1] : null;
    }
    return z === null ? null : String(parseInt(z, 10));
  }

  config.forEach(function (c) {
    c.activo = true;
    c.elementos = [];

    var fuente = c.capa.getSource();
    if (fuente.getSource) { fuente = fuente.getSource(); }

    // Oculta del mapa (punto, etiqueta y popup) los objetos de zonas desmarcadas
    var estiloOriginal = c.capa.getStyle();
    c.capa.setStyle(function (feature, resolution) {
      if (feature._zona === undefined) { feature._zona = zonaDe(feature); }
      var z = feature._zona;
      if (z !== null && zonasActivas[z] === false) { return null; }
      return (typeof estiloOriginal === 'function')
        ? estiloOriginal(feature, resolution)
        : estiloOriginal;
    });

    fuente.getFeatures().forEach(function (f) {
      var zona = zonaDe(f);
      if (zona !== null) { zonasActivas[zona] = true; }
      var el = document.createElement('div');
      el.className = 'halo';
      el.style.width = el.style.height = c.tam + 'px';
      el.style.background =
        'radial-gradient(circle, rgba(' + c.color + ',0.85) 0%, ' +
        'rgba(' + c.color + ',0.45) 35%, rgba(' + c.color + ',0) 70%)';
      el.style.animationDelay = (-Math.random() * 2.4).toFixed(2) + 's';

      map.addOverlay(new ol.Overlay({
        element: el,
        positioning: 'center-center',
        position: f.getGeometry().getCoordinates(),
        stopEvent: false
      }));
      c.elementos.push({ el: el, zona: zona });
    });

    // Un halo se ve solo si la capa está visible Y su efecto está encendido
    c.actualizar = function () {
      var v = c.capa.getVisible() && c.activo;
      c.elementos.forEach(function (h) {
        var ok = v && (h.zona === null || zonasActivas[h.zona]);
        h.el.style.display = ok ? '' : 'none';
      });
    };
    c.capa.on('change:visible', c.actualizar);

    // Fila del panel
    var label = document.createElement('label');
    label.innerHTML =
      '<input type="checkbox" checked>' + c.nombre +
      '<span class="pto" style="background:rgb(' + c.color + ');box-shadow:0 0 6px rgba(' + c.color + ',0.6)"></span>';
    c.chk = label.querySelector('input');
    c.chk.addEventListener('change', function () {
      c.activo = c.chk.checked;
      c.actualizar();
      textoBoton();
    });
    lista.appendChild(label);

    c.actualizar();
  });

  // Casillas de zona (se crean con las zonas que existen en los datos)
  var contZonas = document.getElementById('luz-zonas');
  Object.keys(zonasActivas).sort(function (a, b) { return a - b; }).forEach(function (z) {
    var lb = document.createElement('label');
    lb.innerHTML = '<input type="checkbox" checked>Zona ' + z;
    lb.querySelector('input').addEventListener('change', function () {
      zonasActivas[z] = this.checked;
      config.forEach(function (c) { c.actualizar(); c.capa.changed(); });
    });
    contZonas.appendChild(lb);
  });

  // Botón "Apagar todas / Encender todas"
  var btnTodas = document.getElementById('luz-todas');
  function textoBoton() {
    var todas = config.every(function (c) { return c.activo; });
    btnTodas.textContent = todas ? 'Apagar todas' : 'Encender todas';
  }
  btnTodas.addEventListener('click', function () {
    var nuevo = !config.every(function (c) { return c.activo; });
    config.forEach(function (c) {
      c.activo = nuevo;
      c.chk.checked = nuevo;
      c.actualizar();
    });
    textoBoton();
  });

  // Abrir / contraer
  var widget = document.getElementById('luz-widget');
  document.getElementById('luz-icono').addEventListener('click', function () {
    widget.classList.add('abierto');
  });
  document.getElementById('luz-cerrar').addEventListener('click', function () {
    widget.classList.remove('abierto');
  });

  // Colocar el panel abajo del zoom 
  function colocar() {
    var z = document.querySelector('.ol-zoom');
    if (!z) return;
    var m = document.getElementById('map').getBoundingClientRect();
    widget.style.top = (z.getBoundingClientRect().bottom - m.top + 8) + 'px';
  }
  colocar();
  window.addEventListener('resize', colocar);
});