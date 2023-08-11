import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  AccLoginJson: any = localStorage.getItem('isLogin');
  AccLogin: any = JSON.parse(this.AccLoginJson);
  check: boolean = false;

  constructor() { }


  ngOnInit(): void {
    if (localStorage.getItem('isLogin')) {
      this.check = true;
    }
  }

  logOut() {
    localStorage.removeItem('isLogin');
  }
}
