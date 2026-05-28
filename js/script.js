// ======================================
// CONHEÇA BH - SCRIPT PRINCIPAL
// ======================================

// ======================================
// DADOS DOS LOCAIS
// ======================================

let locais = [

  // ======================================
  // MUSEUS
  // ======================================

  {
    id: 1,

    nome: "Museu das Minas e do Metal",

    categoria: "museu",

    imagem: "assets/imagem/museu1.png",

    descricao:
       'Museu sobre mineração e história metalúrgica de MG.',

    bairro: "Centro",

    endereco:
      "Praça da Liberdade, Belo Horizonte",

    funcionamento:
      "Terça a Domingo",

    horario:
      "09h às 18h",

    avaliacao: 4.5,

    totalAvaliacoes: 120,

    popularidade: 85,

    coordenadas:
      [-43.9372, -19.9325],

    comentarios: [

      "Incrível exposição!",

      "Muito educativo para estudantes.",

      "Recomendo visitar."

    ]
  },

  {
    id: 2,

    nome: "Museu de Arte da Pampulha",

    categoria: "museu",

    imagem: "assets/imagem/museu2.png",

    descricao:
      "Museu com acervo de arte moderna brasileira.",

    bairro: "Pampulha",

    endereco:
      "Av. Otacílio Negrão de Lima, Pampulha",

    funcionamento:
      "Terça a Domingo",

    horario:
      "10h às 18h",

    avaliacao: 4.7,

    totalAvaliacoes: 95,

    popularidade: 90,

    coordenadas:
      [-43.9777, -19.8517],

    comentarios: [

      "Belas obras de arte.",

      "Ambiente agradável.",

      "Perfeito para amantes de arte."

    ]
  },

  {
    id: 3,

    nome: "Museu Histórico Abílio Barreto",

    categoria: "museu",

    imagem: "assets/imagem/museu3.png",

    descricao:
      "Museu que conta a história de Belo Horizonte.",

    bairro: "Cidade Jardim",

    endereco:
      "Av. Prudente de Morais, Cidade Jardim",

    funcionamento:
      "Terça a Domingo",

    horario:
      "09h às 17h",

    avaliacao: 4.2,

    totalAvaliacoes: 78,

    popularidade: 70,

    coordenadas:
      [-43.9474, -19.9363],

    comentarios: [

      "Interessante para história local.",

      "Bem organizado."

    ]
  },

  // ======================================
  // PARQUES
  // ======================================

  {
    id: 4,

    nome: "Parque das Mangabeiras",

    categoria: "parque",

    imagem: "assets/imagem/parque1.png",

    descricao:
      "Parque com vista panorâmica da cidade e trilhas.",

    bairro: "Mangabeiras",

    endereco:
      "Av. José do Patrocínio Pontes, Mangabeiras",

    funcionamento:
      "Todos os dias",

    horario:
      "08h às 18h",

    avaliacao: 4.8,

    totalAvaliacoes: 200,

    popularidade: 95,

    coordenadas:
      [-43.9152, -19.9527],

    comentarios: [

      "Vista incrível!",

      "Perfeito para caminhadas.",

      "Família ama vir aqui."

    ]
  },

  {
    id: 5,

    nome: "Parque Municipal",

    categoria: "parque",

    imagem: "assets/imagem/parque2.png",

    descricao:
      "Parque urbano com lago e áreas de lazer.",

    bairro: "Centro",

    endereco:
      "Av. Afonso Pena, Centro",

    funcionamento:
      "Todos os dias",

    horario:
      "06h às 18h",

    avaliacao: 4.3,

    totalAvaliacoes: 150,

    popularidade: 80,

    coordenadas:
      [-43.9345, -19.9202],

    comentarios: [

      "Bom para piqueniques.",

      "Área verde no centro."

    ]
  },

  {
    id: 6,

    nome: "Parque Ecológico da Pampulha",

    categoria: "parque",

    imagem: "assets/imagem/parque3.png",

    descricao:
      "Parque ecológico com fauna e flora diversificada.",

    bairro: "Pampulha",

    endereco:
      "Av. Otacílio Negrão de Lima, Pampulha",

    funcionamento:
      "Todos os dias",

    horario:
      "08h às 17h",

    avaliacao: 4.6,

    totalAvaliacoes: 110,

    popularidade: 88,

    coordenadas:
      [-43.9715, -19.8446],

    comentarios: [

      "Natureza preservada.",

      "Ideal para observação de aves."

    ]
  },

  // ======================================
  // BARES
  // ======================================

  {
    id: 7,

    nome: "Bar do Zé",

    categoria: "bar",

    imagem: "assets/imagem/bar1.png",

    descricao:
      "Bar tradicional com música ao vivo e petiscos mineiros.",

    bairro: "Savassi",

    endereco:
      "Rua da Bahia, Savassi",

    funcionamento:
      "Quarta a Domingo",

    horario:
      "18h às 02h",

    avaliacao: 4.4,

    totalAvaliacoes: 180,

    popularidade: 92,

    coordenadas:
      [-43.9389, -19.9381],

    comentarios: [

      "Música ótima!",

      "Comida deliciosa.",

      "Ambiente animado."

    ]
  },

  {
    id: 8,

    nome: "Cervejaria BH",

    categoria: "bar",

    imagem: "assets/imagem/bar2.png",

    descricao:
      "Cervejaria artesanal com variedades locais.",

    bairro: "Lourdes",

    endereco:
      "Rua Curitiba, Lourdes",

    funcionamento:
      "Terça a Domingo",

    horario:
      "17h às 01h",

    avaliacao: 4.5,

    totalAvaliacoes: 140,

    popularidade: 87,

    coordenadas:
      [-43.9425, -19.9248],

    comentarios: [

      "Cervejas incríveis.",

      "Atendimento bom.",

      "Recomendo as artesanais."

    ]
  },

  {
    id: 9,

    nome: "Boteco Mineiro",

    categoria: "bar",

    imagem: "assets/imagem/bar3.png",

    descricao:
      "Boteco autêntico com pratos típicos mineiros.",

    bairro: "Centro",

    endereco:
      "Rua São Paulo, Centro",

    funcionamento:
      "Todos os dias",

    horario:
      "11h às 00h",

    avaliacao: 4.1,

    totalAvaliacoes: 100,

    popularidade: 75,

    coordenadas:
      [-43.9415, -19.9195],

    comentarios: [

      "Comida caseira.",

      "Preços acessíveis.",

      "Ambiente familiar."

    ]
  }

];

