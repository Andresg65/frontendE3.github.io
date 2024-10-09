import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Usuario {
  nombre: string;
  cargo: string;
  identificacion: string;
  activo: boolean;
}

@Component({
  selector: 'app-gusuarios',
  templateUrl: './gusuarios.component.html',
  styleUrls: ['./gusuarios.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class GusuariosComponent {
  filtro: string = '';
  usuarios: Usuario[] = [
    { nombre: 'Juan Pérez', cargo: 'Gerente', identificacion: '123456', activo: true },
    { nombre: 'Ana Gómez', cargo: 'Desarrolladora', identificacion: '654321', activo: false },
    { nombre: 'Camilo Obando', cargo: 'Desarrollador', identificacion: '235256', activo: true },
    { nombre: 'Oscar Guio', cargo: 'Analista QA', identificacion: '48585', activo: false },
    { nombre: 'Juan Suarez', cargo: 'Lead QA', identificacion: '235646', activo: true },
    { nombre: 'Jose Moyano', cargo: 'Analista Procesos', identificacion: '263773636', activo: true },
    { nombre: 'Ana Roa', cargo: 'Director', identificacion: '654321', activo: false },
  ];

  get usuariosFiltrados(): Usuario[] {
    return this.usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  toggleActivo(usuario: Usuario): void {
    usuario.activo = !usuario.activo;
  }

  editarUsuario(usuario: Usuario): void {
    // Lógica para editar el usuario
    console.log('Editar usuario:', usuario);
  }
}
