/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var player = [];

player[0] = new Player(0);
player[1] = new Player(1);

function Player(n)
{
  this.score = 0;
  this.number = n+1;
  
  this.scoreCheck = function()
  {
    if(this.score == 66)
    {
      print("Winner :"+this.index);
    }
  }
}

