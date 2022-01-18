var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("microphone").src = "mic.gif";
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;

    if (content == "take my selfie") {
        console.log("taking your selfie");
        speaknow();

    }


    document.getElementById("microphone").src = "m.png";
}

function speaknow() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_url + '"/>';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}