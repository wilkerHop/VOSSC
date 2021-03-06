$(() => {
	$('#btn5prod').click(function () {
		var corpo = "";
		var num = 0;
		for (var x = 1; x < 6; x++) {
			num = Math.floor(Math.random() * (4 - 1) + 1);

			corpo += "<div class='row'id='itemCarrinho" + num + "'>"
			corpo += "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 itemCarrinho'>"
			corpo += "<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3 imgProduto prodCarrinho'>"
			corpo += "<img src='img/" + num + ".gif' class='img-responsive' alt='produto no carrinho'>"
			corpo += "</div>"
			corpo += "<div class='col-xs-8 col-sm-8 col-md-7 col-lg-7 descProduto prodCarrinho'>"
			if (num == 1) {
				corpo += "<p class='paragrafo magenta'>Sapato de couro sintetico, de cor Magenta, interior revestido de pelica macia para o seu maximo conforto.</p>"
			} else if (num == 2) {
				corpo += "<p class='paragrafo ciano'>Sapato de couro sintetico, de cor azul clara, interior revestido de pelica macia para o seu maximo conforto.</p>"
			} else if (num == 3) {
				corpo += "<p class='paragrafo branca'>Sapato de couro sintetico, de cor Branca, interior revestido de pelica macia para o seu maximo conforto.</p>"
			}
			corpo += "</div>"

			corpo += "<div id='large'>"
			corpo += "<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2 btnProduto prodCarrinho'>"
			corpo += "<button type='button' class='btn btn-default btns exibir' data-toggle='modal' href='#id" + num + "'>Exibir Item</button>"
			corpo += "<input type='number' name='' id='quantCarrinho' class='form-control btns' value='' min='1' max='' step='' required='required' title=''>"
			corpo += "<button type='button' class='btn btn-danger btns excluir'>Excluir Item</button>"
			corpo += "</div>"
			corpo += "</div>"

			corpo += "<div id='mobile'>"
			corpo += "<div class='row btnProduto prodCarrinho'>"

			corpo += "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
			corpo += "<button type='button' class='btn btn-default btns exibir' data-toggle='modal' href='#id" + num + "'>Exibir Item</button>"
			corpo += "</div>"
			corpo += "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
			corpo += "<input type='number' name='' id='quantCarrinho' class='form-control btns' value='' min='1' max='' step='' required='required' title=''>"
			corpo += "</div>"
			corpo += "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
			corpo += "<button type='button' class='btn btn-danger btns excluir'>Excluir Item</button>"
			corpo += "</div>"
			corpo += "</div>"
			corpo += "</div>"

			corpo += "</div>"
			corpo += "</div>"
			corpo += "<br>"
		}
		corpo += "<button type='button' class='btn btn-default btns finalizar'>Finalizar Compra</button>"
		$('#carrinho').html(corpo);
		funcaoTraducao($('#traduzir').attr('lingua'))
	})

	$('#btn10prod').click(function () {
		var corpo = "";
		var num = 0;
		for (var x = 1; x < 11; x++) {
			num = Math.floor(Math.random() * (4 - 1) + 1);

			corpo += "<div class='row' id='itemCarrinho" + num + "'>"
			corpo += "<div class='col-xs-12 col-sm-12 col-md-12 col-lg-12 itemCarrinho'>"
			corpo += "<div class='col-xs-4 col-sm-4 col-md-3 col-lg-3 imgProduto prodCarrinho'>"
			corpo += "<img src='img/" + num + ".gif' class='img-responsive' alt='produto no carrinho'>"
			corpo += "</div>"
			corpo += "<div class='col-xs-8 col-sm-8 col-md-7 col-lg-7 descProduto prodCarrinho'>"
			if (num == 1) {
				corpo += "<p class='paragrafo magenta'>Sapato de couro sintetico, de cor Magenta, interior revestido de pelica macia para o seu maximo conforto.</p>"
			} else if (num == 2) {
				corpo += "<p class='paragrafo ciano'>Sapato de couro sintetico, de cor azul clara, interior revestido de pelica macia para o seu maximo conforto.</p>"
			} else if (num == 3) {
				corpo += "<p class='paragrafo branca'>Sapato de couro sintetico, de cor Branca, interior revestido de pelica macia para o seu maximo conforto.</p>"
			}
			corpo += "</div>"

			corpo += "<div id='large'>"
			corpo += "<div class='col-xs-2 col-sm-2 col-md-2 col-lg-2 btnProduto prodCarrinho'>"
			corpo += "<button type='button' class='btn btn-default btns exibir' data-toggle='modal' href='#id" + num + "'>Exibir Item</button>"
			corpo += "<input type='number' name='' id='quantCarrinho' class='form-control btns' value='' min='1' max='' step='' required='required' title=''>"
			corpo += "<button type='button' class='btn btn-danger btns excluir'>Excluir Item</button>"
			corpo += "</div>"
			corpo += "</div>"

			corpo += "<div id='mobile'>"
			corpo += "<div class='row btnProduto prodCarrinho'>"

			corpo += "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
			corpo += "<button type='button' class='btn btn-default btns'  data-toggle='modal' href='#id" + num + "'>Exibir Item</button>"
			corpo += "</div>"
			corpo += "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
			corpo += "<input type='number' name='' id='quantCarrinho' class='form-control btns' value='' min='1' max='' step='' required='required' title=''>"
			corpo += "</div>"
			corpo += "<div class='col-xs-4 col-sm-4 col-md-4 col-lg-4'>"
			corpo += "<button type='button' class='btn btn-danger btns'>Excluir Item</button>"
			corpo += "</div>"
			corpo += "</div>"
			corpo += "</div>"

			corpo += "</div>"
			corpo += "</div>"
			corpo += "<br>"
		}
		corpo += "<button type='button' class='btn btn-default btns finalizar'>Finalizar Compra</button>"
		$('#carrinho').html(corpo);
		funcaoTraducao($('#traduzir').attr('lingua'))
	})

	$('#botEntrar').click(function () {
		$('#tudo').css('display', 'block');
		$('#entrar').css('display', 'block');
		$('html,body').animate({
			scrollTop: 0
		}, 'fast');
		$('body').css('overflow-y', 'hidden');
	})
	$('#x').click(function () {
		$('#tudo').css('display', 'none');
		$('#entrar').css('display', 'none');
		$('#descProduto').css('display', 'none');
		$('body').css('overflow-y', 'auto');
	})
});

