/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function drawBlock1()
{
  y=(B%10)*50+(((B%10)-1)*200);
  x=((((B-(B%10))/10)-1)*200)+(((B-(B%10))/10)*50);
  line(x,y,x+200,y+200);
  line(x+200,y,x,y+200);
  player[0].index = player[0].index + 1;
  player[0].score = player[0].score + B;
  print(player[0].score);
  if(player[0].index == 3)
  {
    player[0].scoreCheck(player[0].score);
  }
  if(player[0].index == 4)
  {
    player[0].scoreChecks();
  }
  
  
}