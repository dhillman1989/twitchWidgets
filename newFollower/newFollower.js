const mainContainer = document.getElementById("main-container");
const usernameSpan = document.getElementById("new-follower_username");

const hide = () => {
  mainContainer.className = "main-container hidden";
};

const follower = (username) => {
  hide();
  mainContainer.className = "main-container";
  usernameSpan.innerText = username;
  setTimeout(() => {
    hide();
  }, 5000);
};

const handleFollowEvent = (obj) => {
  const data = obj.detail.event.data;
  const { username } = data;
  follower(username);
};

window.addEventListener("onEventReceived", (obj) => {
  if (obj.detail.listener !== "event" || obj.detail.event.type !== "follower") {
    return;
  }
  debugger;
  handleFollowEvent(obj);
});

window.addEventListener("onWidgetLoad", (obj) => {
  fieldData = obj.detail.fieldData;
});
