import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  selectedProduct: any;
  cartProducts: any[] = [];
  cardQuantity: number = 0;
  products = [{
    id: 1,
    name: 'Iphone 14',
    description: 'El mejor celular del mundo',
    price: 1500,
    stock: 15,
    image: 'https://www.citypng.com/public/uploads/preview/iphone-14-pro-and-max-deep-purple-png-11662587434zacaxkb4sd.png',
    color: 'grey',
    spects: `PROGRAM DETAILS: When you add this offer to cart, it will reflect 3 items: the iPhone, SIM kit, and carrier subscription
    Ceramic Shield, tougher than any smartphone glass
    A14 Bionic chip, the fastest chip ever in a smartphone
    LiDAR Scanner for improved AR experiences, Night mode portraits
    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
    Industry-leading IP68 water resistance
    Supports MagSafe accessories for easy attachment and faster wireless charging`
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    description: 'El segundo mejor celular del mundo',
    price: 1200,
    stock: 1,
    image: 'https://w7.pngwing.com/pngs/108/8/png-transparent-samsung-galaxy-s21-ultra-electronics-android-phones-thumbnail.png',
    color: 'green',
    spects: `PROGRAM DETAILS: When you add this offer to cart, it will reflect 3 items: the iPhone, SIM kit, and carrier subscription
    Ceramic Shield, tougher than any smartphone glass
    A14 Bionic chip, the fastest chip ever in a smartphone
    LiDAR Scanner for improved AR experiences, Night mode portraits
    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
    Industry-leading IP68 water resistance
    Supports MagSafe accessories for easy attachment and faster wireless charging`
  },
  {
    id: 3,
    name: 'Xiaomi Mi 11',
    description: 'El tercer mejor celular del mundo',
    price: 1000,
    stock: 8,
    image: 'https://themayanagari.com/wp-content/uploads/2021/04/mi-11-2.jpg',
    color: 'red',
    spects: `PROGRAM DETAILS: When you add this offer to cart, it will reflect 3 items: the iPhone, SIM kit, and carrier subscription
    Ceramic Shield, tougher than any smartphone glass
    A14 Bionic chip, the fastest chip ever in a smartphone
    LiDAR Scanner for improved AR experiences, Night mode portraits
    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
    Industry-leading IP68 water resistance
    Supports MagSafe accessories for easy attachment and faster wireless charging`
  },
  {
    id: 4,
    name: 'Huawei P40 Pro',
    description: 'El cuarto mejor celular del mundo',
    price: 900,
    stock: 5,
    image: 'https://storage.comprasmartphone.com/smartphones/huawei-p40.png',
    color: 'blue',
    spects: `PROGRAM DETAILS: When you add this offer to cart, it will reflect 3 items: the iPhone, SIM kit, and carrier subscription
    Ceramic Shield, tougher than any smartphone glass
    A14 Bionic chip, the fastest chip ever in a smartphone
    LiDAR Scanner for improved AR experiences, Night mode portraits
    12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
    Industry-leading IP68 water resistance
    Supports MagSafe accessories for easy attachment and faster wireless charging`
  }

  ];

  handleProductSelected(product: any) {
    const existingProduct = this.cartProducts.findIndex((item) => item.id === product.id); // -1
    if (existingProduct !== -1) {
      this.cartProducts[existingProduct].quantity++;
    }
    else {
      product.quantity = 1;
      this.cartProducts.push(product);
    }
    this.cardQuantity = 0;
    this.cartProducts.forEach((item) => {
      this.cardQuantity += item.quantity;
    });
    console.log(this.cartProducts);
    //alert('Producto seleccionado: ' + product.name);
  }
}