import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMainBodyComponent } from './log-main-body.component';

describe('LogMainBodyComponent', () => {
  let component: LogMainBodyComponent;
  let fixture: ComponentFixture<LogMainBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogMainBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
