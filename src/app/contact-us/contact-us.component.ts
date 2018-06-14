import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

        // function init_map1() {
        //     var myLocation = new google.maps.LatLng(38.885516, -77.09327200000001);
        //     var mapOptions = {
        //         center: myLocation,
        //         zoom: 16
        //     };
        //     var marker = new google.maps.Marker({
        //         position: myLocation,
        //         title: "Property Location"
        //     });
        //     var map = new google.maps.Map(document.getElementById("map"),
        //         mapOptions);
        //     marker.setMap(map);
        // }
        // init_map1();

}
