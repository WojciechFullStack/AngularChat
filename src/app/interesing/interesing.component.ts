import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-interesing',
  standalone: true,
  imports: [SlickCarouselModule,CommonModule],
  templateUrl: './interesing.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './interesing.component.css']
})
export class InteresingComponent {
  interests = [
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'},
    { icon: 'https://static3.depositphotos.com/1003681/164/i/450/depositphotos_1646367-stock-photo-crocus.jpg', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png', link: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' },
    // ... Dodaj więcej zainteresowań
  ];

  carouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true
  };

  slides = [
    {img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"},
    {img: "https://static3.depositphotos.com/1003681/164/i/450/depositphotos_1646367-stock-photo-crocus.jpg"},
    {img: "https://st.depositphotos.com/1005979/2522/i/600/depositphotos_25225565-stock-photo-proactive-vs-reactive-two-way.jpg"},
    {img: "https://st4.depositphotos.com/13324256/19660/i/600/depositphotos_196602824-stock-photo-close-flower-blue-white-petals.jpg"},
    {img:"https://st.depositphotos.com/3239661/4458/v/600/depositphotos_44580617-stock-illustration-mona-lisa-flower.jpg"}
  ];
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 4};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: Event) {
    console.log('slick initialized');
  }

  breakpoint(e: Event) {
    console.log('breakpoint');
  }

  afterChange(e: Event) {
    console.log('afterChange');
  }

  beforeChange(e: Event) {
    console.log('beforeChange');
  }
}
