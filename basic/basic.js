const mainContainer = document.getElementById("main-container");
const profileImage = document.getElementById("profile-image");
const sound = document.getElementById("sound");

const hide = () => {
  mainContainer.className = "main-container hidden";
};

const imageSize = 200;

const laugh = () => {
  hide();
  //position the image
  const { height, width } = mainContainer.getBoundingClientRect();
  profileImage.style.top = `${Math.random() * (height - imageSize)}px`;
  profileImage.style.left = `${Math.random() * (width - imageSize)}px`;
  mainContainer.className = "main-container";
  sound.play();
  setTimeout(() => {
    hide();
  }, 3000);
};

const handleMessage = (obj) => {
  const laughCommand = fieldData.laughCommand;
  const data = obj.detail.event.data;
  const { text, displayName } = data;
  laugh();
};

window.addEventListener("onEventRecieved", (obj) => {
  if (obj.detail.listener !== "message") {
    return;
  }
  handleMessageObject(obj);
});

window.addEventListener("onWidgetLoad", (obj) => {
  fieldData = obj.detail.fieldData;
});
