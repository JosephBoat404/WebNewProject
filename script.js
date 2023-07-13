let element = document.getElementById('RandoColorChanger');
 
function turnBlue() {
    let colorsele=['red','blue','green']
    let rand1=Math.floor(Math.random()*4)+0;
    console.log(rand1);


    element.style.color=colorsele[rand1];

}
element.addEventListener('click',turnBlue)

element.onmouseover = function() {
    this.style.cursor = "pointer";
  };
  
function turnNormal(){
    element.style.color='#0F7173';
}
element.addEventListener('mouseout',turnNormal)

