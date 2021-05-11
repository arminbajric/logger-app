import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';
import { ILogData, ILogItem } from '../types';

@Component({
  selector: 'app-log-query-form',
  templateUrl: './log-query-form.component.html',
  styleUrls: ['./log-query-form.component.scss']
})
export class LogQueryFormComponent {

  submitted: boolean = false;
  queryInputBorderColor: string = '';
  apiStages = environment.apiStages;
  @Output() logCreatedEvent = new EventEmitter<ILogData>();
  constructor(private api: ApiService) { }

  queryForm = new FormGroup({
    queryInput: new FormControl('', Validators.required),
    stageSelect: new FormControl(this.apiStages[0])
  })


  submitQuery() {
    this.submitted = true;
    if (this.queryForm.valid) {
      console.log(this.queryForm.get('queryInput').value.match(/^\/*/))
      let numberOfSlashes = 0;
      if (this.queryForm.get('queryInput').value.match(/^\/*/)) {
        numberOfSlashes = this.queryForm.get('queryInput').value.match(/^\/*/)[0].length;
        console.log(numberOfSlashes)
      }
      const path = numberOfSlashes > 0 ? this.queryForm.get('queryInput').value.substring(numberOfSlashes) : this.queryForm.get('queryInput').value;
      const selectedStage = '/' + this.queryForm.get('stageSelect').value.toLowerCase() + '/'

      this.api.getLogForRequest(selectedStage + this.queryForm.get('queryInput').value).subscribe(response => {
        response['key'] = 'log-' + this.queryForm.get('stageSelect').value.toLowerCase() + '/' + path + '  -' + new Date().toLocaleTimeString();
        localStorage.setItem('log-' + this.queryForm.get('stageSelect').value.toLowerCase() + '/' + path + '  -' + new Date().toLocaleTimeString(), JSON.stringify(response))
        this.logCreatedEvent.emit(response)
      })
      console.log('emit')

    }
    else {
      this.queryInputBorderColor = 'red';
    }
  }

}
