const raidEventElement = document.querySelector('.raid-event')


const raidEvent = (username, amount) => {
    raidEventElement.innerHTML = `${username} is raiding with a party of ${amount}`;
    raidEventElement.className = "raid-event";
    setTimeout(() => {
        raidEventElement.className = "raid-event hide";
    }, 5000)
}


const handleRaidEvent = (obj) => {
    const data = obj.detail.event.data;
    const { username, amount } = data;
    raidEvent(username, amount)
};

window.addEventListener("onEventReceived", (obj) => {
    console.log(obj);
    if (obj.detail.listener !== "event" || obj.detail.event.type !== "raid") {
        return;
    }
    handleRaidEvent(obj);
});

window.addEventListener("onWidgetLoad", (obj) => {
    fieldData = obj.detail.fieldData;
});