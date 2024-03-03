import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourcyclistFormComponent } from './tourcyclist-form.component';

describe('TourcyclistFormComponent', () => {
  let component: TourcyclistFormComponent;
  let fixture: ComponentFixture<TourcyclistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TourcyclistFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourcyclistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
