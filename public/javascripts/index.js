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
function initData() {
    const doc = document, user = doc.getElementById('userdata').value, isLogon = doc.getElementById('islogon').value;
    let userData = null;
    if (user) {
        userData = JSON.parse(user);
        doc.getElementById('userImage').src = userData.avatar_url;
        doc.getElementById('sidebarUsername').innerText = userData.login;
    }
    showMenu(isLogon && isLogon !== 'false');
}

window.onload = function () {
    const doc = document;
    doc.getElementById('cnodeLogo').onclick = () => {
        window.location.href = '/';
    };
    doc.getElementById('home').onclick = () => {
        window.location.href = '/';
    };
    doc.getElementById('headerRegister').onclick = () => {
        window.location.href = '/sign/login';
    };
    doc.getElementById('headerLogin').onclick = () => {
        window.location.href = '/sign/login';
    };
    doc.getElementById('logout').onclick = () => {
        utility.ajax('/sign/logout', 'POST', {}).then(() => {
            window.location.href = '/';
        }).catch((err) => { console.log(err); });
    };
    //时间委托bug
    doc.getElementsByClassName('topic-list-item')[0].onclick = (e) => {
        let topicId = e.target.id;
        window.location.href = '/topic/details/' + topicId;
    };
    initData();
};