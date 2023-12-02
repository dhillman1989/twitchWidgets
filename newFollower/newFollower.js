const mainContainer = document.getElementById("main-container");
const usernameSpan = document.getElementById("new-follower_username");
const newFollower = document.getElementById("new-follower");

const hide = () => {
  newFollower.className = "new-follower hidden";
};

let hideTimer;

const follower = (username) => {
  hide();
  clearTimeout(hideTimer);
  newFollower.className = "new-follower";
  usernameSpan.innerText = username + "has just started following!";
  hideTimer = setTimeout(() => {
    hide();
  }, 5000);
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
  debugger;
  handleFollowEvent(obj);
});

window.addEventListener("onWidgetLoad", (obj) => {
  fieldData = obj.detail.fieldData;
});
