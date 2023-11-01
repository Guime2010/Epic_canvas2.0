function preload(){
    classifier=ml5.imageClassifier("DoodleNet")
}
function setup(){
 canvas=createCanvas(301,299)
 canvas.center()
 canvas.mouseReleased(classifyCanvas)
background("white")
synth=window.speechSynthesis
}
function draw(){
    strokeWeight(9);
    stroke(0)
    if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
    }

}
function classifyCanvas(){
    classifier.classify(canvas,gotresults)
}
function gotresults(error,results){
    if(error){
        console.error(error)
    }
    else{
        desenhonome=results[0].label
        desenhonome=desenhonome.replace("_"," ")
        confidencia=results[0].confidence
        confidencia=Math.round(confidencia*100)
        document.getElementById("objeto").innerHTML="objeto: "+desenhonome
        document.getElementById("precisao").innerHTML="precisao: "+confidencia+"%"
        falar=new SpeechSynthesisUtterance(desenhonome)
        synth.speak(falar)
    }
}
function limpar(){
    background("white")
}