import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  openedSidenav$: Observable<boolean>;

  constructor(private sidenavService: SidenavService) {
    this.openedSidenav$ = this.sidenavService.sidenavStatus$;
  }

  ngOnInit(): void {}
}
