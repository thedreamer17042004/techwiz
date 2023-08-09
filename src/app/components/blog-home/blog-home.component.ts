import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
declare var $: any;

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {

  data:any = new Array();
  constructor(private service: ProductService) {
    this.service.getProduct().subscribe(data => {
      this.data = data;
      console.log(this.data)
      
    });
    

  }

  ngOnInit(): void {

    // carousel blogHome
  $('.produc-one').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
  }

}
