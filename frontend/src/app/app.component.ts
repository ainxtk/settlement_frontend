import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { LayoutChangeService } from "./services/layoutchange.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isLoggedIn = false;
  constructor(private layoutChangeService: LayoutChangeService,private router: Router) {}

  ngOnInit() {
    this.layoutChangeService.currentMessage.subscribe((message) => {
      this.isLoggedIn = message == 'inner' 
    })
  }
  logout(){
    this.layoutChangeService.changeLayout("login");
    this.router.navigate(['']);
  }
}
