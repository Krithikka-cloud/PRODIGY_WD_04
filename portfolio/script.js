document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelectorAll('.project-links a:nth-child(2)').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert("This Live Demo link is not set yet. Replace '#' with your real demo URL.");
        
    });
});

window.addEventListener('load', () => {
    console.log("Welcome to Krithikka's Portfolio!");
});
