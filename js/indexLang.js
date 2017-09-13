var port = {
	cadastrar: 'Cadastrar',
	entrar: 'Entrar',
	emailEntrar: 'Endereço de Email',
	emailEntrarPlace: 'Seu email',
	senhaEntrar: 'Senha',
	senhaEntrarPlace: 'Sua senha',
	esqueceu: 'Esqueceu sua senha ?',
	busca: 'Busca',
	titulo: 'Sis<img src="img/t.png" alt="t">ema de Vendas',
	saibaMaisBtn1: "Sapato Luxo Azul: <br><a class='btn btn-primary' data-toggle='modal' href='#modal-id'>Saiba Mais</a>",
	saibaMaisBtn2: "Sapato Luxo Magenta: <br><a class='btn btn-primary' data-toggle='modal' href='#modal-id2'>Saiba Mais</a>",
	saibaMaisBtn3: "Sapato Luxo Branco: <br><a class='btn btn-primary' data-toggle='modal' href='#modal-id3'>Saiba Mais</a>",
	grupo: 'Grupo DOORS',
	tituloModal1: 'Produto Luxo Azul',
	tituloModal2: 'Produto Luxo Magenta',
	tituloModal3: 'Produto Luxo Branco',
	modalContent1: "<img src='img/produtoAzul.gif' class='img-responsive' alt='Image'><p>Sapato de couro sintetico, de cor azul clara, interior revestido de pelica macia para o seu maximo conforto.</p><p>Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.</p><p>Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.</p><p>Peso: 200 gramas por peça.</p><p>Conteúdo do pacote: 1 par de sapatos luxo Azul.</p>",
	modalContent2: "<img src='img/produtoMagenta.gif' class='img-responsive' alt='Image'> <p>Sapato de couro sintetico, de cor Magenta, interior revestido de pelica macia para o seu maximo conforto.</p><p>Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.</p><p>Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.</p><p>Peso: 350 gramas por peça.</p><p>Conteúdo do pacote: 1 par de sapatos luxo Magenta.</p>",
	modalContent3: "<img src='img/produtoBranco.gif' class='img-responsive' alt='Image'><p>Sapato de couro sintetico, de cor Branca, interior revestido de pelica macia para o seu maximo conforto.</p><p>Projetado para se encaixar perfeitamente ao seus pés de forma que você fique sempre confortavel e pronta para seu dia-a-dia.</p><p>Solado em madeira de reflorestamento, leve e envernizado para maior brilho e conservação do material.</p><p>Peso: 150 gramas por peça.</p><p>Conteúdo do pacote: 1 par de sapatos luxo Branco.</p>",
	nomeLbl: 'Nome:',
	nome: 'Coloque o seu nome aqui',
	usernameLbl: 'Nome de usuário:',
	username: 'Escolha seu nome de usuário',
	senhaLbl: 'Senha:',
	senha: 'Defina sua senha',
	ConfsenhaLbl: 'Confirme sua senha:',
	Confsenha: 'Confirme sua senha',
	tituloCadastro: 'Cadastro Novo Usuario:',
	voltar: 'Voltar',
	comprar: 'Comprar',
}

