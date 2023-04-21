import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FAIRHOUSE';

  housingLocationList: HousingLocation[] = [
    {
      name: "Presidential Villa",
      city: "Eziobodo",
      state: "Imo",
      photo: "../assets/presidential.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      name: "Glo Lodge",
      city: "Eziobodo",
      state: "Imo",
      photo: "../assets/glo.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: true,
    },
    {
      name: "Dominion City",
      city: "Eziobodo",
      state: "Imo",
      photo: "../assets/dcity.jpg",
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      name: "Koko Mansion",
      city: "Umuchima",
      state: "Imo",
      photo: "../assets/koko.jpg",
      availableUnits: 7,
      wifi: true,
      laundry: true,
    },
    {
      name: "Fair Haven",
      city: "Ihiagwa",
      state: "Imo",
      photo: "../assets/fair.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: true,
    },
  ]

  selectedLocation: HousingLocation | undefined;
  
  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
