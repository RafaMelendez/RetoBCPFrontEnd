import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  panelOpenState = false;
   op1 = false;
   op2 = false;
   op3 = false;
   @Output() menuClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onMenuToggleDispatch(): void{
    this.panelOpenState = false;
    this.menuClose.emit();
  }
}
