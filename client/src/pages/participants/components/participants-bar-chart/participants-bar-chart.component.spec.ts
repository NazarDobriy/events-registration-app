import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsBarChartComponent } from './participants-bar-chart.component';

describe('ParticipantsBarChartComponent', () => {
  let component: ParticipantsBarChartComponent;
  let fixture: ComponentFixture<ParticipantsBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantsBarChartComponent]
    });
    fixture = TestBed.createComponent(ParticipantsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
