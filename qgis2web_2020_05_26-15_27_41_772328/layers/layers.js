var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_BumeimHafen_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodienste.hamburg.de/HH_WMS_Strassenbaumkataster?version%3D1.3.0%26layer%3Dstrassenbaum_hpa%26style%3Dstyle_strassenbaum",
    attributions: ' ',
                              params: {
                                "LAYERS": "strassenbaum_hpa",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Bäume im Hafen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BumeimHafen_1, 0]);

lyr_OpenStreetMap_0.setVisible(true);lyr_BumeimHafen_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BumeimHafen_1];
