import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { AuthViewService } from '../service/auth-view-service';

@Component({
  selector: 'app-signin',
  imports: [SharedModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class Signin implements OnInit, OnDestroy {
  constructor(public authViewService: AuthViewService) {}

  ngOnInit(): void {
    this.authViewService.onInit();
  }

  ngOnDestroy(): void {
    this.authViewService.onDestroy();
  }
}
