import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { FormBuilder } from '@angular/forms';
import { AuthViewService } from '../service/auth-view-service';

@Component({
  selector: 'app-signup',
  imports: [SharedModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class Signup implements OnInit, OnDestroy {
  constructor(public authViewService: AuthViewService) {}

  ngOnInit(): void {
    this.authViewService.onInit();
  }
  ngOnDestroy(): void {
    this.authViewService.onDestroy();
  }
}
