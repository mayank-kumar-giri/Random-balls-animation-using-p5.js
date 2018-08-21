class car
{
  constructor(r1,r2,s)
  {
    this.r1=r1;
    this.r2=r2;
    this.s=s;
  }

  create(x,y,aa)
  {
    strokeWeight(2);
    fill(0,255,0);
    ellipse(x,y,this.r1,this.r2);
    fill(0);
    textStyle(BOLD);
    textSize(13);
    text(aa,x,y+5);
  }
  
}

let x=[],y=[],i=0,j=0,m=0,choice=[],flag=[],g=[],co=[],my=0,pf=[],pd=[],alpha=['A','B','C','D','E','F','G','H','I','J'],clicked=0;

for(i=0;i<10;i++)
{
  pd[i]=0;
  if(i<3) choice[i]=2;
  else choice[i]=4;
  flag[i]=0;
  g[i]=0;
  co[i]=0;
  pf[i]=1;
}

function mousePressed()
{
  clicked=1;
}

function setup() 
{
  // put setup code here
  createCanvas(1276,586);
  for(i=0;i<10;i++)
  {
    if(i<3)
    { 
      car[i]=new car(20,20,2.5);
      x[i]=10;
      y[i]=120+(i*180);
    }
    else
    {
      car[i]=new car(20,20,2.5);
      x[i]=160+((i-3)*180);
      y[i]=10;
    }
  }
}

