import { Component, OnInit, Input } from '@angular/core';
import { CONJUGATIONS } from '../mock-translations';


@Component({
  selector: 'app-conjugation-table',
  templateUrl: './conjugation-table.component.html',
  styleUrls: ['./conjugation-table.component.css']
})
export class ConjugationTableComponent implements OnInit {

  @Input() verb: string;

  conjugations = CONJUGATIONS;

  constructor() { }

  ngOnInit() {
  }

}
