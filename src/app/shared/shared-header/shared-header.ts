import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  standalone: true,
  templateUrl: './shared-header.html',
  styleUrl: './shared-header.scss',
})
export class SharedHeader {
  @Input() title: string = '';
  @Input() CreateSearchBar: boolean = false;
  @Input() subtitle!:string
}
