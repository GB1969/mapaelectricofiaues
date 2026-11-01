var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_OrtofotoImagenAerea_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ortofoto (Imagen Aerea)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OrtofotoImagenAerea_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9930115.825082, 1541926.619412, -9929576.706501, 1542531.565848]
        })
    });
var format_POZOSELECTRICOS_2 = new ol.format.GeoJSON();
var features_POZOSELECTRICOS_2 = format_POZOSELECTRICOS_2.readFeatures(json_POZOSELECTRICOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POZOSELECTRICOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POZOSELECTRICOS_2.addFeatures(features_POZOSELECTRICOS_2);
var lyr_POZOSELECTRICOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POZOSELECTRICOS_2, 
                style: style_POZOSELECTRICOS_2,
                popuplayertitle: 'POZOS ELECTRICOS',
                interactive: true,
                title: '<img src="styles/legend/POZOSELECTRICOS_2.png" /> POZOS ELECTRICOS'
            });
var format_CASETASELECTRICAS_3 = new ol.format.GeoJSON();
var features_CASETASELECTRICAS_3 = format_CASETASELECTRICAS_3.readFeatures(json_CASETASELECTRICAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASETASELECTRICAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASETASELECTRICAS_3.addFeatures(features_CASETASELECTRICAS_3);
var lyr_CASETASELECTRICAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASETASELECTRICAS_3, 
                style: style_CASETASELECTRICAS_3,
                popuplayertitle: 'CASETAS ELECTRICAS',
                interactive: true,
                title: '<img src="styles/legend/CASETASELECTRICAS_3.png" /> CASETAS ELECTRICAS'
            });
var format_TRANSFORMADORENSECO_4 = new ol.format.GeoJSON();
var features_TRANSFORMADORENSECO_4 = format_TRANSFORMADORENSECO_4.readFeatures(json_TRANSFORMADORENSECO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRANSFORMADORENSECO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRANSFORMADORENSECO_4.addFeatures(features_TRANSFORMADORENSECO_4);
var lyr_TRANSFORMADORENSECO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRANSFORMADORENSECO_4, 
                style: style_TRANSFORMADORENSECO_4,
                popuplayertitle: 'TRANSFORMADOR EN SECO',
                interactive: true,
                title: '<img src="styles/legend/TRANSFORMADORENSECO_4.png" /> TRANSFORMADOR EN SECO'
            });
var format_POSTES_5 = new ol.format.GeoJSON();
var features_POSTES_5 = format_POSTES_5.readFeatures(json_POSTES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POSTES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTES_5.addFeatures(features_POSTES_5);
var lyr_POSTES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTES_5, 
                style: style_POSTES_5,
                popuplayertitle: 'POSTES',
                interactive: true,
                title: '<img src="styles/legend/POSTES_5.png" /> POSTES'
            });
var format_LUMINARIAS_6 = new ol.format.GeoJSON();
var features_LUMINARIAS_6 = format_LUMINARIAS_6.readFeatures(json_LUMINARIAS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUMINARIAS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUMINARIAS_6.addFeatures(features_LUMINARIAS_6);
var lyr_LUMINARIAS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUMINARIAS_6, 
                style: style_LUMINARIAS_6,
                popuplayertitle: 'LUMINARIAS',
                interactive: true,
                title: '<img src="styles/legend/LUMINARIAS_6.png" /> LUMINARIAS'
            });
