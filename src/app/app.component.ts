import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {




  scrollToElement(elementId) {
    let target = $('#' + elementId);

    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);

  }

}
