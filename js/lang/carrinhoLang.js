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
	magenta: 'Sapato de couro sintetico, de cor Magenta, interior revestido de pelica macia para o seu maximo conforto.',
	ciano: 'Sapato de couro sintetico, de cor azul clara, interior revestido de pelica macia para o seu maximo conforto.',
	branca: 'Sapato de couro sintetico, de cor Branca, interior revestido de pelica macia para o seu maximo conforto.',
	carrinhoVazio: 'Não há itens no carrinho!',
	exibir: 'Exibir Item',
	excluir: 'Excluir Item',

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
	magenta: 'Synthetic leather shoe, magenta in color, soft plush interior for maximum comfort.',
	ciano: 'Synthetic leather shoe, light blue in color, soft plush interior for maximum comfort.',
	branca: 'Synthetic leather shoe, white in color, soft plush interior for maximum comfort.',
	carrinhoVazio: 'There are no items in the cart!',
	exibir: 'Show Item',
	excluir: 'Delete Item',

}

var lang = true;
$(() => {
	$('#traduzir').attr('lingua', lang)
	$(document).ready(function () {
		traduzir(port);
	})
	$('#traduzir').click(function () {
		funcaoTraducao(lang);
		lang = !lang;
	})
})

function funcaoTraducao(l) {
	if (l) traduzir(eng);
	else traduzir(port);
	$('#traduzir').attr('lingua', lang);
}

function traduzir(lang) {
	$('#busca').attr('placeholder', lang.busca);
	$('#titulo').html(lang.titulo);
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
	if ($('#itemCarrinho1').length) $('.magenta').html(lang.magenta);
	if ($('#itemCarrinho2').length) $('.ciano').html(lang.ciano);
	if ($('#itemCarrinho3').length) $('.branca').html(lang.branca);
	if ($('#carrinhoVazio').length) $('#carrinhoVazio').html(lang.carrinhoVazio);
	if ($('.exibir').length) $('.exibir').html(lang.exibir);
	if ($('.excluir').length) $('.excluir').html(lang.excluir);

}

function traduzirModal(lang) {
	$('.magenta').html(lang.magenta);
	$('.ciano').html(lang.ciano);
	$('.branca').html(lang.branca);
	$('#carrinhoVazio').html(lang.carrinhoVazio);
	$('.exibir').html(lang.exibir);
	$('.excluir').html(lang.excluir);

}