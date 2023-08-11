import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  
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
    
    
      
    }
    
}
