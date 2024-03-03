import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourcyclistTopComponent } from './tourcyclist-top.component';

describe('TourcyclistTopComponent', () => {
  let component: TourcyclistTopComponent;
  let fixture: ComponentFixture<TourcyclistTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourcyclistTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourcyclistTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
