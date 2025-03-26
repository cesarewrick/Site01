document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
        }

        const targetId = this.getAttribute('href').substring(1);

        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error('Seção não encontrada:', targetId);
        }

    });
});