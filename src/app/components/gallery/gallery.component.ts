import { Component, OnInit } from '@angular/core';
import { ImagesService } from './../../shared/services/images.service';
import { Image } from './../../shared/models/Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.images = this.imagesService.getImages();
  }

}
