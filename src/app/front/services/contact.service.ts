import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface Message {
  from: string;
  subject?: string;
  content: string;
  userKey?: string;
}

interface EventMessage extends Message {
  eventSlug: string;
  name: string;
  surname: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public constructor(private http: HttpClient) {
  }

  public sendContact(data: Message) {
    return this.http.post(`${environment.api}/contact/send_contact`, data);
  }

  public sendEventRegistration(data: EventMessage) {
    return this.http.post(`${environment.api}/contact/send_event_register`, data);
  }
}
