function buyNow(){
  hideElements('home-banner');
  showElements('ticket-section');
  //  nextButtonHide ('body');
  // nextButtonshow ('next-button');
}



setBackGround('A');
// function seatButton(){
//   setBackgroundColorById('A')
// }

function hideElements(elementId){
  const element =document.getElementById(elementId);
  element.classList.add('hidden');
}


function showElements(elementId){
  const element =document.getElementById(elementId);
  element.classList.remove('hidden');
  
}


// function setBackgroundColorByClass(){
//   (document.getElementById('A')).style.backgroundColor="green";
//   console.log('yes i am green');
// }

// const element=['A,A1,A2,A3,,A4,B,B1,B2,B3,B4,C,C1,C2,C3,C4,D,D1,D2,D3,D4,E,E1,E2,E3,E4,F,F1,F2,F3,F4,G,G1,G2,G3,G4,H,H1,H2,H3,H4,I,I1,I2,I3,I4,J,J1,J2,J3,J4'];
// document.element.splite();
// function setBackGround(){
//   const element=document.getElementById();
//   element.style.backgroundColor="red";
// // console.log('yes i am connected');
// }





function nextBoutton(){
  hideElements('body');
  showElements('next-button');
}





// next-button code hear
// let popup=document.getElementById("next-button");
// function nextButtonHide (){
//   continueButton.classList.add("open-popup");
// }
// function nextButtonshow (){
//   continueButton.classList.remove("close-popup");
// }
function hideElements(elementId){
  const element =document.getElementById(elementId);
  element.classList.add('hidden');
}


function showElements(elementId){
  const element =document.getElementById(elementId);
  element.classList.remove('hidden');
  
}
