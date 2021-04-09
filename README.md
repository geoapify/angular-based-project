### Angular-based project skeleton for a map application by [Geoapify](https://www.geoapify.com)
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

# STEP 1. Run the application
1. [Clone or download](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the source code of the application to your computer.
2. Install Node.js if not installed [from Download page](https://nodejs.org/en/download/) or [via package manager](https://nodejs.org/en/download/package-manager/).
3. Run `npm install -g @angular/cli` to install [Angular CLI](https://cli.angular.io/) globally. Note, `sudo` may require for this operation.
4. Go to the application directory.
5. Run `npm install` to get all dependencies.
6. Run `ng serve` for a dev server. 
7. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**The page contains only one phrase "The map will be displayed here", that we replace now with a map.**

### Geoapify Map Tiles
Geoapify offers vector and raster map tiles of different styles and colors. 

We use Mapbox style specification that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. 

Visit our documentation page for [Map Tiles](https://apidocs.geoapify.com/docs/maps/map-tiles/map-tiles) to get a map style link for a map.

### Geoapify API key
You will require Geoapify API Key to display a map. Register and get an API key for free on [Geoapify MyProjects](https://myprojects.geoapify.com).

We have a Freemium pricing model. Start using our services now for FREE and extend when you need.

### Text editor
You can use any text editor for writing HTML, CSS, and JavaScript/TypeScript. However, we recommend you try [Visual Studio Code](https://code.visualstudio.com).


# STEP 2 - Option 1. Display a map with [MapLibre GL](https://www.npmjs.com/package/maplibre-gl)(an open-source fork of Mapbox GL)

----

In December 2020 the Mapbox GL JS version 2.0 was released under a proprietary license. So Mapbox GL 2.x not under the 3-Clause BSD license anymore. 
The [MapLibre GL](https://github.com/maplibre/maplibre-gl-js) is the official open-source fork of Mapbox GL.

----

1. Go to the application directory.
2. Run `npm install maplibre-gl @types/maplibre-gl` to install Mapbox GL library and TypeScript types.
3. Add Mapbox GL styles. For example, in angular.json:
```json
"projects": {
    "angular-project": {
      ...
      "architect": {
        "build": {
          "options": {
            ...
            "styles": [
              "src/styles.scss",
              "node_modules/maplibre-gl/dist/maplibre-gl.css"
            ],
            "scripts": []
          },
          ...
        }
      }
    }
}
```
**You will need to restart the dev server to apply changes from angular.json.**

4. Remove the placeholder element from MyMapComponent and create a Mapbox GL map:
```html
<div class="map-container" #map></div>
```
```typescript
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map } from 'maplibre-gl';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent implements OnInit, AfterViewInit {

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  private map: Map;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const myAPIKey = 'YOUR_API_KEY_HERE'; 
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';

    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4
    };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
  }
}

```
5. Replace YOUR_API_KEY_HERE with an API key you've got on [Geoapify MyProjects](https://myprojects.geoapify.com).
6. Set the mapStyle variable to [Map style](https://apidocs.geoapify.com/docs/maps/map-tiles/map-tiles) you want to use.

# STEP 2 - Option 2. Display a map with [Leaflet](https://leafletjs.com/)

----

The Leaflet library doesn't have native support for vector map tiles. There a number of Leaflet plugins that may help o visualize vector maps. However, none of them is actively supported.

This tutorial contains instructions on how to visualize raster map tiles. Note, that you need in different vector maps you need to take care of high-resolution screens. Use the '@2x' suffix to get high-resolution map tile images.

----

1. Go to the application directory.
2. Run `npm i leaflet @types/leaflet` to install Leaflet library + TypeScript types.
3. Add Leaflet and Mapbox GL styles. For example, in angular.json:
```json
"projects": {
    "angular-project": {
      ...
      "architect": {
        "build": {
          "options": {
            ...
            "styles": [
              "src/styles.scss",
              "node_modules/leaflet/dist/leaflet.css"
            ],
            "scripts": []
          },
          ...
        }
      }
    }
}
```
**You will need to restart the dev server to apply changes from angular.json.**

4. Remove the placeholder element from MyMapComponent and create a Mapbox GL map:
```html
<div class="map-container" #map></div>
```
```typescript
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import  * as L from 'leaflet';
@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent implements OnInit, AfterViewInit {

  private map: L.Map;

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4
    };

    const map = L.map(this.mapContainer.nativeElement).setView([initialState.lat, initialState.lng], initialState.zoom);

    const myAPIKey = 'YOUR_API_KEY_HERE';

    const isRetina = L.Browser.retina;
    const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
    const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";
    
    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
      apiKey: myAPIKey,
      maxZoom: 20,
      id: 'osm-bright',
    } as any).addTo(map);
  }
}
```
5. Replace YOUR_API_KEY_HERE with an API key you've got on [Geoapify MyProjects](https://myprojects.geoapify.com).
6. Set the mapStyle variable to [Map style](https://apidocs.geoapify.com/docs/maps/map-tiles/map-tiles) you want to use.

# STEP 2 - Option 3. Display a map with [OpenLayers](https://openlayers.org)
1. Go to the application directory.
2. Run `npm install ol ol-mapbox-style @types/openlayers` to install OpenLayers library + Typescript types and Mapbox map style support.
3. Add OpenLayers styles. For example, in angular.json:
```json
"projects": {
    "angular-project": {
      ...
      "architect": {
        "build": {
          "options": {
            ...
            "styles": [
              "src/styles.scss",
              "node_modules/ol/ol.css"
            ],
            "scripts": []
          },
          ...
        }
      }
    }
}
```
**You will need to restart the dev server to apply changes from angular.json.**

4. Remove the placeholder element from MyMapComponent and create a Mapbox GL map:
```html
<div class="map-container" #map></div>
```
```typescript
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map } from 'openlayers';
import olms from 'ol-mapbox-style';
import * as proj from 'ol/proj';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.scss']
})
export class MyMapComponent implements OnInit, AfterViewInit {

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4
    };

    const myAPIKey = 'YOUR_API_KEY_HERE';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';

    olms(this.mapContainer.nativeElement, `${mapStyle}?apiKey=${myAPIKey}`).then((map: Map) => {
      map.getView().setCenter(proj.transform([initialState.lng, initialState.lat], 'EPSG:4326', 'EPSG:3857'));
      map.getView().setZoom(initialState.zoom);
    });
  }
}

```
5. Replace YOUR_API_KEY_HERE with an API key you've got on [Geoapify MyProjects](https://myprojects.geoapify.com).
6. Set the mapStyle variable to [Map style](https://apidocs.geoapify.com/docs/maps/map-tiles/map-tiles) you want to use.

## Build the application
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## More options and configurations
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
