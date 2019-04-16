import { Component, OnInit } from '@angular/core';
import { Text } from '../text';
import { CONJUGATIONS } from '../mock-translations';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

  conjugations = CONJUGATIONS;
  verbToConjugate = 'comer';
  textToTranslate: string;

  text: Text  = {
    id: 1,
    text: 'I eat'
  };

  constructor() { }

  ngOnInit() {
  }

}
