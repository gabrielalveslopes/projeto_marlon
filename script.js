<<<<<<< HEAD
// Mostra os primeiros livros ao carregar a página
window.onload = () => {
  carregarLivrosIniciais();
};

function carregarLivrosIniciais() {
  const url = `https://www.googleapis.com/books/v1/volumes?q=fantasticFour&maxResults=30`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      exibirLivros(data.items);
    })
    .catch(erro => {
      console.error("Erro ao buscar livros iniciais:", erro);
    });
}

// Busca com base no termo do input
function buscarLivros() {
  const termo = document.getElementById('pesquisa').value.trim();

  if (termo === "") {
    // Se estiver vazio, recarrega os livros iniciais
    carregarLivrosIniciais();
    return;
  }

  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(termo)}&maxResults=20`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      exibirLivros(data.items || []);
    })
    .catch(err => {
      console.error("Erro ao buscar livros:", err);
    });
}

// Exibe os livros na tela
function exibirLivros(livros) {
  const container = document.getElementById("livros-container");
  container.innerHTML = "";

  if (livros.length === 0) {
    container.innerHTML = "<p>Nenhum livro encontrado.</p>";
    return;
  }

  livros.forEach(livro => {
    const info = livro.volumeInfo;
    const titulo = info.title || "Sem título";
    const autores = info.authors ? info.authors.join(", ") : "Autor desconhecido";
    const capa = info.imageLinks?.thumbnail || "https://via.placeholder.com/100x150?text=Sem+Capa";

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${capa}" alt="Capa do livro">
      <h3>${titulo}</h3>
      <p><strong>Autor:</strong> ${autores}</p>
    `;

    container.appendChild(card);
  });
}
=======
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");
    const cartCount = document.querySelector(".cart-count");
  
    let count = localStorage.getItem("cartCount");
    if (count) {
        count = parseInt(count);
      } else {
        count = 0;
      }
      
    cartCount.textContent = count;
  
    let cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
      } else {
        cartItems = [];
      }
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const nome = button.dataset.nome;
        const preço = button.dataset.preço;
  
        const item = { nome, preço};
  
        cartItems.push(item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
        count++;
        cartCount.textContent = count;
        localStorage.setItem("cartCount", count);
      });
    });
  });

  
  
>>>>>>> 31dcaf5b025b985784cd204bdf3086fb1d0774af
