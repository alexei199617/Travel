const dpablock = document.getElementById('destPictAbsolBlock');
const popup = document.getElementById('popup');
const login = document.getElementById('login');
const signup = document.getElementById('signup');

const control = [860, 0, -860];
let count = 1;

// Переключатель под картинками
document.querySelector('.pictControls').addEventListener('click', move);
function move(event) {
    if (event.target.classList == 'control') {
        count = Number(event.target.id.slice(-1))
        transformation(count)
    }
}
// Смещение картинок
function transformation(count) {
    document.querySelectorAll('.control').forEach((item) => {
        item.classList.remove('controlActive');
    });
    dpablock.classList.add('dNone');
    document.getElementById('control' + count).classList.add('controlActive');
    document.querySelector('.destPictures').style.transform = 'translateX(' + control[count] + 'px)';
    setTimeout(function(){dpablock.classList.remove('dNone')},650);
}
// Нажатие на крайнюю картинку
dpablock.addEventListener('click', moveArr);
function moveArr(event) {
    if (event.target.classList == 'destPictAbsol leftarr') {
        countMove(-1);
    } else if (event.target.classList == 'destPictAbsol rightarr') {
        countMove(1);
    }
}
function countMove(num) {
    if (num < 0) {
        if (count <= 0) {
            count = 2;
        } else {
            count = count - 1;
        }
    } else {
        if (count >= 2) {
            count = 0;
        } else {
            count = count + 1;
        }
    }
    transformation(count)
}

document.getElementById('loginBtn').addEventListener('click', popups);
function popups () {
    popup.classList.remove('dNone');
}
popup.addEventListener('click', popupExit);
function popupExit (el) {
    if (event.target.id=='popup' || el==true) {
        popup.classList.add('dNone');
        login.classList.remove('dNone');
        signup.classList.add('dNone');
        document.querySelectorAll('.popFormEl').forEach(function(item) {
            item.value = '';
        });
    }
}
document.getElementById('signupLink').addEventListener('click', func =>{
    login.classList.add('dNone');
    signup.classList.remove('dNone');
});
document.getElementById('signinLink').addEventListener('click', func =>{
    login.classList.remove('dNone');
    signup.classList.add('dNone');
});
document.getElementById('popFormBtmIn').addEventListener('submit', message);
function message (event) {
    event.preventDefault();
    console.log('tr')
    let mail = document.getElementById('popFormMailIn').value.toString();;
    let pass = document.getElementById('popFormPassIn').value.toString();;
    console.log('pr')
    console.log(mail + ' ' + pass)
    alert('Login: ' + mail + '\n' + 'Password: ' + pass);
    // popupExit (true)
}
