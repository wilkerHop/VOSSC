$(() => {
	$('#btn5prod').click(function () {
		var corpo = "";
		var num = 0;
		for (var x = 1; x < 6; x++) {
			num = Math.floor(Math.random() * (4 - 1) + 1);
			corpo += "<div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 prodResultado fonte'>"
			corpo += "<div id='item"+num+"' class='caixa text-center'> "
			corpo += "<img src='img/" + num + ".gif' class='img-responsive' alt='produto'>"
			corpo += "<br>"
			if (num ==1) corpo += "<span class='text-center saibaMaisBtn3'>Sapato Magenta Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id" + num + "'>Saiba Mais</a></span>"
			if (num ==2) corpo += "<span class='text-center saibaMaisBtn3'>Sapato Azul Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id" + num + "'>Saiba Mais</a></span>"
			if (num ==3) corpo += "<span class='text-center saibaMaisBtn3'>Sapato Branco Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id" + num + "'>Saiba Mais</a></span>"
			corpo += "</div>"
			corpo += "</div>"
		}
		$('#resultado').html(corpo);
		funcaoTraducao($('#traduzir').attr('lingua'))
	})
	$('#btn10prod').click(function () {
		var corpo = "";
		var num = 0;
		for (var x = 1; x < 11; x++) {
			num = Math.floor(Math.random() * (4 - 1) + 1);
			corpo += "<div class='col-xs-12 col-sm-12 col-md-4 col-lg-4 prodResultado fonte'>"
			corpo += "<div id='item"+num+"' class='caixa text-center'> "
			corpo += "<img src='img/" + num + ".gif' class='img-responsive' alt='produto'>"
			corpo += "<br>"
			if (num ==1) corpo += "<span class='text-center saibaMaisBtn1'>Sapato Magenta Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id" + num + "'>Saiba Mais</a></span>"
			if (num ==2) corpo += "<span class='text-center saibaMaisBtn2'>Sapato Ciano Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id" + num + "'>Saiba Mais</a></span>"
			if (num ==3) corpo += "<span class='text-center saibaMaisBtn3'>Sapato Branco Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id" + num + "'>Saiba Mais</a></span>"
			corpo += "</div>"
			corpo += "</div>"
		}
		$('#resultado').html(corpo);
		funcaoTraducao($('#traduzir').attr('lingua'))
	})
})