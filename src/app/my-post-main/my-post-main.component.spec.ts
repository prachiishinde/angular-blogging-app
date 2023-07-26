import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostMainComponent } from './my-post-main.component';

describe('MyPostMainComponent', () => {
  let component: MyPostMainComponent;
  let fixture: ComponentFixture<MyPostMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPostMainComponent]
    });
    fixture = TestBed.createComponent(MyPostMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
