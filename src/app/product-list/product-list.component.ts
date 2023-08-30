import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  selectedProduct: any;

  product = {
    id: 1,
    name: 'Iphone 14',
    description: 'El mejor celular del mundo',
    price: 1500
  };

  handleProductSelected(product: any) {
    alert('Producto seleccionado: ' + product.name);
  }
}