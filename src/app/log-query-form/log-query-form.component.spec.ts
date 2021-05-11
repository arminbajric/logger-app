import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogQueryFormComponent } from './log-query-form.component';

describe('LogQueryFormComponent', () => {
  let component: LogQueryFormComponent;
  let fixture: ComponentFixture<LogQueryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogQueryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
