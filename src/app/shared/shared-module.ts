import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Signin } from '../authentication/signin/signin.component';
import { Sidebar } from '../layout/sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, Sidebar],
  exports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, Sidebar],
})
export class SharedModule {}
