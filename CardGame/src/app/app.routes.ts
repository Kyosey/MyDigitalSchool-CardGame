import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardManagerComponent } from './components/card-manager/card-manager.component';
import { DeckComponent } from './components/deck/deck.component';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'dashboard', component: DashboardComponent,
  children: [
    { path: '', redirectTo: 'game', pathMatch: 'full' },
    { path: 'card-manager', component: CardManagerComponent },
    { path: 'deck', component: DeckComponent},
    { path: 'game', component: GameComponent},
  ],
  },

];
