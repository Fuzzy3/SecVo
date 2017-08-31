import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuIsOpen : boolean = false;
  toggleMenu() {
    let bool = this.menuIsOpen;
    this.menuIsOpen = bool === false ? true : false;
  }

  toggleMenuOff() {
    this.menuIsOpen = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
