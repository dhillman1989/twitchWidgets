const mainContainer = document.getElementById("main-container");
const usernameSpan = document.getElementById("new-follower_username");
const newFollower = document.getElementById("new-follower");
const sound = document.querySelector('#sound');


let active = false;
const hide = () => {
    newFollower.className = "new-follower hidden";
};



let nextTimer;
let followersList = [];

const follower = (username) => {
    followersList.push(username);
    active = true;
    if (typeof nextTimer == "undefined" || followersList.length > 0) {
        sound.play();
        nextTimer = setInterval(() => {
            if (followersList.length == 0) {
                clearInterval(nextTimer);
                nextTimer = undefined;
                active = false;
                hide();
            } else {
                newFollower.className = "new-follower";
                usernameSpan.innerText = followersList.shift() + "has just started following!";
                console.log(followersList);
            }

        }, 4000)
    }
};

const handleFollowEvent = (obj) => {
    const data = obj.detail.event.data;
    const { username } = data;
    follower(username);
};

window.addEventListener("onEventReceived", (obj) => {
    if (obj.detail.listener !== "event" || obj.detail.event.type !== "follow") {
        return;
    }
    console.log(nextTimer)
    handleFollowEvent(obj);
});

window.addEventListener("onWidgetLoad", (obj) => {
    fieldData = obj.detail.fieldData;
});