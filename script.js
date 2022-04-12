const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelectorAll('.modal')

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modal.forEach((el) => {
           el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modal.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});