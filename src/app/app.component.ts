import { Component, ViewChild } from '@angular/core';
import { LogListComponent } from './log-list/log-list.component';
import { ApiService } from './services/api.service';
import { ILogItem } from './types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  logsList: ILogItem[];
  logToDisplay: string;
  constructor(private api: ApiService) { }
  refreshLogsList($event) {
    this.logsList = this.api.refreshLogList()
    this.logToDisplay = $event;
  }
  selectLogForDisplay($event) {
    this.logToDisplay = JSON.parse(localStorage.getItem($event))
  }
}
