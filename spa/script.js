let telaAnterior = 'tela-home'
let telaAtual = 'tela-home'

function navegar(destino) {
  document.querySelectorAll('.tela').forEach(t => {
    t.classList.remove('show')
    t.classList.add('collapse')
  })

  document.getElementById(destino).classList.remove('collapse')
  document.getElementById(destino).classList.add('show')

  telaAnterior = telaAtual
  telaAtual = destino
}

function voltar() {
  navegar(telaAnterior)
}

function mostrarDetalhes(produto, imagem, categoria, preco) {
  navegar('tela-produto')

  let detalhes = document.getElementById('detalhes-produto')
  detalhes.innerHTML = `
    <div class="row g-3">
      <div class="col-md-4 text-center">
        <img src="${imagem}" class="img-fluid rounded" alt="${produto}">
      </div>
      <div class="col-md-8">
        <h2>${produto}</h2>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p><strong>Preço:</strong> ${preco}</p>
      </div>
    </div>
  `
}
