import { Routes } from '@angular/router';

export const routes: Routes = [
//   {
//     path: '',
//     async loadComponent() {
//       const m = await import('./pages/home/home');
//       return m.Home;
//     },
//   },
//   {
//     path: 'player',
//     async loadComponent() {
//       const m = await import('./pages/player/player');
//       return m.Player;
//     },
//   },
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'players-list',
        loadComponent: () => import('./pages/all-players/all-players').then(m => m.Player),
    },
    {
        path: 'add-player',
        loadComponent: () => import('./pages/add-player/add-player').then(m => m.AddPlayer),
    }
];
