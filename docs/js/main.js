/*
listens for input by user.
populates emptyWebcamDiv with the info from an array required to show it
use multiple functions to keep things in scope and off the global scope. use a main at the end to do all of it visually
*/
const tagIFrame = required('/tag-i-frame-class.js');
//webcam objects
const webcamUTCampus = {
    src: "https://youtu.be/bB96qObNTSU", 
    id: "UT-campus"
}
const webcamUTRiverfront = {
    src: "https://youtu.be/GLCMF6GhPRA", 
    id: "UT-riverfront"
}
//array of webcam objects
const webcamArray = [webcamUTCampus, webcamUTRiverfront]; 


/*<div><a class ="webcam-link" href="https://youtu.be/GLCMF6GhPRA">The University of Tampa - Riverfront Live Webcam</a></div>
<iframe 
    class ="webcam-vid"
    id="UT-campus" //from the input tag id name
    width="560" 
    height="315" 
    src="https://www.youtube-nocookie.com/embed/GLCMF6GhPRA" 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe> ];*/
/*
for(let cam of webcamArray) {
    const customElementVariable = "webcam" + cam["id"];
    customElementVariable = document.getElementById(cam["id"]).innerHTML;
    //why do i need this?
}*/
/*

const emptyWebcamDiv = document.getElementById("webcams").innerHTML;

function displayWebcam() {
    //assign div the video feed from array html tags strings
    alert('that worked');
}
document.getElementById("webcams").addEventListener('click', displayWebcam);
emptyWebcamDiv.addEventListener('click', displayWebcam);
customElementVariable.addEventListener('click', displayWebcam);

*/
///
// Function to change the content of t2
function modifyText(new_text) {
    document.getElementById("webcam-create").innerHTML +=  new_text;
  }
   
  // Function to add event listener to table
  document.getElementById("button").addEventListener("click", function(){modifyText("four")}, false);


////
//if (webcamTickBox) {

//}
//loop for each checkbox that checks each document item for ticks and returns them?

//im failing so hard at this. this shit confuses the majoras mask out of my fingers
