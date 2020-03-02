
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "LinnentownGeotiff_0": {
            "type": "raster",
            "tiles": ["https://api.mapbox.com/styles/v1/lilymdabbs/ck7152co9039n1ir58oyrmm4u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGlseW1kYWJicyIsImEiOiJjazZja2I5ZG4xNHkwM3FyeXN1MTVwbG02In0.DhcDPBfbjohZ1PCh5XVdYA"],
            "tileSize": 256
        },
        "parcels_final_2020_02_17_1": {
            "type": "geojson",
            "data": json_parcels_final_2020_02_17_1
        }
                    ,
        "building_final_2020_02_17_2": {
            "type": "geojson",
            "data": json_building_final_2020_02_17_2
        }
                    ,
        "Final_Streetsmerged_streets_3": {
            "type": "geojson",
            "data": json_Final_Streetsmerged_streets_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_LinnentownGeotiff_0_0",
            "type": "raster",
            "source": "LinnentownGeotiff_0"
        },
        {
            "id": "lyr_parcels_final_2020_02_17_1_0",
            "type": "fill",
            "source": "parcels_final_2020_02_17_1",
            "layout": {},
            "paint": {'fill-opacity': 0.75, 'fill-color': '#86786d'}
        }
,
        {
            "id": "lyr_building_final_2020_02_17_2_0",
            "type": "fill",
            "source": "building_final_2020_02_17_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#1d7738'}
        }
,
        {
            "id": "lyr_Final_Streetsmerged_streets_3_0",
            "type": "line",
            "source": "Final_Streetsmerged_streets_3",
            "layout": {},
            "paint": {'line-width': 0.982677165366, 'line-opacity': 1.0, 'line-color': '#150e0c'}
        }
],
}