function desc(qual) {
	if (qual == 1) {
		$('#tudo').css('display', 'block');
		$('#descProduto').css('display', 'block');
		$('#fotoProduto').css('background-image', "url('./img/produtoMagenta.png')");
		$('#p1').html("Sapato de couro sintetico, de cor Magenta, interior revestido de pelica macia para o seu maximo conforto.");
		$('#p2').html("Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.");
		$('#p3').html("Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.");
		$('#p4').html("Peso: 350 gramas por peça.");
		$('#p5').html("Conteúdo do pacote: 1 par de sapatos luxo Magenta.");
	} else if (qual == 2) {
		$('#tudo').css('display', 'block');
		$('#descProduto').css('display', 'block');
		$('#fotoProduto').css('background-image', "url('./img/produtoAzul.png')");
		$('#p1').html("Sapato de couro sintetico, de cor azul clara, interior revestido de pelica macia para o seu maximo conforto.");
		$('#p2').html("Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.");
		$('#p3').html("Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.");
		$('#p4').html("Peso: 200 gramas por peça.");
		$('#p5').html("Conteúdo do pacote: 1 par de sapatos luxo azul.");
	} else if (qual == 3) {
		$('#tudo').css('display', 'block');
		$('#descProduto').css('display', 'block');
		$('#fotoProduto').css('background-image', "url('./img/produtoBranco.png')");
		$('#p1').html("Sapato de couro sintetico, de cor Branca, interior revestido de pelica macia para o seu maximo conforto.");
		$('#p2').html("Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.");
		$('#p3').html("Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.");
		$('#p4').html("Peso: 150 gramas por peça.");
		$('#p5').html("Conteúdo do pacote: 1 par de sapatos luxo Branco.");
	}
	$('html,body').animate({
		scrollTop: 0
	}, 'fast');
	$('body').css('overflow-y', 'hidden');

}