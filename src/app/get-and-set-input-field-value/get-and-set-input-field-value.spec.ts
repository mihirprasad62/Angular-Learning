import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAndSetInputFieldValue } from './get-and-set-input-field-value';

describe('GetAndSetInputFieldValue', () => {
  let component: GetAndSetInputFieldValue;
  let fixture: ComponentFixture<GetAndSetInputFieldValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAndSetInputFieldValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAndSetInputFieldValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
