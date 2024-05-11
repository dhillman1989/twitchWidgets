const layer = document.querySelector('#interaction-layer');
const soundsList = [
    //General sounds
    {
        name: 'sparkle',
        src: 'https://dhillman1989.github.io/twitchWidgets/audio/sparkle.wav'
    },
    //tombraider sounds
    { name: 'aha', src: 'https://dhillman1989.github.io/twitchWidgets/audio/Lara_aha.wav' },
    { name: 'scream', src: 'https://dhillman1989.github.io/twitchWidgets/audio/lara-scream.mp3' },
    { name: 'secret', src: 'https://dhillman1989.github.io/twitchWidgets/audio/secret.mp3' },

    //red Dwarf sounds
    { name: 'spaghetti', src: 'https://dhillman1989.github.io/twitchWidgets/audio/spaghetti.mp3' }

]

layer.innerHTML = soundsList.map(s => `<audio id=${s.name} src=${s.src}>`)

let soundPlaying = false;

const interactionSwitch = (req) => {

    if (!soundPlaying) {
        soundPlaying = true;
        document.querySelector('#' + req).play();
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
        interactionSwitch(text.replace('!', ''));
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