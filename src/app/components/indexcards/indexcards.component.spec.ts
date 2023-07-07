import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcardsComponent } from './indexcards.component';

describe('IndexcardsComponent', () => {
  let component: IndexcardsComponent;
  let fixture: ComponentFixture<IndexcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
