import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  // Injectamos el router para poder navegar programáticamente
  constructor(private router: Router) {}

  // Función que manejará el envío del formulario
  onSubmit(event: Event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    const email = (event.target as HTMLFormElement).querySelector('#email') as HTMLInputElement;
    const password = (event.target as HTMLFormElement).querySelector('#password') as HTMLInputElement;

    // Emulación de correo y contraseña correctos
    const validEmail = 'Pollito@gmail.com';
    const validPassword = '123456';

    // Verificar si el correo y la contraseña son correctos
    if (email.value === validEmail && password.value === validPassword) {
        // Redirigir al path /clientes si el login es exitoso
        this.router.navigate(['/cliente']);
    } else {
        // Mostrar mensaje de error si el login falla
        alert('Correo o contraseña incorrectos. Inténtalo de nuevo.');
    }
  }
}
