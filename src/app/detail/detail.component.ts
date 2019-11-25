import { Component, OnInit } from '@angular/core';
import {ObjectService} from '../services/ObjectService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name;
  place;
  status;
  etat;

  constructor(private monservice: ObjectService, private routeactive: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    const id = this.routeactive.snapshot.paramMap.get('id');
    this.name = this.monservice.getAppareil(+id).name;
    this.place = this.monservice.getAppareil(+id).place;
    this.etat = this.monservice.getAppareil(+id).etat;
    this.status = this.monservice.getAppareil(+id).status;
  }

  returnToPreviousPage() {
    this.route.navigate(['/list']);
  }

}
