import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Serie[] = [];
  average: number = 0;
  caption: string = "";

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.serieService.getSeries().subscribe(
        series => {
          this.series = series;
          this.promedioTemp(series);
        }
      );
  }

  promedioTemp(series: Serie[] = this.series) {
    // Get the average of the series seasons
    this.average = series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;
    this.caption = "Seasons average: " + this.average;
  }

}
