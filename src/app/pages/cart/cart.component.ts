import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  ngOnInit(): void {


    // owlcarowsel thay đổi btn slidering
    $(document).ready(function(){
   
      // parralax
      $('.parallax-window').parallax({imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg'});

    })

 
  }
}
