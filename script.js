document.addEventListener("DOMContentLoaded", function () {
    let ToggleBtn = document.getElementById("ToggleBtn");
    let NavList = document.getElementById("NavList");

    ToggleBtn.addEventListener("click", () => {
        NavList.classList.toggle("show");
    });

    // navbar
        const navLinks = document.querySelectorAll("#NavList li a");

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.forEach((navLink) => navLink.classList.remove("active"));

                link.classList.add("active");
            });
        });



        const sections = document.querySelectorAll("section");

        function setActiveLink() {
            let index = sections.length;

            while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

            navLinks.forEach((link) => link.classList.remove("active"));

            navLinks[index].classList.add("active");
        }

        window.addEventListener("scroll", setActiveLink);

        setActiveLink();


        
});



