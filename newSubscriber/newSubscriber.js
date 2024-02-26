const sound = document.getElementById('sound');

let nextTimer;
let subscriberList = [];

const subscriber = (username) => {
    subscriberList.push(username);
    if (typeof nextTimer == "undefined" || subscriberList.length > 0) {
        sound.play();
        nextTimer = setInterval(() => {
            if (subscriberList.length == 0) {
                clearInterval(nextTimer);
                nextTimer = undefined;
            } else {
                console.log(subscriberList.shift() + " just subscribed");
                console.log(subscriberList);
            }

        }, 4000)
    }
};

const handleSubscriberEvent = (obj) => {
    const data = obj.detail.event.data;
    const { username } = data;
    subscriber(username);
};

window.addEventListener("onEventReceived", (obj) => {
    console.log(obj.detail.event.type);
    if (obj.detail.listener !== "event" || obj.detail.event.type !== "subscriber") {
        return;
    }
    console.log(nextTimer)
    handleSubscriberEvent(obj);
});

window.addEventListener("onWidgetLoad", (obj) => {
    fieldData = obj.detail.fieldData;
});