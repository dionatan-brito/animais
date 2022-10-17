export function initScrollSuave() {


    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    if (linksInternos.length) {

        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute("href");
            const section = document.querySelector(href)

            // section.scrollIntoView({
            //     behavior: "smooth",
            //     block:"start",
            // });

            // //forma alternativa
            const topo = section.offsetTop;
            window.scrollTo({
                top: topo,
                behavior: "smooth",
            })
        }

        linksInternos.forEach(link => {
            link.addEventListener("click", scrollToSection);
        });
    }
}

export function initAnimaScroll() {

    const sections = document.querySelectorAll('[data-anima="scroll"]');
    if (sections.length) {

        const telausuario = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - telausuario) < 0;
                if (isSectionVisible) {

                    section.classList.add("ativo");
                } else if (section.classList.contains("ativo")) {

                    section.classList.remove("ativo");
                }
            })

        }

        animaScroll();

        window.addEventListener("scroll", animaScroll);

    }
}