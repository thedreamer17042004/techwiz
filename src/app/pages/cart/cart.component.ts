import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyAppService } from 'src/app/service/my-app.service';

declare var $: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = [];
  total: number = 0;

  constructor(
    private app: MyAppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.total = 0;
    this.cart = this.app.getCart();

    // owlcarowsel thay đổi btn slidering
    $(document).ready(function () {

      // parralax
      $('.parallax-window').parallax({ imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg' });

    })

    for (const item of this.cart) {
      this.total += (item.saleprice * item.amount);
    }
  }

  removePrd(id: number) {
    let index = this.cart.findIndex((item: any) => {
      return item.id == id;
    });

    this.cart.splice(index, 1);

    this.router.navigate(['/cart']);
  }
}
