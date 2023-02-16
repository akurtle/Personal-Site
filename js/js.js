const widthScreen  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

window.addEventListener('resize', objectWidthChange());

function objectWidthChange(){
  if(widthScreen!=1920){
    widthSet(document.getElementsByClassName("obj1")[0],widthScreen,35)
    widthSet(document.getElementsByClassName("obj2")[0],widthScreen,62.5)
    widthSet(document.getElementsByClassName("obj3")[0],widthScreen,46.8)
  }  
}


const allText=[
    {text:"Mirza", color:"red"},
    {text:"a web developer", color:"lightblue"},
    {text:"a learner", color:"lightgreen"}
]

const screenWidth=screen.width

$( document ).ready(async function() {
    carousel(allText, "#textToCome")
  });
  
  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }



function centerItem(item,width){
  var i=0;
  i =(width/2)-100
  item.style.left+=i.toString()+"px"
}


function widthSet(item,width,percent){
  var i=0;
  i=(width*percent)/100
  item.style.left=i.toString()+"px";
}

 
  





