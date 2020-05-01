class TagIFrame {
    constructor(src, id) {
       //assign properties
       this.id = id; //id attribute for element
       this.class = 'class ="webcam-vid"';
       this.width = 'width="560"';
       this.height = 'height="315"';
       this.src = src; //'src="https://www.youtube-nocookie.com/embed/GLCMF6GhPRA"';
       this.frameborder = 'frameborder="0"'; 
       this.allow = 'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"';
       this.allowfullscreen = 'allowfullscreen';
    }
    //define methods
 }

/*
module.exports = {
     TagIFrame: TagIFrame
 }*/
export {
    TagIFrame
}