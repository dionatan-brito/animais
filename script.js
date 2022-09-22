// function initTabNav() {

//     const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
//     const tabContent = document.querySelectorAll('[data-tab="content"] section');
//     const ativeClass = "ativo"
    


//     if (tabMenu.length && tabContent.length) {
//         tabContent[0].classList.add(ativeClass);
//         tabContent[0].dataset.anima = "show-right"

//         function activeTab(index) {
//             tabContent.forEach(section => {
//                 section.classList.remove(ativeClass);
//             });

//             tabContent[index].classList.add(ativeClass)
//             index % 2 == 0 ? tabContent[index].dataset.anima = "show-right" : tabContent[index].dataset.anima = "show-down";
//         }

//         tabMenu.forEach((itemMenu, index) => {
//             itemMenu.addEventListener("click", () => {
//                 activeTab(index);
//             })
//         })
//     }
// }

// initTabNav();

// function initAccordion() {
//     const accordionList = document.querySelectorAll('[data-anima="accordion"] dt');
//     const activeClass = "ativo";
//     if (accordionList.length) {

//         accordionList[0].classList.add(activeClass);
//         accordionList[0].nextElementSibling.classList.add(activeClass);

//         function activeAccordion() {
//             this.classList.toggle(activeClass);
//             this.nextElementSibling.classList.toggle(activeClass);

//         }

//         accordionList.forEach(item => {
//             item.addEventListener("click", activeAccordion);

//         })
//     }
// }

// initAccordion();

// function initScrollSuave() {


//     const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

//     if (linksInternos.length) {

//         function scrollToSection(event) {
//             event.preventDefault();
//             const href = event.currentTarget.getAttribute("href");
//             const section = document.querySelector(href)

//             // section.scrollIntoView({
//             //     behavior: "smooth",
//             //     block:"start",
//             // });

//             // //forma alternativa
//             const topo = section.offsetTop;
//             window.scrollTo({
//                 top: topo,
//                 behavior: "smooth",
//             })
//         }

//         linksInternos.forEach(link => {
//             link.addEventListener("click", scrollToSection);
//         });
//     }
// }

// initScrollSuave();

// function initAnimaScroll(){

//     const sections = document.querySelectorAll('[data-anima="scroll"]');
//     console.log(sections)
//     if(sections.length){
    
//         const telausuario = window.innerHeight * 0.6;
        
//         function animaScroll(){
//             sections.forEach(section => {
//              const sectionTop = section.getBoundingClientRect().top;
//              const isSectionVisible = (sectionTop - telausuario) < 0;
//              if(isSectionVisible)
//                 section.classList.add("ativo");  
//              else
//              section.classList.remove("ativo");
//             })
//         }
        
//         window.addEventListener("scroll", animaScroll);
        
//         animaScroll();
//     }
// }

// initAnimaScroll();
