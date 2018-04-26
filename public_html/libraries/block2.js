/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function drawBlock2()
{
  x=((((B-(B%10))/10)-1)*250)+150;
  y=150+(((B%10)-1)*250);
  ellipse(x,y,200,200);
  player[1].index = player[1].index + 1;
  player[1].score = player[1].score + B;
  print(player[1].score);
  if(player[1].index == 3)
  {
    player[1].scoreCheck(player[1].score);  
  }
  if(player[1].index == 4)
  {
    player[1].scoreChecks();  
  }
}
