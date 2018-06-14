import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {


  @Output()
  sendElementId : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }



  navigateToElement(elementId:string){
    event.preventDefault();
    this.sendElementId.emit(elementId);

  }


}