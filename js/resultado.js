$(() => {
    $('#btn5prod').click(function () {
      var corpo = "";
      var num = 0;
        for(var x=1; x<6; x++){
        num = Math.floor(Math.random() * (4 - 1) + 1);
        corpo += "<div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 prodResultado fonte'>"
        corpo += "<div class='caixa text-center'> "
        corpo += "<img src='img/" + num + ".gif' class='img-responsive' alt='produto'>"
        corpo += "<br>"
        corpo += "<span id='saibaMaisBtn2' class='text-center'>Sapato Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id"+num+"'>Saiba Mais</a></span>"
        corpo += "</div>"
        corpo += "</div>"
      }
        $('#resultado').html(corpo);
    })
    $('#btn10prod').click(function () {
      var corpo = "";
      var num = 0;
        for(var x=1; x<11; x++){
        num = Math.floor(Math.random() * (4 - 1) + 1);
        corpo += "<div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 prodResultado fonte'>"
        corpo += "<div class='caixa text-center'> "
        corpo += "<img src='img/" + num + ".gif' class='img-responsive' alt='produto'>"
        corpo += "<br>"
        corpo += "<span id='saibaMaisBtn2' class='text-center'>Sapato Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id"+num+"'>Saiba Mais</a></span>"
        corpo += "</div>"
        corpo += "</div>"
          }
            $('#resultado').html(corpo);
    })
})