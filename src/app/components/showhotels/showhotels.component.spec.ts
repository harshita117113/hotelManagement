import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhotelsComponent } from './showhotels.component';

describe('ShowhotelsComponent', () => {
  let component: ShowhotelsComponent;
  let fixture: ComponentFixture<ShowhotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowhotelsComponent]
    });
    fixture = TestBed.createComponent(ShowhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
