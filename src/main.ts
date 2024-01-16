import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { provideRouter } from '@angular/router';
// Import your components
import { ChatComponent } from './app/chat/chat.component';
import { UsersComponent } from './app/users/users.component';
import { AdminsComponent } from './app/admins/admins.component';
import { Route } from '@angular/router';
const appRoutes: Routes = [];
// Use Route type, not Routes[]
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admins', component: AdminsComponent },
  // Add more routes as needed
  { path: '', redirectTo: '/chat', pathMatch: 'full' }, // Default route
];

// Create a router instance with your routes
const appRouter = RouterModule.forRoot(routes);

// Bootstrap your application with the AppComponent and the configured router
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
