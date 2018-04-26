/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var block = [];

function drawGrid(n)
{
  rectMode(CENTER);
  var x = 150,y = 150, index = 0;
  for(var i = 1; i <= n; i++)
  {
    y = 150;
    for(var j = 1; j <= n; j++)
    {
      index = (i*10)+j
      block[(i*10)+j] = new Blocks(x,y,index);
      block[(i*10)+j].drawB();
      y = y + 250;
    }
    x = x + 250;
  }
}

