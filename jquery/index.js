$(document).ready(function () {

  // Toogle no accordion
  $('#accordion .panel-title a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().parent().siblings('.collapse').collapse('toggle');
  });

  // Vendendo uma cerva
  $('table').delegate('.vender', 'click', function (e) {
    e.preventDefault();
    var qtd = $(this).parent().siblings('.qtd').text() * 1;

    if (qtd <= 0) {
      $(this).parent().parent().addClass('danger')
      return false;
    }

    $(this).parent().siblings('.qtd').text(qtd-1);

    // Exemplificando conexão com servidor
    // var id = $(this).data('ident');
    // $.ajax({
    //   method: "POST",
    //   url: "http://www.dominio.com/venderCerveja",
    //   data: {id: id}
    //   success: function (data) {
    //     console.log('sucesso');
    //   },
    //   error: function () {
    //     console.log('error');
    //   },
    //   complete: function () {
    //     console.log('completo');
    //   }
    // });
  });

  // Capturando as cervejas em estoque
  $.ajax({
    method: "GET",
    url: "cervejas.json",
    success: function (data) {
      console.log('sucesso');
      var json = jQuery.parseJSON(data);
      populaTabela(json);
    },
    error: function () {
      console.log('error');
    },
    complete: function () {
      console.log('completo');
    }
  });

  // populando a tabela dinamicamente
  function populaTabela (data) {
    var html = '';

    for (var i = 0; i < data.length; i++) {
      html += '<tr>' +
                '<td>' + data[i].nome + '</td>' +
                '<td>' + data[i].descricao + '</td>' +
                '<td class="qtd">' + data[i].quantidade + '</td>' +
                '<td><a href="#" class="vender" data-ident="' + data[i].id + '">Vender</a></td>' +
              '</tr>';
    }

    $('.dinamico table tbody').append(html);
  }
});