var group_INFRAESTRUCTURAELECTRICA = new ol.layer.Group({
                                layers: [lyr_POZOSELECTRICOS_2,lyr_CASETASELECTRICAS_3,lyr_TRANSFORMADORENSECO_4,lyr_POSTES_5,lyr_LUMINARIAS_6,],
                                fold: 'open',
                                title: 'INFRAESTRUCTURA ELECTRICA'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OrtofotoImagenAerea_1.setVisible(true);lyr_POZOSELECTRICOS_2.setVisible(true);lyr_CASETASELECTRICAS_3.setVisible(true);lyr_TRANSFORMADORENSECO_4.setVisible(true);lyr_POSTES_5.setVisible(true);lyr_LUMINARIAS_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OrtofotoImagenAerea_1,group_INFRAESTRUCTURAELECTRICA];
lyr_POZOSELECTRICOS_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Y': 'Y (m)', 'X': 'X (m)', 'Elev': 'Elev', 'Codigo': 'Codigo', 'Zona': 'Zona', 'Elemento 1': 'Equipo 1', 'Elemento 2': 'Equipo 2', 'Elemento 3': 'Equipo 3', 'Tipo de Infraestructura': 'Tipo de Infraestructura', 'Condición de la Infraestructura': 'Condición de la Infraestructura', 'Foto': 'Foto', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'tipo_mapa': 'tipo_mapa', 'Estructura': 'Estructura', 'mapa': 'mapa', });
lyr_CASETASELECTRICAS_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Y': 'Y (m)', 'X': 'X (m)', 'Elev': 'Elev', 'Codigo': 'Codigo', 'Zona': 'Zona', 'Elemento 1': 'Equipo 1', 'Elemento 2': 'Equipo 2', 'Elemento 3': 'Equipo 3', 'Tipo de Infraestructura': 'Tipo de Infraestructura', 'Condición de la Infraestructura': 'Condición de la Infraestructura', 'Foto': 'Foto', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'tipo_mapa': 'tipo_mapa', 'Estructura': 'Estructura', 'mapa': 'mapa', });
lyr_TRANSFORMADORENSECO_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Y': 'Y (m)', 'X': 'X (m)', 'Elev': 'Elev', 'Codigo': 'Codigo', 'Zona': 'Zona', 'Elemento 1': 'Equipo 1', 'Elemento 2': 'Equipo 2', 'Elemento 3': 'Equipo 3', 'Tipo de Infraestructura': 'Tipo de Infraestructura', 'Condición de la Infraestructura': 'Condición de la Infraestructura', 'Foto': 'Foto', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'tipo_mapa': 'tipo_mapa', 'Estructura': 'Estructura', 'mapa': 'mapa', });
lyr_POSTES_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Y': 'Y (m)', 'X': 'X (m)', 'Elev': 'Elev', 'Codigo': 'Codigo', 'Zona': 'Zona', 'Elemento 1': 'Equipo 1', 'Elemento 2': 'Equipo 2', 'Elemento 3': 'Equipo 3', 'Tipo de Infraestructura': 'Tipo de Infraestructura', 'Condición de la Infraestructura': 'Condición de la Infraestructura', 'Foto': 'Foto', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'tipo_mapa': 'tipo_mapa', 'Estructura': 'Estructura', 'mapa': 'mapa', });
lyr_LUMINARIAS_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Y': 'Y (m)', 'X': 'X (m)', 'Elev': 'Elev', 'Codigo': 'Codigo', 'Zona': 'Zona', 'Elemento 1': 'Equipo 1', 'Elemento 2': 'Equipo 2', 'Elemento 3': 'Equipo 3', 'Tipo de Infraestructura': 'Tipo de Infraestructura', 'Condición de la Infraestructura': 'Condición de la Infraestructura', 'Foto': 'Foto', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'tipo_mapa': 'tipo_mapa', 'Estructura': 'Estructura', 'popup_html': 'popup_html', 'mapa': 'mapa', 'mapa2': 'mapa2', });
lyr_POZOSELECTRICOS_2.set('fieldImages', {'fid': 'Hidden', 'ID': 'UniqueValues', 'Y': 'TextEdit', 'X': 'TextEdit', 'Elev': 'Hidden', 'Codigo': 'TextEdit', 'Zona': 'TextEdit', 'Elemento 1': 'TextEdit', 'Elemento 2': 'TextEdit', 'Elemento 3': 'TextEdit', 'Tipo de Infraestructura': 'TextEdit', 'Condición de la Infraestructura': 'TextEdit', 'Foto': 'ExternalResource', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'tipo_mapa': '', 'Estructura': 'TextEdit', 'mapa': 'TextEdit', });
lyr_CASETASELECTRICAS_3.set('fieldImages', {'fid': 'Hidden', 'ID': 'UniqueValues', 'Y': 'TextEdit', 'X': 'TextEdit', 'Elev': 'Hidden', 'Codigo': 'TextEdit', 'Zona': 'TextEdit', 'Elemento 1': 'TextEdit', 'Elemento 2': 'TextEdit', 'Elemento 3': 'TextEdit', 'Tipo de Infraestructura': 'TextEdit', 'Condición de la Infraestructura': 'TextEdit', 'Foto': 'ExternalResource', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'tipo_mapa': '', 'Estructura': 'TextEdit', 'mapa': 'TextEdit', });
lyr_TRANSFORMADORENSECO_4.set('fieldImages', {'fid': 'Hidden', 'ID': 'UniqueValues', 'Y': 'TextEdit', 'X': 'TextEdit', 'Elev': 'Hidden', 'Codigo': 'TextEdit', 'Zona': 'TextEdit', 'Elemento 1': 'TextEdit', 'Elemento 2': 'TextEdit', 'Elemento 3': 'TextEdit', 'Tipo de Infraestructura': 'TextEdit', 'Condición de la Infraestructura': 'TextEdit', 'Foto': 'ExternalResource', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'tipo_mapa': '', 'Estructura': 'TextEdit', 'mapa': 'TextEdit', });
lyr_POSTES_5.set('fieldImages', {'fid': 'Hidden', 'ID': 'UniqueValues', 'Y': 'TextEdit', 'X': 'TextEdit', 'Elev': 'Hidden', 'Codigo': 'TextEdit', 'Zona': 'TextEdit', 'Elemento 1': 'TextEdit', 'Elemento 2': 'TextEdit', 'Elemento 3': 'TextEdit', 'Tipo de Infraestructura': 'TextEdit', 'Condición de la Infraestructura': 'TextEdit', 'Foto': 'ExternalResource', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'tipo_mapa': '', 'Estructura': 'TextEdit', 'mapa': 'TextEdit', });
lyr_LUMINARIAS_6.set('fieldImages', {'fid': 'Hidden', 'ID': 'UniqueValues', 'Y': 'TextEdit', 'X': 'TextEdit', 'Elev': 'Hidden', 'Codigo': 'TextEdit', 'Zona': 'TextEdit', 'Elemento 1': 'TextEdit', 'Elemento 2': 'TextEdit', 'Elemento 3': 'TextEdit', 'Tipo de Infraestructura': 'TextEdit', 'Condición de la Infraestructura': 'TextEdit', 'Foto': 'ExternalResource', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'tipo_mapa': '', 'Estructura': 'TextEdit', 'popup_html': 'TextEdit', 'mapa': 'TextEdit', 'mapa2': 'TextEdit', });
lyr_POZOSELECTRICOS_2.set('fieldLabels', {'ID': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Codigo': 'hidden field', 'Zona': 'hidden field', 'Elemento 1': 'hidden field', 'Elemento 2': 'hidden field', 'Elemento 3': 'hidden field', 'Tipo de Infraestructura': 'hidden field', 'Condición de la Infraestructura': 'hidden field', 'Foto': 'no label', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'tipo_mapa': 'hidden field', 'Estructura': 'hidden field', 'mapa': 'no label', });
lyr_CASETASELECTRICAS_3.set('fieldLabels', {'ID': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Codigo': 'hidden field', 'Zona': 'hidden field', 'Elemento 1': 'hidden field', 'Elemento 2': 'hidden field', 'Elemento 3': 'hidden field', 'Tipo de Infraestructura': 'hidden field', 'Condición de la Infraestructura': 'hidden field', 'Foto': 'no label', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'tipo_mapa': 'hidden field', 'Estructura': 'hidden field', 'mapa': 'no label', });
lyr_TRANSFORMADORENSECO_4.set('fieldLabels', {'ID': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Codigo': 'hidden field', 'Zona': 'hidden field', 'Elemento 1': 'hidden field', 'Elemento 2': 'hidden field', 'Elemento 3': 'hidden field', 'Tipo de Infraestructura': 'hidden field', 'Condición de la Infraestructura': 'hidden field', 'Foto': 'no label', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'tipo_mapa': 'hidden field', 'Estructura': 'hidden field', 'mapa': 'no label', });
lyr_POSTES_5.set('fieldLabels', {'ID': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Codigo': 'hidden field', 'Zona': 'hidden field', 'Elemento 1': 'hidden field', 'Elemento 2': 'hidden field', 'Elemento 3': 'hidden field', 'Tipo de Infraestructura': 'hidden field', 'Condición de la Infraestructura': 'hidden field', 'Foto': 'no label', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'tipo_mapa': 'hidden field', 'Estructura': 'hidden field', 'mapa': 'no label', });
lyr_LUMINARIAS_6.set('fieldLabels', {'ID': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Codigo': 'hidden field', 'Zona': 'hidden field', 'Elemento 1': 'hidden field', 'Elemento 2': 'hidden field', 'Elemento 3': 'hidden field', 'Tipo de Infraestructura': 'hidden field', 'Condición de la Infraestructura': 'hidden field', 'Foto': 'no label', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'tipo_mapa': 'hidden field', 'Estructura': 'hidden field', 'popup_html': 'hidden field', 'mapa': 'hidden field', 'mapa2': 'no label', });
lyr_LUMINARIAS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});