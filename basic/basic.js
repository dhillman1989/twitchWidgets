const mainContainer = document.getElementById("main-container");
const profileImage = document.getElementById("profile-image");
const sound = document.getElementById("sound");

const hide = () => {
  profileImage.className = "profile-image hidden";
};

const imageSize = 200;

const laugh = () => {
  hide();
  //position the image

  const { height, width } = mainContainer.getBoundingClientRect();
  profileImage.style.top = `${Math.random() * (height - imageSize)}px`;
  profileImage.style.left = `${Math.random() * (width - imageSize)}px`;
  profileImage.className = "profile-image";
  sound.play();
  setTimeout(() => {
    hide();
  }, 3000);
};

const handleMessage = (obj) => {
  if (obj.detail.event.data.text == fieldData.laughCommand) {
    const data = obj.detail.event.data;

    const { text, displayName } = data;
    laugh();
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
