import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { Chart, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-participants-bar-chart',
  templateUrl: './participants-bar-chart.component.html'
})
export class ParticipantsBarChartComponent implements AfterViewInit, OnDestroy {
  @Input() days: string[] = [];
  @Input() registrations: number[] = [];

  @ViewChild('barChart') donut!: ElementRef;

  chart: Chart | null = null;
  private options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Registrations'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        enabled: true
      }
    }
  };

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const canvas: HTMLCanvasElement = this.donut.nativeElement;
    const ctx = canvas.getContext('2d');

    if (ctx != null) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.days,
          datasets: [
            {
              label: 'The amount of registrations per day',
              data: this.registrations,
              fill: false
            }
          ]
        },
        options: this.options
      });
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
