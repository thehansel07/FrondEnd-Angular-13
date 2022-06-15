import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloseditComponent } from './vuelosedit.component';

describe('VueloseditComponent', () => {
  let component: VueloseditComponent;
  let fixture: ComponentFixture<VueloseditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueloseditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
