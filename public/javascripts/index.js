import utility from './common/utility.js';
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
    const doc = document;
    doc.getElementById('cnodeLogo').onclick = function () {
        window.location.href = '/';
    };
    doc.getElementById('headerLogin').onclick = function () {
        window.location.href = '/sign/login';
    };
    doc.getElementById('api').onclick = function () {
        window.location.href = '/testSession';
    };
    showMenu(false);
};