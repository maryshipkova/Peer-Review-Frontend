import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionReviewsComponent } from './solution-reviews.component';

describe('SolutionReviewsComponent', () => {
  let component: SolutionReviewsComponent;
  let fixture: ComponentFixture<SolutionReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
