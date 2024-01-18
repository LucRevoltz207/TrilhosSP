// Array de estações reais em São Paulo
const estacoesSP = ['Luz', 'Sé', 'Brás', 'Tatuapé', /* Adicione mais conforme necessário */];

function expandImage(estacao) {
  // Adicione lógica para expandir a imagem da estação selecionada
  // Pode ser usando CSS para aumentar o tamanho ou trocar a imagem, por exemplo
  console.log(`Imagem da estação ${estacao} expandida`);
}

function toggleSearchBar() {
  var searchBar = document.getElementById('searchBar');
  searchBar.classList.toggle('hidden');
}

function searchStation() {
  var searchTerm = document.getElementById('searchInput').value.toLowerCase();

  // Verifique se a estação pesquisada existe na lista de estações reais
  if (estacoesSP.includes(searchTerm)) {
    console.log(`Estação encontrada: ${searchTerm}`);
    // Redirecionar para a página da estação
    window.location.href = `$../{searchTerm.toLowerCase()}.html`;
  } else {
    console.log(`Estação não encontrada: ${searchTerm}`);
    // Adicione lógica para informar o usuário que a estação não foi encontrada
  }
}

