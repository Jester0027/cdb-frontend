import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface Message {
  from: string;
  subject: string;
  content: string;
  userKey?: string;
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
}
