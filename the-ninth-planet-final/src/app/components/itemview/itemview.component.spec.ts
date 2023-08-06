import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemviewComponent } from './itemview.component';

describe('ItemviewComponent', () => {
  let component: ItemviewComponent;
  let fixture: ComponentFixture<ItemviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemviewComponent]
    });
    fixture = TestBed.createComponent(ItemviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
