import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysTask } from './todays-task';

describe('TodaysTask', () => {
  let component: TodaysTask;
  let fixture: ComponentFixture<TodaysTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
