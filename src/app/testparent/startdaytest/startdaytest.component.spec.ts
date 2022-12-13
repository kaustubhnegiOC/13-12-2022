import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartdaytestComponent } from './startdaytest.component';

describe('StartdaytestComponent', () => {
  let component: StartdaytestComponent;
  let fixture: ComponentFixture<StartdaytestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartdaytestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartdaytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
