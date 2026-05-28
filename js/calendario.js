// ====================================
// CALENDÁRIO - CONHEÇA BH
// ====================================

document.addEventListener('DOMContentLoaded', function () {

  // ====================================
  // ELEMENTO DO CALENDÁRIO
  // ====================================

 const calendarioEl =
  document.getElementById('calendarioBH');

  // VERIFICAR SE EXISTE
  if (!calendarioEl) return;

  // ====================================
  // EVENTOS TURÍSTICOS
  // ====================================

  const eventosTuristicos = [

    {
      title: 'Museu das Minas e do Metal',

      start: '2026-05-10',

      color: '#0d6efd',

      extendedProps: {

        descricao:
          'Exposição sobre mineração e história de Minas Gerais.',

        local:
          'Praça da Liberdade'

      }

    },

    {
      title: 'Festival Gastronômico Mineiro',

      start: '2026-05-15',

      color: '#dc3545',

      extendedProps: {

        descricao:
          'Festival fictício com comidas típicas mineiras.',

        local:
          'Mercado Central'

      }

    },

    {
      title: 'Passeio Cultural Pampulha',

      start: '2026-05-22',

      color: '#6610f2',

      extendedProps: {

        descricao:
          'Tour guiado pela arquitetura da Pampulha.',

        local:
          'Conjunto da Pampulha'

      }

    },

    {
      title: 'Parque das Mangabeiras',

      start: '2026-06-12',

      color: '#198754',

      extendedProps: {

        descricao:
          'Trilhas ecológicas e vista panorâmica da cidade.',

        local:
          'Mangabeiras'

      }

    },

    {
      title: 'Noite de Jazz em BH',

      start: '2026-06-18',

      color: '#fd7e14',

      extendedProps: {

        descricao:
          'Evento musical fictício com artistas locais.',

        local:
          'Savassi'

      }

    },

    {
      title: 'Feira Hippie Especial',

      start: '2026-06-26',

      color: '#20c997',

      extendedProps: {

        descricao:
          'Artesanato, gastronomia e apresentações culturais.',

        local:
          'Av. Afonso Pena'

      }

    },

    {
      title: 'Museu da Pampulha',

      start: '2026-07-15',

      color: '#6f42c1',

      extendedProps: {

        descricao:
          'Exposição especial de arte moderna.',

        local:
          'Pampulha'

      }

    },

    {
      title: 'Festival de Inverno BH',

      start: '2026-07-19',

      color: '#0dcaf0',

      extendedProps: {

        descricao:
          'Evento fictício com música, arte e gastronomia.',

        local:
          'Centro de BH'

      }

    },

    {
      title: 'Bar do Zé - Música ao Vivo',

      start: '2026-07-25',

      color: '#dc3545',

      extendedProps: {

        descricao:
          'Noite especial com música mineira ao vivo.',

        local:
          'Savassi'

      }

    }

  ];

  // ====================================
  // CRIAR CALENDÁRIO
  // ====================================

  const calendario =
    new FullCalendar.Calendar(calendarioEl, {

      // VISUALIZAÇÃO INICIAL
      initialView: 'multiMonthThree',

      // IDIOMA
      locale: 'pt-br',

      // ALTURA
      height: 'auto',

      // TOOLBAR
      headerToolbar: {

        left: 'prev,next today',

        center: 'title',

        right: 'multiMonthThree,dayGridMonth'

      },

      // CONFIGURAÇÃO DAS VIEWS
      views: {

        multiMonthThree: {

          type: 'multiMonth',

          duration: { months: 3 },

          buttonText: '3 Meses'

        }

      },

      // EVENTOS
      events: eventosTuristicos,

      // MOSTRAR "+ MAIS"
      dayMaxEvents: true,

      // AO CLICAR NO EVENTO
      eventClick: function(info) {

        alert(

          '📍 ' + info.event.title +

          '\n\n📝 ' +
          info.event.extendedProps.descricao +

          '\n\n📌 Local: ' +
          info.event.extendedProps.local

        );

      }

    });

  // ====================================
  // RENDERIZAR
  // ====================================

  calendario.render();

});