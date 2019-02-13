import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTickestComponent } from './list-tickest.component';

describe('ListTickestComponent', () => {
  let component: ListTickestComponent;
  let fixture: ComponentFixture<ListTickestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTickestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTickestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
