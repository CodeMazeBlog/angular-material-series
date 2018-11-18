import { Owner } from './../../../_interface/owner.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-owner-data',
  templateUrl: './owner-data.component.html',
  styleUrls: ['./owner-data.component.css']
})
export class OwnerDataComponent implements OnInit {
  @Input() public owner: Owner;
  public selectOptions = [{name:'Show', value: 'show'}, {name: `Don't Show`, value: ''}];
  @Output() selectEmitt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onChange = (event) => {
    this.selectEmitt.emit(event.value);
  }

}
