import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuToggle = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit(): void { }

  onMenuToggle(): void {
    this.menuToggle.emit();
 }
 backLogin(): void {
   alert('Regresar');
 }
}
