import PageObjectsNew from './PageObjectsPlus'

//Given = dado
Given(/^que eu acesse a aplicação do zé delivery$/, () => {
	PageObjectsNew.Acessar()
});

//And = E
And(/^realize login$/, () => {
	PageObjectsNew.RealizarLogin()
    PageObjectsNew.ConfirmarMaiorIdade()
});
//And = E
And(/^insira 4 produtos de categorias diferentes$/, () => {
    PageObjectsNew.AdicionarCerveja()
    PageObjectsNew.AdicionarDestilado()
    PageObjectsNew.AdicionarItemLojinha()
    PageObjectsNew.AdicionarComidinha()
    PageObjectsNew.ContinuarCompra()
    PageObjectsNew.ValidarItensDaCompra()
    PageObjectsNew.AdicionarCupom()
    
});
//When = Quando
When(/^eu acionar o botão "([^"]*)"$/, (args1) => {
	PageObjectsNew.ClicarNoBotaoSelecionarFormaDePagamento()
});
//Then = Entao
Then(/^a aplicação deve apresentar as opções disponíveis de pagamento.$/, () => {
	PageObjectsNew.ValidarFormasDePagamento()
});

