status="";
objects=[];

function preload()
{

}

function setup()
{
    video=createCapture(VIDEO);
    video.hide();

    canvas=createCanvas(350,300);
    canvas.center();
}

function draw()
{
    image(video,0,0,480,380);
    if(status!="")
    {
        objectDetector.detect(video,gotResult);
        for(i=0; i<object.length; i++)
        {
            document.getElementById("status").innerHTML="Status:Objects Detected";
            document.getElementById("number_of_objects").innerHTML="Number Of Objects Detected:"+objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        objects=results;
    }
}
function start()
{
    objectsLiveView.stop()
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    objectDetector.detect(gotResult);
    document.getElementById("status").innerHTML="Status : Decting Objects";
    search_object=document.getElementById("object_name").value;
    SpeechSynthesisUtterance(object mentioned found)
    speak(utterThis)
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
}