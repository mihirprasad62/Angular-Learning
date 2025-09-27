import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffTypesStyles } from './diff-types-styles';

describe('DiffTypesStyles', () => {
  let component: DiffTypesStyles;
  let fixture: ComponentFixture<DiffTypesStyles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffTypesStyles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffTypesStyles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
