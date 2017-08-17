function showMenu(isLogon) {
    const doc = document;
    let className = isLogon ? 'isLogon' : 'isLogout',
        menu = doc.getElementsByClassName(className),
        len = menu.length;
    for (let i = 0; i < len; i++) {
        menu[i].style.display = 'list-item';
    }
}

window.onload = function () {
    document.getElementById('cnodeLogo').onclick = function () {
        window.location.href = '/';
    };
    showMenu(false);
};