import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-products';

  addToCart() {
    const productDetails = { id: 123, name: 'Product XYZ', quantity: 1 };
    const event = new CustomEvent('app-cart:add-to-cart', { detail: productDetails });
    window.dispatchEvent(event);
  }
}
