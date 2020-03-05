import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStatusService } from '../../services/auth-status.service';
import { SidenavService } from 'src/app/modules/shop/services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  authStatus$: Observable<boolean>;

  constructor(
    private authStatusService: AuthStatusService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit(): void {
    this.authStatus$ = this.authStatusService.authStatus;
  }

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }
}
