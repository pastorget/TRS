var wms_layers = [];

var lyr_peruskartta_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://tiles.kartat.kapsi.fi/peruskartta",
                              attributions: ' ',
                              params: {
                                "LAYERS": "peruskartta",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'peruskartta',
                            opacity: 0.383000,
                            
                            
                          });
              wms_layers.push([lyr_peruskartta_0, 1]);
var format_linja4_inverse_1 = new ol.format.GeoJSON();
var features_linja4_inverse_1 = format_linja4_inverse_1.readFeatures(json_linja4_inverse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linja4_inverse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linja4_inverse_1.addFeatures(features_linja4_inverse_1);
var lyr_linja4_inverse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linja4_inverse_1, 
                style: style_linja4_inverse_1,
                popuplayertitle: 'linja4_inverse',
                interactive: false,
                title: '<img src="styles/legend/linja4_inverse_1.png" /> linja4_inverse'
            });
var format_Yhdistetty_Linja4_rajaukset_2 = new ol.format.GeoJSON();
var features_Yhdistetty_Linja4_rajaukset_2 = format_Yhdistetty_Linja4_rajaukset_2.readFeatures(json_Yhdistetty_Linja4_rajaukset_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yhdistetty_Linja4_rajaukset_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yhdistetty_Linja4_rajaukset_2.addFeatures(features_Yhdistetty_Linja4_rajaukset_2);
var lyr_Yhdistetty_Linja4_rajaukset_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yhdistetty_Linja4_rajaukset_2, 
                style: style_Yhdistetty_Linja4_rajaukset_2,
                popuplayertitle: 'Yhdistetty_Linja4_rajaukset',
                interactive: true,
                title: '<img src="styles/legend/Yhdistetty_Linja4_rajaukset_2.png" /> Yhdistetty_Linja4_rajaukset'
            });
var format_Yhdistettytaso_3 = new ol.format.GeoJSON();
var features_Yhdistettytaso_3 = format_Yhdistettytaso_3.readFeatures(json_Yhdistettytaso_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yhdistettytaso_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yhdistettytaso_3.addFeatures(features_Yhdistettytaso_3);
var lyr_Yhdistettytaso_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yhdistettytaso_3, 
                style: style_Yhdistettytaso_3,
                popuplayertitle: 'Yhdistetty taso',
                interactive: true,
                title: '<img src="styles/legend/Yhdistettytaso_3.png" /> Yhdistetty taso'
            });
var format_linja4_kohteet_tiedoilla_4 = new ol.format.GeoJSON();
var features_linja4_kohteet_tiedoilla_4 = format_linja4_kohteet_tiedoilla_4.readFeatures(json_linja4_kohteet_tiedoilla_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linja4_kohteet_tiedoilla_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linja4_kohteet_tiedoilla_4.addFeatures(features_linja4_kohteet_tiedoilla_4);
var lyr_linja4_kohteet_tiedoilla_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linja4_kohteet_tiedoilla_4, 
                style: style_linja4_kohteet_tiedoilla_4,
                popuplayertitle: 'linja4_kohteet_tiedoilla',
                interactive: true,
    title: 'linja4_kohteet_tiedoilla<br />\
    <img src="styles/legend/linja4_kohteet_tiedoilla_4_0.png" /> Hanke<br />\
    <img src="styles/legend/linja4_kohteet_tiedoilla_4_1.png" /> Rakentamat<br />\
    <img src="styles/legend/linja4_kohteet_tiedoilla_4_2.png" /> Täydentävä<br />\
    <img src="styles/legend/linja4_kohteet_tiedoilla_4_3.png" /> <br />' });

