/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var playerS = 1;

var player = [];

player[0] = new Player(0);
player[1] = new Player(1);

function Player(n)
{
  this.score = 0;
  this.number = n+1;
  this.index = 0;
  
  this.scoreCheck = function(sc)
  {
    if(sc == 66)
    {
      print("Winner :"+this.number);
      end(this.number);
    }
    if(sc == 69)
    {
      print("Winner :"+this.number);
      end(this.number);
    }
    if(sc == 96)
    {
      print("Winner :"+this.number);
      end(this.number);
    }
    if(sc == 63)
    {
      print("Winner :"+this.number);
      end(this.number);
    }
    if(sc == 36)
    {
      print("Winner :"+this.number);
      end(this.number);
    }
  }
  
  this.scoreChecks = function()
  {
     var s;
     for(var i = 1;i < 4; i++)
     {
      for(var j = 1; j < 4; j++)
       {
         s = this.score - ((i*10)+j);
         this.scoreCheck(s);
       }
     }
  }
}

var D=0;

function drawBlock()
{
  if(playerS == 1)
  {
    drawBlock1();
    playerS = 2;
  }
  else if(playerS == 2)
  {
    drawBlock2();
    playerS = 1;
  }
}

