import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class UsersComponent {
  users = [
    { name: 'User 1', status: 'active', lastActive: new Date() },
    { name: 'User 2', status: 'inactive', lastActive: new Date() },
    // Add more users as needed
  ];

  userClicked(user: any) {
    console.log('User clicked:', user);
    // Add your custom logic here
  }
}
