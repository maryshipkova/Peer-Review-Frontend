import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionResolveComponent } from './solution-resolve.component';

describe('SolutionResolveComponent', () => {
  let component: SolutionResolveComponent;
  let fixture: ComponentFixture<SolutionResolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionResolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
