var port = {
	busca: 'Busca',
	titulo: 'Sis<img src="img/t.png" alt="t">ema de Vendas',
	grupo: 'Grupo DOORS',
	voltar: 'Voltar',
	modalContent1: "<img src='img/produtoAzul.gif' class='img-responsive' alt='Image'><p>Sapato de couro sintetico, de cor azul clara, interior revestido de pelica macia para o seu maximo conforto.</p><p>Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.</p><p>Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.</p><p>Peso: 200 gramas por peça.</p><p>Conteúdo do pacote: 1 par de sapatos luxo Azul.</p>",
	modalContent2: "<img src='img/produtoMagenta.gif' class='img-responsive' alt='Image'> <p>Sapato de couro sintetico, de cor Magenta, interior revestido de pelica macia para o seu maximo conforto.</p><p>Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.</p><p>Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.</p><p>Peso: 350 gramas por peça.</p><p>Conteúdo do pacote: 1 par de sapatos luxo Magenta.</p>",
	modalContent3: "<img src='img/produtoBranco.gif' class='img-responsive' alt='Image'><p>Sapato de couro sintetico, de cor Branca, interior revestido de pelica macia para o seu maximo conforto.</p><p>Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.</p><p>Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.</p><p>Peso: 150 gramas por peça.</p><p>Conteúdo do pacote: 1 par de sapatos luxo Branco.</p>",
	entrar: "Olá <span class='caret'>",
	pedidos: "Meus Pedidos",
	endereco: "Endereço",
	senha: "Trocar Senha",
	pagamentos: "Pagamentos",
	lista: "Lista de Desejos",
	configuracoes: "Configurações",
	sair: "Sair",
	magenta: "Sapato Magenta Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id1'>Saiba Mais</a>",
	ciano: "Sapato Ciano Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id1'>Saiba Mais</a>",
	branca: "Sapato Branco Luxo: <br><a class='btn btn-primary' data-toggle='modal' href='#id1'>Saiba Mais</a>",
	buscaVazia: 'Não há itens na busca!',
	cadastrar: 'Cadastrar',
	gerar: 'gerar',
	magentaHead: 'Produto Luxo Magenta',
	cianoHead: 'Produto Luxo Ciano',
	brancoHead: 'Produto Luxo Branco',

}
var eng = {
	busca: 'Search',
	titulo: 'Sales sys<img src="img/t.png" alt="t">em',
	grupo: 'Group DOORS',
	voltar: 'Back',
	modalContent1: "<img src='img/produtoAzul.gif' class='img-responsive' alt='Image'><p>Synthetic leather shoe, light blue in color, soft plush interior for maximum comfort.</p><p>Designed to fit perfectly to your feet so that you are always comfortable and ready for your day-to-day life.</p><p>Wood flooring for reforestation, light and varnished for greater gloss and conservation of material.</p><p>Weight: 250 grams per piece.</p><p>Package Contents: 1 pair of Light Blue luxury shoes.</p>",
	modalContent2: "<img src='img/produtoMagenta.gif' class='img-responsive' alt='Image'> <p>Synthetic leather shoe, magenta in color, soft plush interior for maximum comfort.</p><p>Designed to fit perfectly to your feet so that you are always comfortable and ready for your day-to-day life.</p><p>Wood flooring for reforestation, light and varnished for greater gloss and conservation of material.</p><p>Weight: 350 grams per piece.</p><p>Package Contents: 1 pair of Magenta luxury shoes.</p>",
	modalContent3: "<img src='img/produtoBranco.gif' class='img-responsive' alt='Image'><p>Synthetic leather shoe, white in color, soft plush interior for maximum comfort.</p><p>Designed to fit perfectly to your feet so that you are always comfortable and ready for your day-to-day life.</p><p>Wood flooring for reforestation, light and varnished for greater gloss and conservation of material.</p><p>Weight: 150 grams per piece.</p><p>Package Contents: 1 pair of White luxury shoes.</p>",
	entrar: "Hi <span class='caret'>",
	pedidos: "My Orders",
	endereco: "Address",
	senha: "Change Passwords",
	pagamentos: "Payments",
	lista: "Ordes",
	configuracoes: "Settings",
	sair: "Exit",
	buscaVazia: 'There are no items to search for',
	cadastrar: 'Sign In',
	gerar: 'generate',
	magentaHead: 'Luxury Magenta Product',
	cianoHead: 'Luxury Light Blue Product',
	brancoHead: 'Luxury White Product',
	magenta: "Magenta Luxury Shoe: <br><a class='btn btn-primary' data-toggle='modal' href='#id1'>Know More</a>",
	ciano: "Cyan Luxury Shoe: <br><a class='btn btn-primary' data-toggle='modal' href='#id1'>Know More</a>",
	branca: "White Luxury Shoe: <br><a class='btn btn-primary' data-toggle='modal' href='#id1'>Know More</a>",
	

}

var lang = true;
$(() => {
	$('#traduzir').attr('lingua', lang)
	$(document).ready(function () {
		traduzir(port);
	})
	$('#traduzir').click(function () {
		lang = !lang;
		funcaoTraducao(lang);
	})
})

function funcaoTraducao(lingua) {
	if (lingua == 'true' || lang) {
		traduzir(port);
	} else {
		traduzir(eng);
	}
	$('#traduzir').attr('lingua', lang);
}

function traduzir(lang) {
	$('#busca').attr('placeholder', lang.busca);
	$('#titulo').html(lang.titulo);
	$('#cadastrar').html(lang.cadastrar);
	$('.voltar').html(lang.voltar);
	$('#modalContent1').html(lang.modalContent1);
	$('#modalContent2').html(lang.modalContent2);
	$('#modalContent3').html(lang.modalContent3);
	$('#entrar').html(lang.entrar);
	$('#pedidos').html(lang.pedidos);
	$('#endereco').html(lang.endereco);
	$('#senha').html(lang.senha);
	$('#pagamentos').html(lang.pagamentos);
	$('#lista').html(lang.lista);
	$('#configuracoes').html(lang.configuracoes);
	$('#sair').html(lang.sair);
	if ($('.saibaMaisBtn1').length) $('.saibaMaisBtn1').html(lang.magenta);
	if ($('.saibaMaisBtn2').length) $('.saibaMaisBtn2').html(lang.ciano);
	if ($('.saibaMaisBtn3').length) $('.saibaMaisBtn3').html(lang.branca);
	if ($('#buscaVazia').length) $('#buscaVazia').html(lang.buscaVazia);
	if ($('.exibir').length) $('.exibir').html(lang.exibir);
	if ($('.excluir').length) $('.excluir').html(lang.excluir);
	if ($('.gerar').length) $('.gerar').html(lang.gerar);
	$('#tituloModal1').html(lang.magentaHead);
	$('#tituloModal2').html(lang.cianoHead);
	$('#tituloModal3').html(lang.brancoHead);

}