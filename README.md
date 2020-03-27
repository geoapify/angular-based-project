### Angular-based project skeleton for a map application by [Geoapify](https://www.geoapify.com)
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

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
2. Run `npm install mapbox-gl` to install Mapbox GL library.






# STEP 2 - Option 2. Display a map with [Leaflet](https://leafletjs.com/)
1. Go to the application directory.
2. Run `npm i leaflet mapbox-gl mapbox-gl-leaflet` to install Leaflet library and Mapbox GL Leaflet plugin to display vector maps. By default, Leaflet doesn't have the support of vector maps and map style.



# STEP 2 - Option 3. Display a map with [OpenLayers](https://openlayers.org)
1. Go to the application directory.
2. Run `npm install ol ol-mapbox-style` to install OpenLayers library and Mapbox map style support.


## Build the application
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## More options and configurations
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
