import { Component } from '@angular/core';
@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  ngOnInit() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const heading = card.querySelector('h2');
        if (heading) {  // Verificamos si heading no es null
          alert(`Has seleccionado la opción: ${heading.textContent}`);
        } else {
          console.error('No se encontró el elemento <h2> dentro de la tarjeta.');
        }
      });
    });
  }
}

