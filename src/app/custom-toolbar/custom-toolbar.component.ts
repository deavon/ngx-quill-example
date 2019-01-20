import { Component, OnInit } from '@angular/core';
import Counter from '../counter';
import Quill from 'quill';

Quill.register('modules/counter', Counter)

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.css']
})
export class CustomToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
