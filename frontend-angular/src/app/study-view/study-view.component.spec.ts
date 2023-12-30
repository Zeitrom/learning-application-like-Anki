import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyViewComponent } from './study-view.component';

describe('StudyViewComponent', () => {
  let component: StudyViewComponent;
  let fixture: ComponentFixture<StudyViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyViewComponent]
    });
    fixture = TestBed.createComponent(StudyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
