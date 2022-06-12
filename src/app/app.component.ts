import { Component, OnChanges } from '@angular/core';
import { TicTacToeService } from './service/tic-tac-toe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  constructor(public tictactoe: TicTacToeService){
  }

  ngOnChanges(){
  }
}
