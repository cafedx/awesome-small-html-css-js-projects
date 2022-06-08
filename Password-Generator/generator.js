const display = document.querySelector("input"),
    button = document.querySelector("button"),
    copyBtn = document.querySelector("span.far"),
    copyActive = document.querySelector("span.fas");
const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
button.onclick = () => {
    let i,
        randomPassword = "";
    copyBtn.style.display = "block";
    copyActive.style.display = "none";
    for (i = 0; i < 16; i++) {
        randomPassword =
            randomPassword + chars.charAt(Math.floor(Math.random() * chars.length));
    }
    display.value = randomPassword;
};
function copy() {
    copyBtn.style.display = "none";
    copyActive.style.display = "block";
    display.select();
    document.execCommand("copy");
}