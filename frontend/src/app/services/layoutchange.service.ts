import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutChangeService {

  private messageSource = new BehaviorSubject('login');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeLayout(message: string) {
    this.messageSource.next(message)
  }

}