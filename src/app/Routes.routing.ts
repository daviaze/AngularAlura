import { TransferenciaComponent } from './transferencia/transferencia.component';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { ExtratoComponent } from './extrato/extrato.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "", redirectTo: "extrato", pathMatch: 'full'
  },
  {
    path: "extrato", component: ExtratoComponent
  },
  {
    path: "nova-transferencia", component: TransferenciaComponent
  }
];

export const RoutesRoutes = RouterModule.forRoot(routes);
