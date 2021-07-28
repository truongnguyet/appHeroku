import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['/add']);
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('Đã đăng xuất', localStorage.getItem('token'));
  }


}
