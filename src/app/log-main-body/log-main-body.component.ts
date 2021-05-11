import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogData } from '../types';

@Component({
  selector: 'app-log-main-body',
  templateUrl: './log-main-body.component.html',
  styleUrls: ['./log-main-body.component.scss']
})
export class LogMainBodyComponent implements OnInit {
  @Input() logData: ILogData = {
    key: '',
    host: '',
    protocol: '',
    path: '',
    params: {},
    query: {},
    method: '',
    stage: '',
    requestTime: '',
    requestTimeEpoch: '',
    clientAdress: ''
  };

  logFormGroup: FormGroup = new FormGroup({
    key: new FormControl(this.logData.key),
    host: new FormControl(this.logData.host, Validators.required),
    protocol: new FormControl(this.logData.protocol, Validators.required),
    path: new FormControl(this.logData.protocol, Validators.required),
    params: new FormControl(JSON.stringify(this.logData.params), Validators.required),
    query: new FormControl(JSON.stringify(this.logData.query), Validators.required),
    method: new FormControl(this.logData.method, Validators.required),
    stage: new FormControl(this.logData.stage, Validators.required),
    requestTime: new FormControl(this.logData.requestTime, Validators.required),
    requestTimeEpoch: new FormControl(this.logData.requestTimeEpoch, Validators.required),
    clientAdress: new FormControl(this.logData.clientAdress, Validators.required)
  })

  formIsValid: boolean = true;

  constructor() { }
  ngOnInit(): void {
    this.logFormGroup.get('key').disable();
  }

  ngOnChanges(changes) {
    if (changes && changes.logData && changes.logData.currentValue) {
      this.logFormGroup.patchValue({
        key: changes.logData.currentValue.key,
        host: changes.logData.currentValue.host,
        protocol: changes.logData.currentValue.protocol,
        path: changes.logData.currentValue.path,
        params: JSON.stringify(changes.logData.currentValue.params),
        query: JSON.stringify(changes.logData.currentValue.query),
        method: this.logData.method,
        stage: this.logData.stage,
        requestTime: this.logData.requestTime,
        requestTimeEpoch: this.logData.requestTimeEpoch,
        clientAdress: this.logData.clientAdress
      })
    }
  }

  saveLogChanges() {
    if (this.logFormGroup.valid) {
      this.formIsValid = true;
      Object.assign(this.logData, this.logFormGroup.value)
      localStorage.setItem(this.logData.key, JSON.stringify(this.logData))
    } else {
      this.formIsValid = false;
    }
  }

}
