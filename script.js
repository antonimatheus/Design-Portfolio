// Seleciona o elemento do título
const headerTitle = document.getElementById('header--title');
const headerCallToAction = document.getElementById('header--callToAction');

// Evento de rolagem
window.addEventListener('scroll', () => {
    // Calcula a posição atual da rolagem
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    // Diminui a opacidade conforme você desce
    const opacity = Math.max(0, 1 - scrollTop / (windowHeight * 0.4));

    // Aplica a opacidade ao elemento
    headerTitle.style.opacity = opacity.toString();
    headerCallToAction.style.opacity = opacity.toString();
});



const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const intensity = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.4));

    // Ajuste dinâmico de cor para fundo e texto
    navigation.style.backgroundColor = intensity < 0.5 ? 'white' : '#F75A56';
    navigation.style.color = intensity < 0.5 ? '#F75A56' : 'white';

    // Ajuste dinâmico da cor dos links e ícones dentro do nav
    const items = navigation.querySelectorAll('a, i');
    items.forEach(item => {
        item.style.color = intensity < 0.5 ? '#F75A56' : 'white';
    });
});
