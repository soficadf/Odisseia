let actual = 1;

function changeContent() {
         const cont1 = document.getElementById('content1');
         const cont2 = document.getElementById('content2');
         const cont3 = document.getElementById('content3');
         const cont4 = document.getElementById('content4');
         const cont5 = document.getElementById('content5');
         const cont6 = document.getElementById('content6');
         const cont7 = document.getElementById('content7');

     if (actual === 1) {
       cont1.classList.remove('visible');
       cont2.classList.add('visible');
       actual = 2;
     } else if(actual === 3){
      cont3.classList.remove('visible');
       cont4.classList.add('visible');
       actual = 4;

     } else if (actual === 4){
       cont4.classList.remove('visible');
       cont5.classList.add('visible');
       actual = 5;
     }else if(actual===5){
        cont5.classList.remove('visible');
        cont6.classList.add('visible');
        actual = 6;
     }else if(actual===6){
        cont6.classList.remove('visible');
        cont7.classList.add('visible');
        actual = 7;
     }else if(actual===7){
        cont7.classList.remove('visible');
        cont1.classList.add('visible');
        actual = 1;
     }
     else {
        cont2.classList.remove('visible');
        cont3.classList.add('visible');
         actual = 3;
    }
}

function changeContentReverse() {
   const cont1 = document.getElementById('content1');
   const cont2 = document.getElementById('content2');
   const cont3 = document.getElementById('content3');
   const cont4 = document.getElementById('content4');
   const cont5 = document.getElementById('content5');
   const cont6 = document.getElementById('content6');
   const cont7 = document.getElementById('content7');

if (actual === 1) {
 cont1.classList.remove('visible');
 cont7.classList.add('visible');
 actual = 7;
} else if(actual === 3){
cont3.classList.remove('visible');
 cont2.classList.add('visible');
 actual = 2;

} else if (actual === 4){
 cont4.classList.remove('visible');
 cont3.classList.add('visible');
 actual = 3;
}else if(actual===5){
  cont5.classList.remove('visible');
  cont4.classList.add('visible');
  actual = 4;
}else if(actual===6){
  cont6.classList.remove('visible');
  cont5.classList.add('visible');
  actual = 5;
}else if(actual===7){
  cont7.classList.remove('visible');
  cont6.classList.add('visible');
  actual = 6;
}
else {
  cont2.classList.remove('visible');
  cont1.classList.add('visible');
   actual = 1;
}
}

function showIntro() {
 
  var content = document.getElementById("introD");

 
  if (content.style.display === "none") {
      content.style.display = "block";
  } else {
      content.style.display = "none";
  }
}


function onProgress() {
  alert("Sorry we are working on this!");
}

function getDate() {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}


function updateDate() {
  const elementDate = document.getElementById('lastupdated');
  elementDate.textContent = 'Last updated: ' + getDate();
}

function goUp(){
 
  var backButton = document.getElementById('back-to-top');

 
  backButton.addEventListener('click', function() {
    
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}