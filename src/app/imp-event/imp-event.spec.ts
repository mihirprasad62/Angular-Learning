import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpEvent } from './imp-event';

describe('ImpEvent', () => {
  let component: ImpEvent;
  let fixture: ComponentFixture<ImpEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
