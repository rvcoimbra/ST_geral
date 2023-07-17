
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "13072023_infraestrutura_1": {
            "type": "geojson",
            "data": json_13072023_infraestrutura_1
        }
                    ,
        "13072023_armario_2": {
            "type": "geojson",
            "data": json_13072023_armario_2
        }
                    ,
        "13072023_CCTV_3": {
            "type": "geojson",
            "data": json_13072023_CCTV_3
        }
                    ,
        "13072023_caixas_4": {
            "type": "geojson",
            "data": json_13072023_caixas_4
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
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr_13072023_infraestrutura_1_0",
            "type": "line",
            "source": "13072023_infraestrutura_1",
            "layout": {},
            "paint": {'line-width': 1.6428571428571428, 'line-opacity': 1.0, 'line-color': '#ff2323'}
        }
,
        {
            "id": "lyr_13072023_armario_2_0",
            "type": "circle",
            "source": "13072023_armario_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 5.357142857142857, 2], 'circle-color': '#ffffff', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_13072023_CCTV_3_0",
            "type": "circle",
            "source": "13072023_CCTV_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#9eff01', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_13072023_caixas_4_0",
            "type": "circle",
            "source": "13072023_caixas_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 5.357142857142857, 2], 'circle-color': '#004cff', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}