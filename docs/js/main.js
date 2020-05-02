//webcam objects
//function initializeVariables()  {
    const webcamUTCampus = {
        src: "bB96qObNTSU", 
        id: "UT-campus"
    }

    const webcamUTRiverfront = {
        src: "GLCMF6GhPRA", 
        id: "UT-riverfront"
    }

    //array of webcam objects
    const webcamArray = [webcamUTCampus, webcamUTRiverfront]; 
    return webcamArray;
//}


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


//stereamline it with no dry
function createWebcamDiv(id, webcamArray) {
    //create div container
    const newDiv = document.createElement('div'); 
    newDiv.innerHTML = "new div";
    const currentDiv = document.getElementById('all-webcams-created');
    currentDiv.appendChild(newDiv);

    //loop to find object from id
    //const webcamObject = {}; 
    /*for(const cam of webcamArray) {
        if (cam.id === id) {
            //webcamObject = cam;
            alert(virtoy);
            newDiv.setAttribute("href", cam.src);
        }
    }*/
    //set attributes
    newDiv.setAttribute("href", "https://youtu.be/GLCMF6GhPRA");

    //create iframe tag


}

function removeWebcamDiv() {
    
}

/*
let search = document.getElementsByClassName("checkbox-listener");
search.addEventListener('click', displayWebcam(id), false);*/

function displayWebcam(id) {
    //assign div the video feed from array html tags strings
    initializeVariables();
    const checkBox = document.getElementById(id);
    

    if (checkBox.checked === true) {
        //function for creating a video in div id="all-videos-created"
        createWebcamDiv(id);
    } else {
        //function for removing a video in div id="all-videos-created"
        removeWebcamDiv(id);
    }
    
}
