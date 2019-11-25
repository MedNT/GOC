import {Component, Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ObjectService } from '../services/ObjectService';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  @Input() nom;
  @Input() status;
  @Input() id;
  public hide = 0;
  public turn = 0;
  public color = 'red';
  public list = Array();

  constructor(private listService: ObjectService) {
  }

  ngOnInit() {
    this.list = this.listService.objectList;
  }

  onSubmit(form: NgForm) {
    this.hide = 1;
    this.showAddObject();
    const object = {
      id: 0,
      name: form.value.name,
      place: form.value.place,
      status: 'deconnecté',
      etat: 'eteint'
    };

    object.id = this.listService.objectList[this.listService.objectList.length - 1].id + 1;
    this.listService.addObject(object);
  }

  showAddObject() {
    if (this.hide === 0) { this.hide = 1; } else { this.hide = 0; }
  }

  getColorByStatus(i) {
    return this.listService.getColorByStatus(i);
  }

  getColorByEtat(i) {
    return this.listService.getColorByEtat(i);
  }

  run(i) {

    if (this.turn === 0) {
      this.turn = 1;
      this.color = 'red';
    } else {
      this.turn = 0;
      this.color = 'green';
    }

    this.listService.switchStatus(i);
  }

  connect(i) {
    this.listService.switchEtat(i);
  }
}
