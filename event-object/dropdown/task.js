const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    valueElement.addEventListener('click', () => {
        listElement.classList.toggle('dropdown__list_active');
    });

    listElement.addEventListener('click', (event) => {
        event.preventDefault();

        const link = event.target.closest('.dropdown__link');
        
        if (link) {
            valueElement.textContent = link.textContent.trim();
            listElement.classList.remove('dropdown__list_active');
        }
    });
});