const getPassword = () => {
    var charset =
        "0123456789abcdefghijklmnopqrstuvwxyz" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    var passLength = 16;
    var password = "";
    for (let i = 0; i < passLength; i++) {
        var randomNum = Math.floor(Math.random() * charset.length);
        password += charset.substring(randomNum, randomNum + 1);
    }
    document.getElementById("password").value = password;
};