import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ApiService } from '../services/api.service';
import { ILogItem } from '../types';

@Component({
  selector: 'app-logs-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {
  @Input() logsList: ILogItem[];
  constructor(private api: ApiService) { }
  @Output() displayLogEvent = new EventEmitter<string>()
  ngOnInit(): void {
    this.logsList = this.api.refreshLogList()
  }

  deleteLog(key) {
    localStorage.removeItem(key)
    this.logsList = this.api.refreshLogList()
  }
  displayLog(key) {
    this.displayLogEvent.emit(key)
  }

}
