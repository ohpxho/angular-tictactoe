import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {
  private _CONSTANT: number = 3;
  player: string;
  matrix: number[];	
  winner: boolean;
  draw: boolean;
  
  constructor() { 
  	this.player = 'x';
  	this.matrix = [0,0,0,0,0,0,0,0,0];
    this.winner = false;
    this.draw = false;
  }

  private switchPlayer():void{
  	this.player = (this.player === 'x') ? 'o':'x';
  }

  private checkBoard(row: number, col: number): boolean{
    let isValid = this.checkPattern(row, col);

    if(!isValid && this.checkIfFull()){
      this.draw = true;
    } 

  	return isValid;
  }

  private checkIfFull(): boolean{
    for(let val of this.matrix){
      if(val == 0) return false;
    }
    
    return true;
  }

  private checkPattern(row: number, col: number): boolean{
    let index = this._CONSTANT * row + col;
    let arr = this.matrix;
    
    //0,1,2
    //3,4,5
    //6,7,8

    let _pattern_a = arr[0] + arr[1] + arr[2];
    let _pattern_b = arr[0] + arr[3] + arr[6];
    let _pattern_c = arr[0] + arr[4] + arr[8];
    let _pattern_d = arr[1] + arr[4] + arr[7];
    let _pattern_e = arr[2] + arr[5] + arr[8];
    let _pattern_f = arr[2] + arr[4] + arr[6];
    let _pattern_g = arr[3] + arr[4] + arr[5];
    let _pattern_h = arr[6] + arr[7] + arr[8];

    if(_pattern_a == -3 || _pattern_a == 3) return true;
    if(_pattern_b == -3 || _pattern_b == 3) return true;
    if(_pattern_c == -3 || _pattern_c == 3) return true;
    if(_pattern_d == -3 || _pattern_d == 3) return true;
    if(_pattern_e == -3 || _pattern_e == 3) return true;
    if(_pattern_f == -3 || _pattern_f == 3) return true;
    if(_pattern_g == -3 || _pattern_g == 3) return true;
    if(_pattern_h == -3 || _pattern_h == 3) return true;

    return false;
  }

  setGameState(row:number, col:number):void{
    if(this.matrix[this._CONSTANT * row + col] != 0) return;
  	this.matrix[this._CONSTANT * row + col] = (this.player == 'x')? 1 : -1;
  	this.winner = this.checkBoard(row, col);
    if(this.winner) return;
  	this.switchPlayer();
  }

  reset(){
    this.player = 'x';
    this.matrix = [0,0,0,0,0,0,0,0,0];
    this.winner = false;
    this.draw = false;
  }

}
