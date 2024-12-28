const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeBtn = document.querySelector("i");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 2000);
});

closeBtn.addEventListener("click", () => {
  popupScreen.classList.remove("active");
  document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60;
});

const WebsiteCookie = document.cookie.indexOf('WebsiteName=');
if (WebsiteCookie != -1) {
    popupScreen.Style.display = 'none';
} else {
    popupScreen.Style.display = 'flex';
}