const layer = document.querySelector('#interaction-layer');
const soundsList = [{
        name: 'sparkle',
        src: 'https://dhillman1989.github.io/twitchWidgets/audio/sparkle.wav'
    },
    { name: 'aha', src: 'https://dhillman1989.github.io/twitchWidgets/audio/aha.m4a' }
]

layer.innerHTML = soundsList.map(s => `<audio id=${s.name} src=${s.src}>`)

let soundPlaying = false;

const interactionSwitch = (req) => {
    switch (req) {
        case 'aha':
            document.querySelector('#aha').play();
            break;
        case 'sparkle':
            document.querySelector('#sparkle').play();
            break;

        default:
            break;
    }

}

const playSound = (sound) => {
    if (!soundPlaying) {
        soundPlaying = true;
        sound.play();
        setTimeout(() => {
            soundPlaying = false;
        }, 3000)
    }
}


const handleMessage = (obj) => {
    if (obj.detail.event.data.text.indexOf('!') == 0) {
        const data = obj.detail.event.data;
        const { text, displayName } = data;
        console.log(text.replace('!', ''));
        interactionSwitch(text)
    }
};

window.addEventListener("onEventReceived", (obj) => {
    if (obj.detail.listener !== "message") {
        return;
    }
    debugger;
    handleMessage(obj);
});

window.addEventListener("onWidgetLoad", (obj) => {
    fieldData = obj.detail.fieldData;
});