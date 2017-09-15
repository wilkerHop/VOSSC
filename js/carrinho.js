$(() => {
  $('#btn5prod').click(function () {
    var corpo = "";
    var num = 0;
      for(var x=1; x<6; x++){
      num = Math.floor(Math.random() * (4 - 1) + 1);

    corpo += 	"<div class='prodCarrinho'>"
    corpo += 	" <div id='imgCarrinho' class='p"+num+"'>"
  	corpo += 	" </div>"
  	corpo += 	"	<div id='descCarrinho'>"
    if(num == 1){
      corpo += 	"<p class='paragrafo'>Sapato de couro sintetico, de cor Magenta, interior revestido de pelica macia para o seu maximo conforto.</p>"
    }else if(num == 2){
      corpo += 	"<p>Sapato de couro sintetico, de cor azul clara, interior revestido de pelica macia para o seu maximo conforto.</p>"
    }else if(num == 3){
      corpo += 	"<p>Sapato de couro sintetico, de cor Branca, interior revestido de pelica macia para o seu maximo conforto.</p>"
    }
  	corpo += 	"	</div>"
  	corpo += 	"	<div id='btnCarrinho'>"
  	corpo += 	"	 <button type='button' id='btnPedido' onclick='desc("+num+")'>Exibir Produto</button>"
    corpo += 	"	 <button type='button' id='btnRemover'>Remover Produto</button>"
  	corpo += 	" </div>"
  	corpo += 	"</div>"
    }
    corpo += 	"	<div id='finalizarCompra'>"
    corpo += 	"	 <button type='button' id='btnFinalizar' >Finalizar Compra</button>"
    corpo += 	" </div>"
      $('#carrinho').html(corpo);
  })
  $('#btn10prod').click(function () {
    var corpo = "";
    var num = 0;
      for(var x=1; x<11; x++){
      num = Math.floor(Math.random() * (4 - 1) + 1);

      corpo += 	"<div class='prodCarrinho'>"
      corpo += 	" <div id='imgCarrinho' class='p"+num+"'>"
    	corpo += 	" </div>"
    	corpo += 	"	<div id='descCarrinho'>"
      if(num == 1){
        corpo += 	"<p class='paragrafo'>Sapato de couro sintetico, de cor Magenta, interior revestido de pelica macia para o seu maximo conforto.</p>"
      }else if(num == 2){
        corpo += 	"<p>Sapato de couro sintetico, de cor azul clara, interior revestido de pelica macia para o seu maximo conforto.</p>"
      }else if(num == 3){
        corpo += 	"<p>Sapato de couro sintetico, de cor Branca, interior revestido de pelica macia para o seu maximo conforto.</p>"
      }
    	corpo += 	"	</div>"
    	corpo += 	"	<div id='btnCarrinho'>"
    	corpo += 	"	 <button type='button' id='btnPedido' onclick='desc("+num+")'>Exibir Produto</button>"
      corpo += 	"	 <button type='button' id='btnRemover'>Remover Produto</button>"
    	corpo += 	" </div>"
    	corpo += 	"</div>"
      }
      corpo += 	"	<div id='finalizarCompra'>"
    	corpo += 	"	 <button type='button' id='btnFinalizar' >Finalizar Compra</button>"
    	corpo += 	" </div>"
        $('#carrinho').html(corpo);
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
	if(qual == 1){
		$('#tudo').css('display', 'block');
		$('#descProduto').css('display', 'block');
		$('#fotoProduto').css('background-image', "url('./img/produtoMagenta.png')");
		$('#p1').html("Sapato de couro sintetico, de cor Magenta, interior revestido de pelica macia para o seu maximo conforto.");
		$('#p2').html("Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.");
		$('#p3').html("Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.");
		$('#p4').html("Peso: 350 gramas por peça.");
		$('#p5').html("Conteúdo do pacote: 1 par de sapatos luxo Magenta.");
	}else if(qual == 2){
		$('#tudo').css('display', 'block');
		$('#descProduto').css('display', 'block');
		$('#fotoProduto').css('background-image', "url('./img/produtoAzul.png')");
		$('#p1').html("Sapato de couro sintetico, de cor azul clara, interior revestido de pelica macia para o seu maximo conforto.");
		$('#p2').html("Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.");
		$('#p3').html("Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.");
		$('#p4').html("Peso: 200 gramas por peça.");
		$('#p5').html("Conteúdo do pacote: 1 par de sapatos luxo azul.");
	}else if(qual == 3){
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
