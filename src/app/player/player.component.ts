import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
 @Input() player:string = '';
 @Input() winner:boolean = false;
 @Input() draw:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
