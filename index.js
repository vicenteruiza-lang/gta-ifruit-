let currentAudio = null;
let ringtoneAudio = new Audio('audio/gta_5 ringonte.mp3');

function Contacts() {
  document.getElementById('home-apps').style.display = 'none';
  document.getElementById('conApp').style.setProperty('display', 'block', 'important');
  document.getElementById('changer').innerText = 'Contacts';
  ringtoneAudio.load(); 
  setupFakeCalls();
}

function setupFakeCalls() {
  const contactElements = document.querySelectorAll('#conApp .contact');
  contactElements.forEach(element => {
    const name = element.innerText.trim();
    if (name.includes('Lester')) {
      element.onclick = () => startFakeCall('Lester', 'audio/lester.mp3');
    } else if (name.includes('Franklin')) {
      element.onclick = () => startFakeCall('Franklin', 'audio/franklin.mp3');
    } else if (name.includes('Michael')) {
      element.onclick = () => startFakeCall('Michael', 'audio/micheal.mp3');
    } else if (name.includes('Lamar')) {
      element.onclick = () => startFakeCall('Lamar', 'audio/lamar.mp3');
    } else if (name.includes('Trevor')) {
      element.onclick = () => startFakeCall('Trevor', 'audio/trevor.mp3');
    }
  });
}

function startFakeCall(characterName, audioPath) {
  document.getElementById('conApp').style.setProperty('display', 'none', 'important');
  const screen = document.getElementById('calling-screen');
  screen.style.setProperty('display', 'flex', 'important');
  document.getElementById('call-name').innerText = characterName;
  document.getElementById('call-status').innerText = 'DIALING...';
  const avatarName = characterName.toLowerCase() === 'michael' ? 'micheal_avatar.PNG' : characterName.toLowerCase() + '_avatar.PNG';
  document.getElementById('call-avatar').src = 'ui/' + avatarName;
  ringtoneAudio.loop = true;
  ringtoneAudio.play();
  setTimeout(() => {
    ringtoneAudio.pause();
    ringtoneAudio.currentTime = 0;
    document.getElementById('call-status').innerText = 'CONNECTED';
    currentAudio = new Audio(audioPath);
    currentAudio.play();
    currentAudio.onended = () => {
      home();
    };
  }, 3000);
}

function messages() {
  document.getElementById('home-apps').style.display = 'none';
  document.getElementById('messApp').style.display = 'block';
  document.getElementById('changer').innerText = 'Messages';
}

function qjob() {
  document.getElementById('home-apps').style.display = 'none';
  document.getElementById('qapp').style.display = 'block';
  document.getElementById('changer').innerText = 'Quick Jobs';
}

function Jobs() {
  document.getElementById('home-apps').style.display = 'none';
  document.getElementById('jobs').style.display = 'block';
  document.getElementById('changer').innerText = 'Job List';
}

function settings() {
  document.getElementById('home-apps').style.display = 'none';
  document.getElementById('setting').style.display = 'block';
  document.getElementById('changer').innerText = 'Settings';
}

function email() {
  document.getElementById('home-apps').style.display = 'none';
  document.getElementById('email_App').style.display = 'block';
  document.getElementById('changer').innerText = 'Email';
}

function camera() {
  document.getElementById('home-apps').style.display = 'none';
  document.getElementById('camera').style.display = 'block';
  document.getElementById('changer').innerText = 'Camera';
}

function webbrowser() {
  document.getElementById('home-apps').style.display = 'none';
  document.getElementById('browser').style.display = 'block';
  document.getElementById('changer').innerText = 'Internet';
}

function Serve() {
  document.getElementById('home-apps').style.display = 'none';
  document.getElementById('serv').style.display = 'block';
  document.getElementById('changer').innerText = 'SecuroServ';
}

function home() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  ringtoneAudio.pause();
  ringtoneAudio.currentTime = 0;
  document.getElementById('camera').style.display = 'none';
  document.getElementById('messApp').style.display = 'none';
  document.getElementById('conApp').style.setProperty('display', 'none', 'important');
  document.getElementById('calling-screen').style.setProperty('display', 'none', 'important');
  document.getElementById('qapp').style.display = 'none';
  document.getElementById('setting').style.display = 'none';
  document.getElementById('serv').style.display = 'none';
  document.getElementById('jobs').style.display = 'none';
  document.getElementById('email_App').style.display = 'none';
  document.getElementById('browser').style.display = 'none';
  document.getElementById('home-apps').style.display = 'flex';
  document.getElementById('changer').innerText = 'Welcome';
}

function startClock() {
  const timerElement = document.getElementById('timer');
  if (timerElement) {
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      timerElement.innerText = hours + ':' + minutes;
    }, 1000);
  }
}

window.onload = function() {
  startClock();
};

