// Seleciona o elemento do título
const headerTitle = document.getElementById("header--title");
const headerCallToAction = document.getElementById("header--callToAction");

// Evento de rolagem
window.addEventListener("scroll", () => {
  // Calcula a posição atual da rolagem
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  // Diminui a opacidade conforme você desce
  const opacity = Math.max(0, 1 - scrollTop / (windowHeight * 0.4));

  // Aplica a opacidade ao elemento
  headerTitle.style.opacity = opacity.toString();
  headerCallToAction.style.opacity = opacity.toString();
});

const navigation = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const intensity = Math.max(
    0,
    1 - window.scrollY / (window.innerHeight * 0.3)
  );

  // Ajuste dinâmico de cor para fundo e texto
  navigation.style.backgroundColor = intensity < 0.5 ? "#333333" : "#ffffff";
  navigation.style.color = intensity < 0.5 ? "#fff" : "#333333";

  // Ajuste dinâmico da cor dos links e ícones dentro do nav
  const items = navigation.querySelectorAll("a, i");
  items.forEach((item) => {
    item.style.color = intensity < 0.5 ? "#fff" : "#333333";
  });
});

// Seleciona todas as imagens dentro de .main--imgsPortfolio
let imagesportfolio = document.querySelectorAll(".main--imgsPortfolio img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

// Função para exibir a imagem em tela cheia
imagesportfolio.forEach((image) => {
  image.addEventListener("click", () => {
    overlayImg.src = image.src; // Define a imagem clicada como fonte da imagem em tela cheia
    overlay.style.display = "flex"; // Exibe a sobreposição
  });
});

// Fechar a imagem ao clicar fora dela
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    // Verifica se o clique foi fora da imagem
    overlay.style.display = "none"; // Fecha o overlay
  }
});
