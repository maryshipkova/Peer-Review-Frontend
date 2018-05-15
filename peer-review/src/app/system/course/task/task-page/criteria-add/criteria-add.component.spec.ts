import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaAddComponent } from './criteria-add.component';

describe('CriteriaAddComponent', () => {
  let component: CriteriaAddComponent;
  let fixture: ComponentFixture<CriteriaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
