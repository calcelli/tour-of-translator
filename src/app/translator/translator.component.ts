import { Component, OnInit } from '@angular/core';
import { Text } from '../text';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  text: Text  = {
    id: 1,
    text: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
