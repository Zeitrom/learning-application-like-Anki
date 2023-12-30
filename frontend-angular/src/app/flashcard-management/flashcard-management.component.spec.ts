import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardManagementComponent } from './flashcard-management.component';

describe('FlashcardManagementComponent', () => {
  let component: FlashcardManagementComponent;
  let fixture: ComponentFixture<FlashcardManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashcardManagementComponent]
    });
    fixture = TestBed.createComponent(FlashcardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
