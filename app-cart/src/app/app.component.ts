import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app-cart';
  products: any[] = [];
  keyAddCartEventListener = 'app-cart:add-to-cart';

  handleAddToCart = (event: CustomEvent) => {
    const productDetails = event.detail;
    this.products.push(productDetails);
  }

  ngOnInit(): void {
    window.addEventListener(this.keyAddCartEventListener, this.handleAddToCart as EventListener);
  }

  ngOnDestroy() {
    window.removeEventListener(this.keyAddCartEventListener, this.handleAddToCart as EventListener);
  }

  gotToCheckout() {
    window.history.pushState({}, '', '/checkout');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}
