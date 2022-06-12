import { Component, OnInit, Input } from '@angular/core';
import {TicTacToeService} from '../service/tic-tac-toe.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  constructor(public tictactoe: TicTacToeService) {}

  ngOnInit(): void {
  }

  playerMove(event: any){
    let row:number = 0;
    let col:number = 0;

    if(event.target.nodeName != 'TD') return;

    if(event.target.innerHTML.trim() == '')
      event.target.innerHTML = this.tictactoe.player;

    row = event.target.parentNode.rowIndex;
    col = event.target.cellIndex;

    this.tictactoe.setGameState(row, col);
   
  }

  resetBoard(){
    let td = document.querySelectorAll('td');
    td.forEach((el)=>{
      el.innerHTML = '';
    });
    this.tictactoe.reset();
  }

}
