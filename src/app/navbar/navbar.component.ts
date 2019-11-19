import { Component, OnInit } from '@angular/core';
import { ObjectService } from '../services/ObjectService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public state = 1;

  constructor(private listService: ObjectService) { }

  ngOnInit() {
  }

  showSideBar() {
    if (this.state === 0) { this.state = 1; } else { this.state = 0; }
  }

  connectAll() {
    this.listService.connectAll();
  }

  disconnectAll() {
    this.listService.disconnectAll();
  }

  allumeAll() {
    this.listService.allumeAll();
  }

  eteindreAll() {
    this.listService.eteindreAll();
  }

}
