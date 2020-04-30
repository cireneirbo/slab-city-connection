/*
listens for input by user.
populates emptyWebcamDiv with the info from an array required to show it
*/
const tagIFrame = required('/tag-i-frame-class.js');

const webcamArray = [{id: "UT-campus"},{id: "UT-riverfront"}]; 
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

for(let cam of webcamArray) {
    const customElementVariable = "webcam" + cam["id"];
    customElementVariable = document.getElementById(cam["id"]).innerHTML;
    //why do i need this?
}


const emptyWebcamDiv = document.getElementById("UT-campus").innerHTML;

function displayWebcam() {
    //assign div the video feed from array html tags strings
    console.log('that worked');
}
emptyWebcamDiv.addEventListener('click', displayWebcam());
customElementVariable.addEventListener('click', displayWebcam());

if (webcamTickBox) {

}
//loop for each checkbox that checks each document item for ticks and returns them?