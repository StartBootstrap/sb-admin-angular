import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'sb-charts-pie',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-pie.component.html',
    styleUrls: ['charts-pie.component.scss'],
})
export class ChartsPieComponent implements OnInit, AfterViewInit {
    @ViewChild('myPieChart') myPieChart!: ElementRef<HTMLCanvasElement>;
    chart!: Chart;

    constructor() {}
    ngOnInit() {}

    ngAfterViewInit() {
        this.chart = new Chart(this.myPieChart.nativeElement, {
            type: 'pie',
            data: {
                labels: ['Blue', 'Red', 'Yellow', 'Green'],
                datasets: [
                    {
                        data: [12.21, 15.58, 11.25, 8.32],
                        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                    },
                ],
            },
        });
    }
}
