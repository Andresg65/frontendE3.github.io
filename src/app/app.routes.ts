import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { GusuariosComponent } from './components/gusuarios/gusuarios.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistrarseComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'GUsuarios', component: GusuariosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Redirección para rutas no encontradas
];
