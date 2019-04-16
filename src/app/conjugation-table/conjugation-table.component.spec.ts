import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjugationTableComponent } from './conjugation-table.component';

describe('ConjugationTableComponent', () => {
  let component: ConjugationTableComponent;
  let fixture: ComponentFixture<ConjugationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConjugationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
