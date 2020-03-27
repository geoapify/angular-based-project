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


# STEP 2 - Option 1. Display a map with [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/api/)
1. Go to the application directory.
2. Run `npm install mapbox-gl @types/mapbox-gl` to install Mapbox GL library and TypeScript types.
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
              "node_modules/mapbox-gl/dist/mapbox-gl.css"
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
import { Map } from 'mapbox-gl';

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
1. Go to the application directory.
2. Run `npm i leaflet mapbox-gl mapbox-gl-leaflet` to install Leaflet library and Mapbox GL Leaflet plugin to display vector maps. By default, Leaflet doesn't have the support of vector maps and map style.

5. Replace YOUR_API_KEY_HERE with an API key you've got on [Geoapify MyProjects](https://myprojects.geoapify.com).
6. Set the mapStyle variable to [Map style](https://apidocs.geoapify.com/docs/maps/map-tiles/map-tiles) you want to use.

# STEP 2 - Option 3. Display a map with [OpenLayers](https://openlayers.org)
1. Go to the application directory.
2. Run `npm install ol ol-mapbox-style` to install OpenLayers library and Mapbox map style support.

5. Replace YOUR_API_KEY_HERE with an API key you've got on [Geoapify MyProjects](https://myprojects.geoapify.com).
6. Set the mapStyle variable to [Map style](https://apidocs.geoapify.com/docs/maps/map-tiles/map-tiles) you want to use.

## Build the application
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## More options and configurations
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
