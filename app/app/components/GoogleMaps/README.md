# Google Maps API Overview

This purpose of this diocument is to explain the important Google Maps API components used for the project, what they do, and how they can help to build interactive maps using `@googlemaps/js-api-loader`.

---

## 1. Initializing Google Maps with [`@googlemaps/js-api-loader`](https://googlemaps.github.io/js-api-loader/index.html)

The `@googlemaps/js-api-loader` library simplifies loading the Google Maps API by handling the asynchronous loading process. It ensures that the necessary scripts are loaded before initializing the map. For the map to work an API key must be provided from Google Cloud project API service. The key needs to be declared as environment variable named `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` and in the API key settings in website restrictions section it is recommended to add the URL of the website which will use the key or else the map will accept requests from any website.

---

## 2. [`Map`](https://developers.google.com/maps/documentation/javascript/add-google-map)
The `Map` class is the core of Google Maps integration. It can be used it to control how the map looks (e.g., the zoom level, map type like satellite or terrain), where it's centered, and how users can interact with it (like dragging, zooming, etc.). 

### Key Features:
- Displays a map with customizable zoom and center.
- Provides interaction with the map (dragging, zooming, etc.).
- Can add markers, lines, or shapes on top of the map.
- Responds to events like map clicks, zoom changes, and more.

---

## 3. [`InfoWindow`](https://developers.google.com/maps/documentation/javascript/infowindows)
An `InfoWindow` is like a pop-up bubble that can be can used to display information on the map. 

### Key Features:
- Shows pop-up info at specific locations.
- Works with markers or at any geographic point.
- Can include basic text or HTML (so it can be styled).

---

## 4. [`AdvancedMarkerElement`](https://developers.google.com/maps/documentation/javascript/advanced-markers/migration)
The `AdvancedMarkerElement` can create customizable map markers. Instead of using the basic marker, you can design different marker using HTML and CSS, which gives full control over how the marker looks and behaves.

### Key Features:
- Can create custom markers with HTML/CSS.
- Allows custom shapes and styles instead of the usual map pin.

---

## 5. [`Place`](https://developers.google.com/maps/documentation/javascript/place)
A `Place` refers to a specific location. Google Maps has a lot of data about places, and the `Place` API can be used to get detailed information about location.

### Key Features:
- Gives detailed info about a specific location.
- Returns data like name, address, website, reviews, etc.
- Works well with Place Search and Autocomplete for location lookups.

---

## 6. [`Autocomplete`](https://developers.google.com/maps/documentation/javascript/place-autocomplete-data)
`Autocomplete` is a feature that suggests places or addresses as user types. It is super useful for letting users quickly find and select locations without typing the full address.

### Key Features:
- Suggests locations as the user types in an input field.
- Can be filtered to specific areas or types of places (e.g., cities, regions).
- Works well with forms where users enter addresses or location info.

---

## 7. [`AutocompleteSessionToken`](https://developers.google.com/maps/documentation/javascript/place-autocomplete-data#session-tokens)
The `AutocompleteSessionToken` helps manage multiple `Autocomplete` requests within a single session. It’s more of a behind-the-scenes helper that groups related autocomplete queries (like when someone types and selects from a list of suggestions), which can also help optimize billing.

### Key Features:
- Groups multiple related autocomplete requests.
- Helps improve performance and cost-efficiency of autocomplete queries.
- Useful when you have a sequence of searches happening in quick succession.

---

## 8. [`Geocoder`](https://developers.google.com/maps/documentation/javascript/geocoding)
The `Geocoder` lets you convert an address into geographic coordinates (latitude and longitude) or do the reverse—turn a set of coordinates into a readable address.

### Key Features:
- Converts addresses into geographic coordinates (geocoding).
- Converts coordinates into addresses (reverse geocoding).
- Helps place pins or markers on a map based on addresses.

---

## 9. [`DirectionsService`](https://developers.google.com/maps/documentation/javascript/directions)
`DirectionsService` helps with calculating directions between two or more locations. It supports driving, walking, biking, and public transit.

### Key Features:
- Calculates directions between locations for various travel modes.
- Supports complex routes with multiple stops (waypoints).

---

## 10. [`DirectionsRenderer`](https://developers.google.com/maps/documentation/javascript/directions#RenderingDirections)
`DirectionsRenderer` is responsible for showing those calculated directions on the map. It takes the result from `DirectionsService` and draws the route, including lines, markers, and any visual elements that represent the route.

### Key Features:
- Displays directions as a route on the map.
- Can handle multiple route legs (e.g., stops along the way).
- Customizable line styles for the route (color, width, etc.).
- Works with markers to indicate start, end, and waypoints.

---

## 11. [`LatLng`](https://developers.google.com/maps/documentation/javascript/reference/coordinates)
The `LatLng` class represents a point in geographical coordinates: latitude and longitude.