var eng = {
	cadastrar: 'Sign in',
	entrar: 'Login',
	emailEntrar: 'Email Address',
	emailEntrarPlace: 'Your email',
	senhaEntrar: 'Password',
	senhaEntrarPlace: 'Your password',
	esqueceu: 'Forgot your password ?',
	busca: 'Search',
	titulo: 'Sales sys<img src="img/t.png" alt="t">em',
	saibaMaisBtn1: "Know our brand Luxury Light Blue:  <br><a class='btn btn-primary' data-toggle='modal' href='#modal-id'>Know More</a>",
	saibaMaisBtn2: "Know our brand Luxury Magenta: <br><a class='btn btn-primary' data-toggle='modal' href='#modal-id2'>Know More</a>",
	saibaMaisBtn3: "Know our brand Luxury White: <br><a class='btn btn-primary' data-toggle='modal' href='#modal-id3'>Know More</a>",
	grupo: 'Group DOORS',
	tituloModal1: 'Luxury Light Blue Product',
	tituloModal2: 'Luxury Magenta Product',
	tituloModal3: 'Luxury White Product',
	modalContent1: "<img src='img/produtoAzul.gif' class='img-responsive' alt='Image'><p>Synthetic leather shoe, magenta in color, soft plush interior for maximum comfort.</p><p>Designed to fit perfectly to your feet so that you are always comfortable and ready for your day-to-day life.</p><p>Wood flooring for reforestation, light and varnished for greater gloss and conservation of material.</p><p>Weight: 250 grams per piece.</p><p>Package Contents: 1 pair of Light Blue luxury shoes.</p>",
	modalContent2: "<img src='img/produtoMagenta.gif' class='img-responsive' alt='Image'> <p>Synthetic leather shoe, magenta in color, soft plush interior for maximum comfort.</p><p>Designed to fit perfectly to your feet so that you are always comfortable and ready for your day-to-day life.</p><p>Wood flooring for reforestation, light and varnished for greater gloss and conservation of material.</p><p>Weight: 350 grams per piece.</p><p>Package Contents: 1 pair of Magenta luxury shoes.</p>",
	modalContent3: "<img src='img/produtoBranco.gif' class='img-responsive' alt='Image'><p>Synthetic leather shoe, magenta in color, soft plush interior for maximum comfort.</p><p>Designed to fit perfectly to your feet so that you are always comfortable and ready for your day-to-day life.</p><p>Wood flooring for reforestation, light and varnished for greater gloss and conservation of material.</p><p>Weight: 150 grams per piece.</p><p>Package Contents: 1 pair of White luxury shoes.</p>",
	nomeLbl: 'Name:',
	nome: 'Place your name here',
	usernameLbl: 'User name:',
	username: 'Choose your user name',
	senhaLbl: 'Password:',
	senha: 'Define your password',
	ConfsenhaLbl: 'Confirm your password:',
	Confsenha: 'Confirm your password',
	tituloCadastro: 'Sign in a new user:',
	voltar: 'Back',
	comprar: 'Buy it',
}

lang = true;
$(() => {
	$(document).ready(function () {
		traduzir(port);
	})
	$('#traduzir').click(function () {
		if (lang) traduzir(eng);
		else traduzir(port);
		$('#textoProduto').for = lang = !lang;
	})
	$('#formCadastroClose').click(function () {
		$('#nome').val("")
		$('#username').val("")
		$('#senha').val("")
		$('#Confsenha').val("")
	})
})

function traduzir(lang) {
	$('#cadastrar').html(lang.cadastrar);
	$('#entrar').html(lang.entrar);
	$('#emailEntrar').html(lang.emailEntrar);
	$('#emailEntrarPlace').attr('placeholder', lang.emailEntrarPlace);
	$('#senhaEntrarPlace').attr('placeholder', lang.senhaEntrarPlace);
	$('#senhaEntrar').html(lang.senhaEntrar);
	$('#esqueceu').html(lang.esqueceu);
	$('#btnEntrar').html(lang.entrar);
	$('#busca').attr('placeholder', lang.busca);
	$('#titulo').html(lang.titulo);
	$('#saibaMaisBtn1').html(lang.saibaMaisBtn1);
	$('#saibaMaisBtn2').html(lang.saibaMaisBtn2);
	$('#saibaMaisBtn3').html(lang.saibaMaisBtn3);
	$('#tituloModal1').html(lang.tituloModal1);
	$('#tituloModal2').html(lang.tituloModal2);
	$('#tituloModal3').html(lang.tituloModal3);
	$('#modalContent1').html(lang.modalContent1);
	$('#modalContent2').html(lang.modalContent2);
	$('#modalContent3').html(lang.modalContent3);
	$('#p0').html(lang.grupo);
	$('.form-group:first-child label').html(lang.nomeLbl)
	$('.form-group:nth-child(2) label').html(lang.usernameLbl)
	$('.form-group:nth-child(3) label').html(lang.senhaLbl)
	$('.form-group:nth-child(4) label').html(lang.ConfsenhaLbl)
	$('#nome').attr('placeholder', lang.nome)
	$('#username').attr('placeholder', lang.username)
	$('#senha').attr('placeholder', lang.senha)
	$('#Confsenha').attr('placeholder', lang.Confsenha)
	$('#cadastrar').html(lang.cadastrar);
	$('#tituloCadastro').html(lang.tituloCadastro);
	$('#btnCadastrar').html(lang.cadastrar);
	$('#p0').html(lang.grupo);
	$('.comprar').html(lang.comprar);
	$('.voltar').html(lang.voltar);	
}
