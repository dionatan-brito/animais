export default function initTabNav() {

    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const ativeClass = "ativo"
    


    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(ativeClass);
        tabContent[0].dataset.anima = "show-right"

        function activeTab(index) {
            tabContent.forEach(section => {
                section.classList.remove(ativeClass);
            });

            tabContent[index].classList.add(ativeClass)
            index % 2 == 0 ? tabContent[index].dataset.anima = "show-right" : tabContent[index].dataset.anima = "show-down";
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            })
        })
    }
}
