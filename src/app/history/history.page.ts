import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history: any = 'today';
  todaysData: any = [];
  weeksData: any = [];
  monthsData: any = [];

  todaysdate: any = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().split("T")[0];

  data: any = [
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-31" },
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-28" },
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-27" },
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-26" },
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-22" },
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-20" },
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-15" },
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-10" },
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-05" },
    { "stationName": "Sahyadri Farms", "chargeDuration": "1 hour", "amount": "200", "date": "2020-01-02" },
  ]


  constructor() { }

  ngOnInit() {
    this.todaysData = this.data.filter((item) => {
      return item.date === this.todaysdate;
    })

    var currentDate = new Date;
    var firstday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
    var lastday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6));

    var formattedFirst = new Date(firstday.getTime() - (firstday.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
    var formattedLast = new Date(lastday.getTime() - (lastday.getTimezoneOffset() * 60000)).toISOString().split("T")[0];

    this.weeksData = this.data.filter((item) => {
      return new Date(item.date).getTime() >= new Date(formattedFirst).getTime() || new Date(item.date).getTime() >= new Date(formattedLast).getTime();
    })
  }

}
