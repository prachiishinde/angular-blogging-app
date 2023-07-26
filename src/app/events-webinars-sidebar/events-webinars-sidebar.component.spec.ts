import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsWebinarsSidebarComponent } from './events-webinars-sidebar.component';

describe('EventsWebinarsSidebarComponent', () => {
  let component: EventsWebinarsSidebarComponent;
  let fixture: ComponentFixture<EventsWebinarsSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsWebinarsSidebarComponent]
    });
    fixture = TestBed.createComponent(EventsWebinarsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
