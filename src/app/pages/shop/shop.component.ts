import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: any = [];
  category: any = [];
  myParams: any = {};
  url: string = '';
  sortType: string = 'Sort by';
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    route.navigate(['/shop']);
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data) => {
      this.products = data;
    });

    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    });

    this.activatedRoute.queryParamMap.subscribe((params) => {
      let urlCat: string = params.has('categoryId')
        ? `categoryId=${params.get('categoryId')}&`
        : '';

      let urlSort: string = params.has('_sort')
        ? `_sort=${params.get('_sort')}&_order=${params.get('_order')}&`
        : '';

      this.url = urlCat + urlSort;
    });

   

    // owlcarowsel thay đổi btn slidering
    $(document).ready(function(){
      // parralax
      $('.parallax-window').parallax({imageSrc: 'http://lovesome.biz/tf-template/garden/img/page-title-bg.jpg'});

    })
  
   
    
  }

  async showProductByCat(id: number) {
    this.myParams.categoryId = id;

    await this.route.navigate(['/shop'], { queryParams: this.myParams });

    this.productService.getProductShop(this.url).subscribe((data) => {
      this.products = data;
    });
  }

  async showProductSort(sort: string, order: string, text: string) {
    this.myParams._sort = sort;
    this.myParams._order = order;
    this.sortType = text;

    await this.route.navigate(['/shop'], { queryParams: this.myParams });

    this.productService.getProductShop(this.url).subscribe((data) => {
      this.products = data;
    });
  }

  async showProductSearch() {
    let name = this.searchForm.value.name;

    await this.route.navigate(['/shop'], { queryParams: { q: name } });

    this.productService.getProductShop(`q=${name}`).subscribe((data) => {
      this.products = data;
    });

    this.searchForm.reset();
  }

  resetShop() {
    this.myParams = {};
    this.sortType = 'Sort by';

    this.route.navigate(['/shop']);

    this.productService.getProduct().subscribe((data) => {
      this.products = data;
    });
  }
}
