import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyAppService } from 'src/app/service/my-app.service';

declare var $: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  dataDetail:any;
  products: any = [];



  constructor(private product: MyAppService, private route: ActivatedRoute){}
  
    ngOnInit(): void {
      // carousel blogHome
      $('.detail-carow').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
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
      })
      $('.detail-right-special').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:1
            }
        }
      })
        // owlcarowsel thay đổi btn slidering
      $(document).ready(function(){
       
          // parralax
          $('.parallax-window').parallax({imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg'});
    
        })
    
        this.product.getData().subscribe((res: any) => {
          this.products = res.products
          this.route.paramMap.subscribe(params => {
            let id =  params.get('id');
            this.dataDetail = this.getProductById(id);
          });
        })

 
      


      
    }
    
      getProductById(id:any) {
          let info:any = this.products.find((item: any) => {
            return item.id == id
        });
        console.log(info)
      
         return info;
         
      }
}
