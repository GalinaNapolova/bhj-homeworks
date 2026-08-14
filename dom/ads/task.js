const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));

    setInterval(() => {

        const activeCase = rotator.querySelector('.rotator__case_active');
        
        let currentIndex = cases.indexOf(activeCase);
        
        let nextIndex = currentIndex + 1;

        if (nextIndex >= cases.length) {
            nextIndex = 0;
        }

        activeCase.classList.remove('rotator__case_active');
        cases[nextIndex].classList.add('rotator__case_active');
        
    }, 1000);
});