// ======================================
// GERAR ESTRELAS
// ======================================

function gerarEstrelas(avaliacao) {

  let estrelas = "";

  const quantidade =
    Math.round(avaliacao);

  for (let i = 0; i < quantidade; i++) {

    estrelas += "⭐";

  }

  return estrelas;

}

// ======================================
// CARREGAR LOCAIS
// ======================================

function carregarLocais(lista = locais) {

  const container =
    document.getElementById("destinosContainer");

  if (!container) return;

  container.innerHTML = "";

  lista.forEach(local => {

    container.innerHTML += `

      <div class="col-md-4 mb-4">

        <div class="card h-100 shadow-sm">

          <img
            src="${local.imagem}"
            class="card-img-top"
            alt="${local.nome}"
          >

       <div class="card-body text-center">

  <h5 class="card-title fw-bold mb-2">
    ${local.nome}
  </h5>

  <p
    class="card-text text-muted mb-3"
    style="font-size: 0.95rem;"
  >
    ${local.descricao.replace("Minas Gerais", "MG")}
  </p>

  <div class="info-local">

  <button
  class="btn btn-danger btn-sm mt-3"
  onclick="excluirLocal(${local.id})"
>

  Excluir

</button>

    <span>
      📍 ${local.bairro}
    </span>

    <span>
      🕒 ${local.horario}
    </span>

    <span>
      📅 ${local.funcionamento}
    </span>

    <span>
      ${gerarEstrelas(local.avaliacao)}
      (${local.avaliacao})
    </span>

    <span>
      🔥 ${local.popularidade}%
    </span>

  </div>

</div>
          </div>

        </div>

      </div>

    `;

  });

}
// ======================================
// FILTRAR CATEGORIA
// ======================================

function filtrarCategoria(categoria) {

  const filtrados =
    locais.filter(local =>
      local.categoria === categoria
    );

  carregarLocais(filtrados);

}

