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
  standalone: true, // Agrega esta línea
  imports: [CommonModule, FormsModule]

})
export class GusuariosComponent {
  filtro: string = '';
  usuarios: Usuario[] = [
    { nombre: 'Juan Pérez', cargo: 'Gerente', identificacion: '123456', activo: true },
    { nombre: 'Ana Gómez', cargo: 'Desarrolladora', identificacion: '654321', activo: false },
  ];
usuario: any;

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
