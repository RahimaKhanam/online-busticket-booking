import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSeatViewComponent } from './bus-seat-view.component';

describe('BusSeatViewComponent', () => {
  let component: BusSeatViewComponent;
  let fixture: ComponentFixture<BusSeatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusSeatViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusSeatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
