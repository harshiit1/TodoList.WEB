import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-signin',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    MatCheckboxModule,
],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class Signin implements OnInit{
  signInForm!: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder) {}
ngOnInit(): void {
    this.initForm();
}
  initForm(){
    this.signInForm = this.fb.group({
      Username: [null, Validators.required],
      Password: [null, Validators.required]
    })
  }
}