function draw() {
  // put drawing code here
  if(clicked==0)
  {
    background(135,206,235);
    strokeWeight(2);
    textSize(62);
    textAlign(CENTER);
    textFont('Times New Roman');
    text('Random Cars',600,250);
    textStyle(ITALIC);
    textSize(25);
    text('Click to start...',600,280);
    textStyle(NORMAL);
    textSize(25);
    text('Prepared By-',600,360);
    text('Mayank Kumar Giri',600,390);

  }
  else
  {
    background(90);
    strokeWeight(2);
    
    
    for(var i=0;i<width;i+=180)
      for (var j=0; j<height; j+=180) 
      {
        fill(255,200,0);
        strokeWeight(2);
        rect(i,j,100,100);
        strokeWeight(0);
        fill(255);
        rect(i+139,j,2,100);
        rect(i,j+139,100,2);
      }

    
    for(m=0;m<10;m++)
    {

      if(my>10)
      {  
        if(x[m]==width-10) x[m]=10;
        else if(x[m]==10) x[m]=width-10;
        if(y[m]==10) y[m]=height-10;
        else if(y[m]==height-10) y[m]=10;
      }

   
      car[m].create(x[m],y[m],alpha[m]);
      
      if(flag[m]==1)
      {
        choice[m]=random(1,5);
        choice[m]=floor(choice[m]);
        g[m]=0;
        pf[m]=1;
      }
      my=my+1;
      
      if(flag[m]==0)
      {
        switch(choice[m])
        {
          case 1:
            for(i=0;i<3;i++)
            {
              for(j=0;j<7;j++)
              {
                if((x[m]==(120+(j*180)))&&(y[m]==(160+(i*180))))
                {
                  flag[m]=1;
                  pf[m]=0;
                  pd[m]=choice[m];
                }
              }
              
            }
            break;
          case 2:
            for(i=0;i<3;i++)
            {
              for(j=0;j<7;j++)
              {
                if((x[m]==(120+(j*180)))&&(y[m]==(120+(i*180))))
                {
                  flag[m]=1;
                  pf[m]=0;
                  pd[m]=choice[m];
                }
              }
              
            }
            break;
            case 3:
            for(i=0;i<3;i++)
            {
              for(j=0;j<7;j++)
              {
                if((x[m]==(160+(j*180)))&&(y[m]==(160+(i*180))))
                {
                  flag[m]=1;
                  pf[m]=0;
                  pd[m]=choice[m];
                }
              }
              
            }
            break;
            case 4:
            for(i=0;i<3;i++)
            {
              for(j=0;j<7;j++)
              {
                if((x[m]==(160+(j*180)))&&(y[m]==(120+(i*180))))
                {
                  flag[m]=1;
                  pf[m]=0;
                  pd[m]=choice[m];
                }
              }
              
            }
            break;
        }
      }
      
      if(pd[m]==0 && pf[m]==1)
      {
        if(choice[m]==2)
        {
          x[m]=x[m]+2;
        }
        else if(choice[m]==4)
        {
          y[m]=y[m]+2;
        }
      }


      else if(pd[m]==1 && pf[m]==1)
      {
        
        flag[m]=0;
        switch(choice[m])
        {
          case 1:
            y[m]=y[m]-2;
            break;
          case 2:
            if(g[m]==0)
            {
                y[m]=y[m]-2;
                co[m]=co[m]+2;
                if(co[m]==40)
                {
                  g[m]=1;
                  co[m]=0;
                }
            }
            if(g[m]==1) x[m]=x[m]+2;
            break;
          case 3:
            x[m]=x[m]-2;
            break;
          case 4:
            if(g[m]==0)
            {
                x[m]=x[m]+2;
                co[m]=co[m]+2;
                if(co[m]==40)
                {
                  g[m]=1;
                  co[m]=0;
                }
            }
            if(g[m]==1) y[m]=y[m]+2;
            break;
        }
      }

      else if(pd[m]==2 && pf[m]==1)
      {
        
        flag[m]=0;
        switch(choice[m])
        {
          case 1:
            y[m]=y[m]-2;
            break;
          case 2:
            x[m]=x[m]+2;
            break;
          case 3:
            if(g[m]==0)
            {
                y[m]=y[m]+2;
                co[m]=co[m]+2;
                if(co[m]==40)
                {
                  g[m]=1;
                  co[m]=0;
                }
            }
            if(g[m]==1) x[m]=x[m]-2;
            break;
          case 4:
            if(g[m]==0)
            {
                x[m]=x[m]+2;
                co[m]=co[m]+2;
                if(co[m]==40)
                {
                  g[m]=1;
                  co[m]=0;
                }
            }
            if(g[m]==1) y[m]=y[m]+2;
            break;
        }
      }

      else if(pd[m]==3 && pf[m]==1)
      {
        
        flag[m]=0;
        switch(choice[m])
        {
          case 1:
            if(g[m]==0)
            {
                x[m]=x[m]-2;
                co[m]=co[m]+2;
                if(co[m]==40)
                {
                  g[m]=1;
                  co[m]=0;
                }
            }
            if(g[m]==1) y[m]=y[m]-2;
            break;
          case 2:
            if(g[m]==0)
            {
                y[m]=y[m]-2;
                co[m]=co[m]+2;
                if(co[m]==40)
                {
                  g[m]=1;
                  co[m]=0;
                }
            }
            if(g[m]==1) x[m]=x[m]+2;
            break;
          case 3:
            x[m]=x[m]-2;
            break;
          case 4:
            y[m]=y[m]+2;
            break;
        }
      }
      
      else if(pd[m]==4 && pf[m]==1)
      {
        
        flag[m]=0;
        switch(choice[m])
        {
          case 1:
            if(g[m]==0)
            {
                x[m]=x[m]-2;
                co[m]=co[m]+2;
                if(co[m]==40)
                {
                  g[m]=1;
                  co[m]=0;
                }
            }
            if(g[m]==1) y[m]=y[m]-2;
            break;
          case 2:
            x[m]=x[m]+2;
            break;
          case 3:
            if(g[m]==0)
            {
                y[m]=y[m]+2;
                co[m]=co[m]+2;
                if(co[m]==40)
                {
                  g[m]=1;
                  co[m]=0;
                }
            }
            if(g[m]==1) x[m]=x[m]-2;
            break;
          case 4:
            y[m]=y[m]+2;
            break;
        }
      }
    }
  }
}