// ======================================
// BUSCAR LOCAL
// ======================================

function buscarLocal() {

  const campo =
    document.getElementById("campoBusca");

  if (!campo) return;

  const textoBusca =
    campo.value.toLowerCase().trim();

  if (textoBusca === "") {

    carregarLocais();

    return;

  }

  const resultados =
    locais.filter(local =>

      local.nome.toLowerCase().includes(textoBusca) ||

      local.categoria.toLowerCase().includes(textoBusca) ||

      local.bairro.toLowerCase().includes(textoBusca)

    );

  carregarLocais(resultados);

}

// ======================================
// INICIALIZAÇÃO
// ======================================

document.addEventListener("DOMContentLoaded", () => {

  carregarLocais();

  const btnBuscar =
    document.getElementById("btnBuscar");

  if (btnBuscar) {

    btnBuscar.addEventListener(
      "click",
      buscarLocal
    );

  }

});

// ======================================
// LOCAL STORAGE
// ======================================

// SALVAR DADOS

function salvarLocais() {

  localStorage.setItem(

    "locaisBH",

    JSON.stringify(locais)

  );

}

// CARREGAR DADOS

function carregarLocalStorage() {

  const dados =
    localStorage.getItem("locaisBH");

  if (dados) {

    locais = JSON.parse(dados);

  }

}

// ======================================
// ADICIONAR NOVO LOCAL
// ======================================

function adicionarLocal() {

  const nome =
    document
      .getElementById("novoNome")
      .value
      .trim();

  const categoria =
    document
      .getElementById("novaCategoria")
      .value;

  const bairro =
    document
      .getElementById("novoBairro")
      .value
      .trim();

  // ======================================
  // VALIDAÇÃO
  // ======================================

  if (

    nome === "" ||

    categoria === "" ||

    bairro === ""

  ) {

    alert(
      "Preencha todos os campos."
    );

    return;

  }

  // ======================================
  // IMAGEM ALEATÓRIA
  // ======================================

  const imagensAleatorias = [

    "https://picsum.photos/600/400?random=1",

    "https://picsum.photos/600/400?random=2",

    "https://picsum.photos/600/400?random=3",

    "https://picsum.photos/600/400?random=4",

    "https://picsum.photos/600/400?random=5",

    "https://picsum.photos/600/400?random=6"

  ];

  const imagemEscolhida =

    imagensAleatorias[

      Math.floor(

        Math.random() *

        imagensAleatorias.length

      )

    ];

  // ======================================
  // NOVO LOCAL
  // ======================================

  const novoLocal = {

    id: Date.now(),

    nome: nome,

    categoria: categoria,

    bairro: bairro,

    descricao:
      "Novo destino turístico cadastrado.",

    imagem:
      imagemEscolhida,

    endereco:
      "Belo Horizonte",

    funcionamento:
      "Todos os dias",

    horario:
      "08h às 18h",

    avaliacao: 4.0,

    totalAvaliacoes: 0,

    popularidade: 80,

    coordenadas:
      [-43.9386, -19.9208],

    comentarios: []

  };

  // ======================================
  // ADICIONAR
  // ======================================

  locais.push(novoLocal);

  // ======================================
  // SALVAR
  // ======================================

  salvarLocais();

  // ======================================
  // RECARREGAR
  // ======================================

  carregarLocais();

  // ======================================
  // LIMPAR CAMPOS
  // ======================================

  document.getElementById(
    "novoNome"
  ).value = "";

  document.getElementById(
    "novaCategoria"
  ).value = "";

  document.getElementById(
    "novoBairro"
  ).value = "";

}

// ======================================
// EXCLUIR LOCAL
// ======================================

function excluirLocal(id) {

  locais = locais.filter(

    local => local.id !== id

  );

  salvarLocais();

  carregarLocais();

}

// ======================================
// BOTÃO ADICIONAR
// ======================================

document.addEventListener(

  "DOMContentLoaded",

  () => {

    carregarLocalStorage();

    carregarLocais();

    const btnAdicionar =
      document.getElementById(
        "btnAdicionar"
      );

    if (btnAdicionar) {

      btnAdicionar.addEventListener(

        "click",

        adicionarLocal

      );

    }

  }

);