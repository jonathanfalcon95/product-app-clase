import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product: any;
  @Output() productSelected: EventEmitter<any> = new EventEmitter();

  selectProduct() {
    this.productSelected.emit(this.product);
  }
}

