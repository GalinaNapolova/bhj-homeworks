const tabContainers = document.querySelectorAll('.tabs');

tabContainers.forEach(container => {

    const tabs = Array.from(container.querySelectorAll('.tab'));
    const contents = Array.from(container.querySelectorAll('.tab__content'));
    const navigation = container.querySelector('.tab__navigation');

    navigation.addEventListener('click', (event) => {

        const clickedTab = event.target.closest('.tab');

        if (!clickedTab || clickedTab.classList.contains('tab_active')) {
            return;
        }

        const targetIndex = tabs.indexOf(clickedTab);
        const activeTab = container.querySelector('.tab_active');
        const activeContent = container.querySelector('.tab__content_active');

        if (activeTab) activeTab.classList.remove('tab_active');
        if (activeContent) activeContent.classList.remove('tab__content_active');

        clickedTab.classList.add('tab_active');
        if (contents[targetIndex]) {
            contents[targetIndex].classList.add('tab__content_active');
        }
    });
});