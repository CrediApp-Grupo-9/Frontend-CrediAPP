import {Component, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private el:ElementRef, private router: Router) {
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      // Obten la posición del elemento respecto al inicio del documento
      const offset = element.offsetTop;

      // Desplázate suavemente hacia la posición del elemento
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }

  navigateToCounter(): void {
    this.router.navigateByUrl('/login');
  }
}
