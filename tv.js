status="";
results=[];

function preload(){
    img.loadImage('tv.webp');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status : detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(img,0,0,640,420);

    if(status!=""){
        for(i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML="status : object detected";

            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width +15, objects[i].height+15);
        }
    }

    Fill("#FF0000");
    Text(dog,45,75);
    noFill();
    stroke("#FF0000");
    Rect(30,60,450,350);

    fill("#FF0000");
    Text("Cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}