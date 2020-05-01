const tagIFrame = required('./tag-i-frame-class.js');

//webcam objects
function initializeVariables()  {
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

}
/*<div><a class ="webcam-link" href="https://youtu.be/GLCMF6GhPRA">The University of Tampa - Riverfront Live Webcam</a></div>
<iframe 
    class ="webcam-vid"
    id="UT-campus" //from the input tag id name //unique
    width="560" 
    height="315" 
    src="https://www.youtube-nocookie.com/embed/GLCMF6GhPRA" //unique
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe> ];*/



//const emptyWebcamDiv = document.getElementById("webcams").innerHTML;

//stereamline it with no dry
function createWebcamDiv(id) {
    //create div container
    const newDiv = document.createElement('div'); 
    newDiv.innerHTML = "new div";
    const currentDiv = document.getElementById('all-webcams-created');
    currentDiv.appendChild(newDiv);

    //loop to find object from id
    //const webcamObject = {};
    for(const cam of webcamArray) {
        if (cam.id === id) {
            const webcamObject = cam;
        }
    }
    //set attributes
    newDiv.setAttribute("href", webcamObject.src);

    //create iframe tag

//create the iFrame tag with the video from the class IFrame/webcamobject generated from webcamArray
}

function removeWebcamDiv() {
    
}

function displayWebcam(id) {
    //assign div the video feed from array html tags strings
    const checkBox = document.getElementById(id);
    initializeVariables();
    if (checkBox.checked === true) {
        alert('that worked');
        //function for creating a video in div id="all-videos-created"
        createWebcamDiv(id);
    } else {
        //function for removing a video in div id="all-videos-created"
    }
    
}
