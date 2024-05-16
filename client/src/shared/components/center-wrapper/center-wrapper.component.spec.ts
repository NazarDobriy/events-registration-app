import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterWrapperComponent } from './center-wrapper.component';

describe('CenterWrapperComponent', () => {
  let component: CenterWrapperComponent;
  let fixture: ComponentFixture<CenterWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterWrapperComponent]
    });
    fixture = TestBed.createComponent(CenterWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
