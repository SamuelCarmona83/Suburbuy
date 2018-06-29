import { Component, OnInit } from '@angular/core';

 import { MapsAPILoader } from '@agm/core';
 import {} from '@types/googlemaps';
 import { ViewChild, ElementRef, NgZone } from '@angular/core';




@Component({
  selector: 'app-addinmueble',
  templateUrl: './addinmueble.component.html',
  styleUrls: ['./addinmueble.component.css']
})



export class AddinmuebleComponent implements OnInit {

  latitude = 6.42375;
  longitude = -66.58973000000003;
  locationChosen = false;
  coords = {};
  zoom = 4.5;

  
@ViewChild('search') public searchElement: ElementRef;

constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

ngOnInit() {
  this.initmapa();
}
  
  /**
   * incia el mapa de publicar inmueble
   * @param {google.maps.places.PlaceResult = autocomplete.getPlace(); } place [description]
   */
  initmapa(){  this.mapsAPILoader.load().then(
    () => {
     let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);

      autocomplete.addListener("place_changed", () => {
       this.ngZone.run(() => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        if(place.geometry === undefined || place.geometry === null ){
            return;
        }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 14;
          this.locationChosen = true;
       });
      });
     });}
  
  /**
   * Maneja la direccion cuando se hace click sobre el mapa
   * @param {event} event mapClic
   */
  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.zoom = 14;
    this.locationChosen = true;
    this. coords = event;
    console.log(this.coords);
  }


  // Estilo del mapa porque no entiendo las rutas relativas en variables
  styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];

}
