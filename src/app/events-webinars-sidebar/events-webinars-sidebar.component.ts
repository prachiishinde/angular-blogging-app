// events-webinars-sidebar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-events-webinars-sidebar',
  templateUrl: './events-webinars-sidebar.component.html',
  styleUrls: ['./events-webinars-sidebar.component.css'],
})
export class EventsWebinarsSidebarComponent {
  webinars: any[] = [
    {
      title: 'H2MB | AMAHA | MENTALL WELLNESS PARTNER | REGISTER NOW!',
      date: '2023-07-25',
      time: '10:00 AM',
      link: 'https://example.com/webinar1',
      imageUrl: 'assets/Webinar1.png', // Add the image URL here
    },
    {
      title: '“Compassionate Leadership: How to Do Hard Things in a Human Way”',
      date: '2023-08-01',
      time: '2:30 PM',
      link: 'https://example.com/webinar2',
      imageUrl: 'assets/webinar2.jpg', // Add the image URL here
    },
    // Add more webinars here
  ];

  events: any[] = [
    {
      title: 'Design Summit 2023 | Exciting Design Events - Awaits You All!',
      date: '2023-07-30',
      time: '11:30 AM',
      link: 'https://example.com/event1',
      imageUrl: 'assets/Event1.jpg', // Add the image URL here
    },
    {
      title: 'Augmented World Expo 2022',
      date: '2023-08-05',
      time: '3:00 PM',
      link: 'https://example.com/event2',
      imageUrl: 'assets/Event2.jpg', // Add the image URL here
    },
    {
      title: ' digital-workplace-us',
      date: '2023-08-05',
      time: '2:40 PM',
      link: 'https://example.com/event2',
      imageUrl: 'assets/Event3.jpg', // Add the image URL here
    },
   
    // Add more events here
  ];
}
