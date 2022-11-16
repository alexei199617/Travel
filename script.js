const controller = document.querySelector('.pictControls');
const pictBlock = document.querySelector('.destPictures');
const control = [540, 0, -540]

controller.addEventListener('click', move);
function move (event) {
    if (event.target.classList == 'control') {
        document.querySelectorAll('.control').forEach((item) => {
            item.classList.remove('controlActive');
        });
        document.getElementById(event.target.id).classList.add('controlActive');
        pictBlock.style.transform = 'translateX(' + control[Number(event.target.id.slice(-1))] + 'px)';
    }
}
