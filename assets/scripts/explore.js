// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voiceSelect=document.getElementById("voice-select");
  const synth = window.speechSynthesis;
  const button = document.querySelector("button");
  const textbox = document.getElementById("text-to-speak");
  const img = document.querySelector("img");
  let voices = [];

  function populateVoiceList(){
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  setTimeout(populateVoiceList(), 1000);
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  button.addEventListener('click', function(){
  const utterThis = new SpeechSynthesisUtterance(textbox.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  img.setAttribute("src", "assets/images/smiling-open.png");
  synth.speak(utterThis);
  utterThis.addEventListener('end', function(){
    img.setAttribute("src", "assets/images/smiling.png");
  })
  
});
}