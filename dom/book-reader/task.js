const fontButtons = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

fontButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const currentActive = document.querySelector('.font-size_active');
        if (currentActive) {
            currentActive.classList.remove('font-size_active');
        }
        button.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');

        const size = button.dataset.size;

        if (size === 'small') {
            book.classList.add('book_fs-small');
        } 
        else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});
