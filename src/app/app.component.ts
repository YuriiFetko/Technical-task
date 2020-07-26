import {Component} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, Event, NavigationError, NavigationCancel} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test-task';
}
