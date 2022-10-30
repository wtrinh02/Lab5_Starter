// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Change image and audio track
  const jsConfetti = new JSConfetti();

  const horn_select =  document.getElementById("horn-select");
  horn_select.addEventListener('change', function(){
    const img=document.querySelector("img");
    img.setAttribute("src", 'assets/images/'+horn_select.value+'.svg');

    const audio=document.querySelector("audio");
    audio.setAttribute("src", "assets/audio/"+horn_select.value+'.mp3');

  });
  //Change volume slider icon
  const volumeSlider = document.getElementById("volume");
  const icon = document.getElementById("volume-controls").getElementsByTagName("img");
  volumeSlider.addEventListener('input', function(){
    if(volumeSlider.value==0){
      icon[0].setAttribute("src", "assets/icons/volume-level-0.svg");
    }
    else if(volumeSlider.value < 33){
      icon[0].setAttribute("src", "assets/icons/volume-level-1.svg");
    }
    else if(volumeSlider.value < 67){
      icon[0].setAttribute("src", "assets/icons/volume-level-2.svg");
    }
    else{
      icon[0].setAttribute("src", "assets/icons/volume-level-3.svg");
    }
  });
  //play the sound

  const playSound = document.querySelector("button");
  playSound.addEventListener('click', function(){
    const audio = document.getElementsByClassName("hidden");
    audio[0].volume = volumeSlider.value/100;
    audio[0].play();
   
    if(audio[0].getAttribute("src")=="assets/audio/party-horn.mp3"){

      jsConfetti.addConfetti();
    }

  });
}