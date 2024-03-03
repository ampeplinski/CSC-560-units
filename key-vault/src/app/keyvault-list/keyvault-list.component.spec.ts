import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyvaultListComponent } from './keyvault-list.component';

describe('KeyvaultListComponent', () => {
  let component: KeyvaultListComponent;
  let fixture: ComponentFixture<KeyvaultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyvaultListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyvaultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
