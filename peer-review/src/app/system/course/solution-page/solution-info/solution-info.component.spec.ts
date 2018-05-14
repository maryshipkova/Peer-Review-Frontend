import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionInfoComponent } from './solution-info.component';

describe('SolutionInfoComponent', () => {
  let component: SolutionInfoComponent;
  let fixture: ComponentFixture<SolutionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
