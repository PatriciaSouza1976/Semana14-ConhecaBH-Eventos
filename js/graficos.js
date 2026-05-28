// ====================================
// GRÁFICOS - CONHEÇA BH
// ====================================

document.addEventListener("DOMContentLoaded", () => {

  // Verificar se locais existe
  if (typeof locais === "undefined") return;

  // CONTADORES
  let totalMuseus = 0;
  let totalParques = 0;
  let totalBares = 0;

  // PERCORRER LOCAIS
  locais.forEach(local => {

    if (local.categoria === "museu") {
      totalMuseus++;
    }

    if (local.categoria === "parque") {
      totalParques++;
    }

    if (local.categoria === "bar") {
      totalBares++;
    }

  });

  // CANVAS
  const ctx =
    document.getElementById("graficoCategorias");

  // Verificar canvas
  if (!ctx) return;

  // GRÁFICO
  new Chart(ctx, {

    type: "bar",

    data: {

      labels: [
        "Museus",
        "Parques",
        "Bares"
      ],

      datasets: [{

        label: "Quantidade de locais turísticos",

        data: [
          totalMuseus,
          totalParques,
          totalBares
        ],

        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107"
        ],

        borderRadius: 8,
        borderWidth: 1

      }]

    },

    options: {

      responsive: true,

      plugins: {

        legend: {
          display: false
        },

        title: {
          display: true,
          text: "Categorias Turísticas de Belo Horizonte"
        }

      },

      scales: {

        y: {

          beginAtZero: true,

          ticks: {
            stepSize: 1
          }

        }

      }

    }

  });

});