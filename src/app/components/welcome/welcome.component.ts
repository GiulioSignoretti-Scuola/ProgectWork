import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  images: string[] = [
    'assets/img1.webp',
    'assets/img2.webp',
    'assets/img3.webp',
  ];
  currentImageIndex: number = 0;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    setInterval(() => {
      this.showNextImage();
    }, 3000); // Cambia immagine ogni 3 secondi
  }

  showNextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  redirectToVassoio(): void {
    window.location.href = '/vassoio'; // Reindirizza alla pagina vassoio
  }
}