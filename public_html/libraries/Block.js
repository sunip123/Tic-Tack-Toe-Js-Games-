/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Blocks(X,Y,index)
{
  this.x = X;
  this.y = Y;
  this.index = index;
  this.statusB = 0;
  
  this.in = function()
  {
    var x1 = mouseX, y1 = mouseY;
    if((x1<(this.x+100))&&(x1>(this.x-100)))
    {
      if((y1<(this.y+100))&&(y1>(this.y-100)))
      {
        B = this.index;
        print(B);
        if(this.statusB === 0)
        {
          drawBlock();
          this.statusB = 1;
        }
      }
    }
  }
  
  this.drawB = function()
  {
    rect(this.x,this.y,200,200);
  }
}