lyr_peruskartta_0.setVisible(true);lyr_linja4_inverse_1.setVisible(true);lyr_Yhdistetty_Linja4_rajaukset_2.setVisible(true);lyr_Yhdistettytaso_3.setVisible(true);lyr_linja4_kohteet_tiedoilla_4.setVisible(true);
var layersList = [lyr_peruskartta_0,lyr_linja4_inverse_1,lyr_Yhdistetty_Linja4_rajaukset_2,lyr_Yhdistettytaso_3,lyr_linja4_kohteet_tiedoilla_4];
lyr_linja4_inverse_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'gml_id': 'gml_id', 'natcode': 'natcode', 'namefin': 'namefin', 'nameswe': 'nameswe', 'landarea': 'landarea', 'freshwarea': 'freshwarea', 'seawarea': 'seawarea', 'totalarea': 'totalarea', });
lyr_Yhdistetty_Linja4_rajaukset_2.set('fieldAliases', {'path': 'path', 'ID_1': 'ID_1', 'Tyyppi': 'Tyyppi', 'Pinta-ala': 'Pinta-ala', });
lyr_Yhdistettytaso_3.set('fieldAliases', {'path': 'path', 'ID_1': 'ID_1', 'Tyyppi': 'Tyyppi', 'Pinta-ala': 'Pinta-ala', 'Numero': 'Numero', 'id': 'id', 'Alue': 'Alue', 'Tyyppi_2': 'Tyyppi_2', 'Yleiskaavamerkintä': 'Yleiskaavamerkintä', 'Asemakaavamerkintä': 'Asemakaavamerkintä', 'Nykytila': 'Nykytila', 'Runkolinjapysäkki (m keskipisteestä)': 'Runkolinjapysäkki (m keskipisteestä)', 'Palvelukeskittymät (keskusta, aluekeskus, palvelukeskus)': 'Palvelukeskittymät (keskusta, aluekeskus, palvelukeskus)', 'Pientalopaino_Käyttötarkoitus': 'Pientalopaino_Käyttötarkoitus', 'Pientalopaino_Tehokkuus': 'Pientalopaino_Tehokkuus', 'Pientalopaino_K-M2 arvio': 'Pientalopaino_K-M2 arvio', 'Pientalopaino_Asukaslisäys': 'Pientalopaino_Asukaslisäys', 'Kustannukset (per asukas)': 'Kustannukset (per asukas)', 'Toteutumisehto': 'Toteutumisehto', 'Soveltuva': 'Soveltuva', 'Tärkeä nykytilassaan': 'Tärkeä nykytilassaan', 'Maaperä': 'Maaperä', 'Hulevesi': 'Hulevesi', 'Liikenne ja kt-suunnittelu': 'Liikenne ja kt-suunnittelu', 'Luonto': 'Luonto', 'Viher ja virkistys': 'Viher ja virkistys', 'Tonttipalvelut': 'Tonttipalvelut', 'Kokonaispisteet': 'Kokonaispisteet', 'Lisätiedot': 'Lisätiedot', 'Lasten_osuus_ennuste': 'Lasten_osuus_ennuste', 'Hallinta': 'Hallinta', });
lyr_linja4_kohteet_tiedoilla_4.set('fieldAliases', {'path': 'path', 'ID_1': 'ID_1', 'Tyyppi': 'Tyyppi', 'Pinta-ala': 'Pinta-ala', 'Numero': 'Numero', 'id': 'id', 'Alue': 'Alue', 'Tyyppi_2': 'Tyyppi_2', 'Yleiskaavamerkintä': 'Yleiskaavamerkintä', 'Asemakaavamerkintä': 'Asemakaavamerkintä', 'Nykytila': 'Nykytila', 'Runkolinjapysäkki (m keskipisteestä)': 'Runkolinjapysäkki (m keskipisteestä)', 'Palvelukeskittymät (keskusta, aluekeskus, palvelukeskus)': 'Palvelukeskittymät (keskusta, aluekeskus, palvelukeskus)', 'Pientalopaino_Käyttötarkoitus': 'Pientalopaino_Käyttötarkoitus', 'Pientalopaino_Tehokkuus': 'Pientalopaino_Tehokkuus', 'Pientalopaino_K-M2 arvio': 'Pientalopaino_K-M2 arvio', 'Pientalopaino_Asukaslisäys': 'Pientalopaino_Asukaslisäys', 'Kustannukset (per asukas)': 'Kustannukset (per asukas)', 'Toteutumisehto': 'Toteutumisehto', 'Soveltuva': 'Soveltuva', 'Tärkeä nykytilassaan': 'Tärkeä nykytilassaan', 'Maaperä': 'Maaperä', 'Hulevesi': 'Hulevesi', 'Liikenne ja kt-suunnittelu': 'Liikenne ja kt-suunnittelu', 'Luonto': 'Luonto', 'Viher ja virkistys': 'Viher ja virkistys', 'Tonttipalvelut': 'Tonttipalvelut', 'Kokonaispisteet': 'Kokonaispisteet', 'Lisätiedot': 'Lisätiedot', 'Lasten_osuus_ennuste': 'Lasten_osuus_ennuste', 'Hallinta': 'Hallinta', });
lyr_linja4_inverse_1.set('fieldImages', {'fid': 'Range', 'id': 'Range', 'gml_id': 'Range', 'natcode': 'TextEdit', 'namefin': 'TextEdit', 'nameswe': 'TextEdit', 'landarea': 'TextEdit', 'freshwarea': 'TextEdit', 'seawarea': 'TextEdit', 'totalarea': 'TextEdit', });
lyr_Yhdistetty_Linja4_rajaukset_2.set('fieldImages', {'path': '', 'ID_1': '', 'Tyyppi': '', 'Pinta-ala': '', });
lyr_Yhdistettytaso_3.set('fieldImages', {'path': '', 'ID_1': '', 'Tyyppi': '', 'Pinta-ala': '', 'Numero': '', 'id': '', 'Alue': '', 'Tyyppi_2': '', 'Yleiskaavamerkintä': '', 'Asemakaavamerkintä': '', 'Nykytila': '', 'Runkolinjapysäkki (m keskipisteestä)': '', 'Palvelukeskittymät (keskusta, aluekeskus, palvelukeskus)': '', 'Pientalopaino_Käyttötarkoitus': '', 'Pientalopaino_Tehokkuus': '', 'Pientalopaino_K-M2 arvio': '', 'Pientalopaino_Asukaslisäys': '', 'Kustannukset (per asukas)': '', 'Toteutumisehto': '', 'Soveltuva': '', 'Tärkeä nykytilassaan': '', 'Maaperä': '', 'Hulevesi': '', 'Liikenne ja kt-suunnittelu': '', 'Luonto': '', 'Viher ja virkistys': '', 'Tonttipalvelut': '', 'Kokonaispisteet': '', 'Lisätiedot': '', 'Lasten_osuus_ennuste': '', 'Hallinta': '', });
lyr_linja4_kohteet_tiedoilla_4.set('fieldImages', {'path': 'TextEdit', 'ID_1': 'Range', 'Tyyppi': 'TextEdit', 'Pinta-ala': 'Range', 'Numero': 'Range', 'id': 'Range', 'Alue': 'TextEdit', 'Tyyppi_2': 'TextEdit', 'Yleiskaavamerkintä': 'TextEdit', 'Asemakaavamerkintä': 'TextEdit', 'Nykytila': 'TextEdit', 'Runkolinjapysäkki (m keskipisteestä)': 'Range', 'Palvelukeskittymät (keskusta, aluekeskus, palvelukeskus)': 'Range', 'Pientalopaino_Käyttötarkoitus': 'TextEdit', 'Pientalopaino_Tehokkuus': 'TextEdit', 'Pientalopaino_K-M2 arvio': 'Range', 'Pientalopaino_Asukaslisäys': 'TextEdit', 'Kustannukset (per asukas)': 'TextEdit', 'Toteutumisehto': 'TextEdit', 'Soveltuva': 'Range', 'Tärkeä nykytilassaan': 'Range', 'Maaperä': 'TextEdit', 'Hulevesi': 'TextEdit', 'Liikenne ja kt-suunnittelu': 'TextEdit', 'Luonto': 'TextEdit', 'Viher ja virkistys': 'TextEdit', 'Tonttipalvelut': 'TextEdit', 'Kokonaispisteet': 'TextEdit', 'Lisätiedot': 'TextEdit', 'Lasten_osuus_ennuste': 'TextEdit', 'Hallinta': 'TextEdit', });
lyr_linja4_inverse_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'gml_id': 'inline label - visible with data', 'natcode': 'inline label - visible with data', 'namefin': 'inline label - visible with data', 'nameswe': 'inline label - visible with data', 'landarea': 'inline label - visible with data', 'freshwarea': 'inline label - visible with data', 'seawarea': 'inline label - visible with data', 'totalarea': 'inline label - visible with data', });
lyr_Yhdistetty_Linja4_rajaukset_2.set('fieldLabels', {'path': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'Tyyppi': 'inline label - visible with data', 'Pinta-ala': 'inline label - visible with data', });
lyr_Yhdistettytaso_3.set('fieldLabels', {'path': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'Tyyppi': 'inline label - visible with data', 'Pinta-ala': 'inline label - visible with data', 'Numero': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Alue': 'inline label - visible with data', 'Tyyppi_2': 'inline label - visible with data', 'Yleiskaavamerkintä': 'inline label - visible with data', 'Asemakaavamerkintä': 'inline label - visible with data', 'Nykytila': 'inline label - visible with data', 'Runkolinjapysäkki (m keskipisteestä)': 'inline label - visible with data', 'Palvelukeskittymät (keskusta, aluekeskus, palvelukeskus)': 'inline label - visible with data', 'Pientalopaino_Käyttötarkoitus': 'inline label - visible with data', 'Pientalopaino_Tehokkuus': 'inline label - visible with data', 'Pientalopaino_K-M2 arvio': 'inline label - visible with data', 'Pientalopaino_Asukaslisäys': 'inline label - visible with data', 'Kustannukset (per asukas)': 'inline label - visible with data', 'Toteutumisehto': 'inline label - visible with data', 'Soveltuva': 'inline label - visible with data', 'Tärkeä nykytilassaan': 'inline label - visible with data', 'Maaperä': 'inline label - visible with data', 'Hulevesi': 'inline label - visible with data', 'Liikenne ja kt-suunnittelu': 'inline label - visible with data', 'Luonto': 'inline label - visible with data', 'Viher ja virkistys': 'inline label - visible with data', 'Tonttipalvelut': 'inline label - visible with data', 'Kokonaispisteet': 'inline label - visible with data', 'Lisätiedot': 'inline label - visible with data', 'Lasten_osuus_ennuste': 'inline label - visible with data', 'Hallinta': 'inline label - visible with data', });
lyr_linja4_kohteet_tiedoilla_4.set('fieldLabels', {'path': 'inline label - visible with data', 'ID_1': 'inline label - visible with data', 'Tyyppi': 'inline label - visible with data', 'Pinta-ala': 'inline label - visible with data', 'Numero': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Alue': 'inline label - visible with data', 'Tyyppi_2': 'inline label - visible with data', 'Yleiskaavamerkintä': 'inline label - visible with data', 'Asemakaavamerkintä': 'inline label - visible with data', 'Nykytila': 'inline label - visible with data', 'Runkolinjapysäkki (m keskipisteestä)': 'inline label - visible with data', 'Palvelukeskittymät (keskusta, aluekeskus, palvelukeskus)': 'inline label - visible with data', 'Pientalopaino_Käyttötarkoitus': 'inline label - visible with data', 'Pientalopaino_Tehokkuus': 'inline label - visible with data', 'Pientalopaino_K-M2 arvio': 'inline label - visible with data', 'Pientalopaino_Asukaslisäys': 'inline label - visible with data', 'Kustannukset (per asukas)': 'inline label - visible with data', 'Toteutumisehto': 'inline label - visible with data', 'Soveltuva': 'inline label - visible with data', 'Tärkeä nykytilassaan': 'inline label - visible with data', 'Maaperä': 'inline label - visible with data', 'Hulevesi': 'inline label - visible with data', 'Liikenne ja kt-suunnittelu': 'inline label - visible with data', 'Luonto': 'inline label - visible with data', 'Viher ja virkistys': 'inline label - visible with data', 'Tonttipalvelut': 'inline label - visible with data', 'Kokonaispisteet': 'inline label - visible with data', 'Lisätiedot': 'inline label - visible with data', 'Lasten_osuus_ennuste': 'inline label - visible with data', 'Hallinta': 'inline label - visible with data', });
lyr_linja4_kohteet_tiedoilla_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});