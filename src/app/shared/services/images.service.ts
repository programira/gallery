import { Category } from './../models/Category';
import { Customer } from './../models/Customer';
import { Image } from './../models/Image';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  customer1: Customer = {id: '323131', name: "Mirjana Milosevic"};
  category1: Category = {id: '334243', title: "Nature"};
  images1: Image[] = [
    {
      link: "https://scontent.fosl1-1.fna.fbcdn.net/v/t1.6435-9/117314228_10157698327031680_2509205775650723651_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=r9PaluaHQaAAX_-LOuL&_nc_ht=scontent.fosl1-1.fna&oh=00_AT-dLKflRMs_gqnVVW8dklDOqek10voGP12EOSiQQH0uUg&oe=62B9C7FE",
      metaData: "canyoning",
      customer: this.customer1,
      category: this.category1,
      title: "Canyoning in Serbia"
    },
    {
      link: "https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/273541681_10158942025271680_7000866721708499622_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=Uv6Og4fWysEAX_ftE5E&tn=csgBnyI6mTaBNcFm&_nc_ht=scontent.fosl1-1.fna&oh=00_AT-vG_kECLMtmAUmzVGioxoEHwyFwOQ7Br-bOE-Vm1-T8A&oe=6297D66D",
      metaData: "waterfall",
      customer: this.customer1,
      category: this.category1,
      title: "Waterfall Prskalo"
    }
  ]

  constructor() { }

  getImages(): Image[] {
    return this.images1;
  }

  // getImageById
  // deleteImage
  // createImage
}
