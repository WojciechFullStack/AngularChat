import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls:[  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  navigateToChat() {
    this.router.navigate(['/chat']);
  }

  navigateToUsers() {
    console.log('In Users');
    this.router.navigate(['/users']);
  }

  navigateToAdmins() {
    this.router.navigate(['/admins']);
  }
}
