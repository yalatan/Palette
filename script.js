document.addEventListener("DOMContentLoaded", ready);
function ready() {
        let currentcolor = "lightgrey";
        let h = window.innerHeight;
        
            
            let height = (h-187)/3;
            
            for(let i=0; i<9; i++){
                let canvas = "#canvas" + i;
                document.querySelector(canvas).style.height = height+ "px";
                document.querySelector(canvas).style.width = height + "px";
                if(i<=2){
                document.querySelector(canvas).style.top = 0+ 'px';
                document.querySelector(canvas).style.left =i*(height+5) + 'px'; }
                if(i>=3 && i<=5){
                document.querySelector(canvas).style.top = (height+5) + 'px';
                document.querySelector(canvas).style.left = (i%3)*(height+5) + 'px'; }
                if(i>=6){
                document.querySelector(canvas).style.top = (height+5)*2 + 'px';
                document.querySelector(canvas).style.left = (i%6)*(height+5) + 'px'; }
            };
            document.querySelector("#canvas").style.height = (height*3 + 15)+ "px";
            document.querySelector("#canvas").style.width = (height*3 + 15) + "px";

        
        function resizeWindow(h){
            
            let height = (h-187)/3;
            
            for(let i=0; i<9; i++){
                let canvas = "#canvas" + i;
                document.querySelector(canvas).style.height = height+ "px";
                document.querySelector(canvas).style.width = height + "px";
                if(i<=2){
                document.querySelector(canvas).style.top = 0+ 'px';
                document.querySelector(canvas).style.left =i*(height+5) + 'px'; }
                if(i>=3 && i<=5){
                document.querySelector(canvas).style.top = (height+5) + 'px';
                document.querySelector(canvas).style.left = (i%3)*(height+5) + 'px'; }
                if(i>=6){
                document.querySelector(canvas).style.top = (height+5)*2 + 'px';
                document.querySelector(canvas).style.left = (i%6)*(height+5) + 'px'; }
            };
            document.querySelector("#canvas").style.height = (height*3 + 15)+ "px";
            document.querySelector("#canvas").style.width = (height*3 + 15) + "px";

        };
        resizeWindow();       

        window.onresize = function(event) {
            let newSize = window.innerWidth*48/100+187;
            if(newSize < window.innerHeight){
                let h = newSize;
                resizeWindow(newSize); 
            }
           
            
        };
        document.querySelector('#currentColorCircle').style.backgroundColor = currentcolor;
        document.querySelector('#prevColorCircle').style.backgroundColor = "green";
        document.querySelector('#blueCircle').style.backgroundColor = "blue";
        document.querySelector('#redCircle').style.backgroundColor = "red";
        document.querySelector('#container').style.backgroundColor = "white";
        
        document.querySelector('#tools').style.backgroundColor = "white";
        document.querySelector('#chooseColors').style.backgroundColor = "white";
        document.querySelector('.header').style.backgroundColor = "white";

//////////////////////*PAINT BUCKET*/
document.querySelector('#paintBucket').addEventListener('click', function(e){ 
    this.classList.toggle('active');
     document.getElementsByTagName('body')[0].style.cursor = "default";
    if(document.querySelector('#paintBucket').getAttribute('class') == 'active'){
      document.getElementsByTagName('body')[0].style.cursor = "url('assets/cursor/paint.png'), auto";
        document.querySelector('#transform').classList.remove('active');
        document.querySelector('#move').classList.remove('active');
        document.querySelector('#chooseColor').classList.remove('active');
        if(document.querySelector('#chooseColor').getAttribute('class') != 'active'){
            document.getElementById('palette').innerHTML = " ";    
        }    
  
        };
       
     });
//////////*END PAINT BUCKET*/

 ///////////////////////*CHOOSE COLOR*/
 document.querySelector('#chooseColor').addEventListener('click', function(){
     this.classList.toggle('active'); 
     document.getElementsByTagName('body')[0].style.cursor = "default";
        if(document.querySelector('#chooseColor').getAttribute('class') == 'active'){ 
            
            document.querySelector('#transform').classList.remove('active');
            document.querySelector('#move').classList.remove('active');
            document.querySelector('#paintBucket').classList.remove('active');   
        document.getElementById('palette').innerHTML = '<div id="color-picker" class="cp-default"> <div class="picker-wrapper"> <div id="picker" class="picker"></div>'+
            '<div id="picker-indicator" class="picker-indicator"></div>'+
                                '</div> <div class="pcr-wrapper">  <div id="pcr" class="pcr"></div>   <div id="pcr-indicator" class="pcr-indicator"></div>'+
                                    '</div>   <ul id="color-values"> <li><label>RGB:</label><span id="rgb"></span></li><li><label>HSV:</label><span id="hsv"></span></li>'+
                                '<li><label>HEX:</label><span id="hex"></span></li><li><div id="pcr_bg"></div></li>    </ul>  </div>';
            document.getElementById('color-picker').style.top = '15px';
            document.getElementById('color-picker').style.left= '15px';
            document.getElementById('palette').style.position = 'relative';
            document.getElementById('color-values').style.position = 'absolute';
            document.getElementById('color-values').style.top = '250px';
            document.getElementById('color-values').style.left = '15px';
                cp = ColorPicker(document.getElementById('pcr'), document.getElementById('picker'), 
                function(hex, hsv, rgb, mousePicker, mousepcr) {
                currentColor = hex;
                ColorPicker.positionIndicators(
                document.getElementById('pcr-indicator'),
                document.getElementById('picker-indicator'),
                mousepcr, mousePicker);                                             
                document.getElementById('hex').innerHTML = hex;
                document.getElementById('rgb').innerHTML = 'rgb(' + rgb.r.toFixed() + ',' + rgb.g.toFixed() + ',' + rgb.b.toFixed() + ')';
                document.getElementById('hsv').innerHTML = 'hsv(' + hsv.h.toFixed() + ',' + hsv.s.toFixed(2) + ',' + hsv.v.toFixed(2) + ')';
                document.getElementById('pcr_bg').style.backgroundColor = hex;
                });
            cp.setHex('#D4EDFB'); 
            
        } else {
            document.getElementById('palette').innerHTML = " "; 
        }
    
    
    }); 
        ////////////
document.querySelector('#palette').addEventListener('click', function(e){
    if(document.querySelector('#chooseColor').getAttribute('class') == 'active'){ 
    let id = e.target.id;
    let color = document.querySelector('#currentColorCircle').style.backgroundColor;
    document.querySelector('#prevColorCircle').style.backgroundColor = color;
    document.querySelector('#currentColorCircle').style.backgroundColor = document.getElementById('rgb').innerHTML;
    }
            });
 /*END     CHOOSE COLOR*/   

 ///////////////////
 
////////////////*TRANSFORM*/
document.querySelector('#transform').addEventListener('click', function(){
     this.classList.toggle('active'); 
     document.getElementsByTagName('body')[0].style.cursor = "default";
 if(document.querySelector('#transform').getAttribute('class') =='active'){
    document.getElementsByTagName('body')[0].style.cursor = "url('assets/cursor/arrows.png'), auto";
    document.querySelector('#paintBucket').classList.remove('active');
    document.querySelector('#move').classList.remove('active');
    document.querySelector('#chooseColor').classList.remove('active');
    if(document.querySelector('#chooseColor').getAttribute('class') != 'active'){
        document.getElementById('palette').innerHTML = " ";    
    }   

 }
});
//////////////////END   TRANSFORM*/

 //////////////////////*MOVE*/ 
document.querySelector('#move').addEventListener('click', function(){
     this.classList.toggle('active');
     document.getElementsByTagName('body')[0].style.cursor = "default";
if(document.querySelector('#move').getAttribute('class') == 'active'){
    document.getElementsByTagName('body')[0].style.cursor = "url('assets/cursor/move.png'), auto";
    document.querySelector('#transform').classList.remove('active');
    document.querySelector('#paintBucket').classList.remove('active');
    document.querySelector('#chooseColor').classList.remove('active');
        if(document.querySelector('#chooseColor').getAttribute('class') != 'active'){
            document.getElementById('palette').innerHTML = " ";    
        }  
let posCanvas1Top;
let posCanvas1Left;
let posCanvas2Top;
let posCanvas2Left;
let id1 ;
let id2 ;
    document.querySelector('#canvas').addEventListener('mousedown', function(event){ 
        id1 = event.target.id;
      posCanvas1Top = document.getElementById(id1).style.top;
       posCanvas1Left = document.getElementById(id1).style.left;
           });   
           document.querySelector('#canvas').addEventListener('mouseup', function(event){
              id2 = event.target.id;
              
              posCanvas2Top = document.getElementById(id2).style.top;
              posCanvas2Left = document.getElementById(id2).style.left; 
              document.getElementById(id1).style.top = posCanvas2Top;
              document.getElementById(id1).style.left = posCanvas2Left;
              
              document.getElementById(id2).style.top = posCanvas1Top;
              document.getElementById(id2).style.left = posCanvas1Left;
              let newMove = document.getElementById(id1);
              newMove.id = id2+'';
              event.target.id = id1+'';
      
           })
        }   
    });
//////////////////
document.querySelector('#blue').addEventListener('click', function(){
    let color = document.querySelector('#currentColorCircle').style.backgroundColor;
    document.querySelector('#prevColorCircle').style.backgroundColor = color;
     document.querySelector('#currentColorCircle').style.backgroundColor = 'blue';
     });
document.querySelector('#red').addEventListener('click', function(){ 
    let color = document.querySelector('#currentColorCircle').style.backgroundColor;
    document.querySelector('#prevColorCircle').style.backgroundColor = color;
    document.querySelector('#currentColorCircle').style.backgroundColor = 'red';
    });
document.querySelector('#prevColorCircle').addEventListener('click', function(){
        let colorCurrent = document.querySelector('#currentColorCircle').style.backgroundColor;
        let colorPrev = document.querySelector('#prevColorCircle').style.backgroundColor;
        document.querySelector('#prevColorCircle').style.backgroundColor = colorCurrent;
         document.querySelector('#currentColorCircle').style.backgroundColor = colorPrev;
         });
///////
document.querySelector('#canvas').addEventListener('click', function(e){ 
    let id = e.target.id;
    if(id != "canvas"){
    let selectElement = document.getElementById(id);
    if(document.querySelector('#paintBucket').getAttribute('class') == 'active'){
        let color = document.querySelector('#currentColorCircle').style.backgroundColor;
        selectElement.style.backgroundColor = color;
    }
    if(document.querySelector('#transform').getAttribute('class') == 'active'){  
        selectElement.classList.toggle('transform');
    }
    }  
    });
///////////////////////////////////////////////////////////////////////        
    }





