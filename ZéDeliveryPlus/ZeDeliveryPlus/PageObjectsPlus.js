const el = require ('./ElementsPlus').ELEMENTOS

class PageObjectsNew{
 Acessar(){
    cy.visit('https://www.ze.delivery/')
    cy.viewport(1200,800)
    cy.get(el.AceitarCookies).click()
 }

 RealizarLogin(){
    cy.get(el.BotaoEntrar).click()
    cy.get(el.CampoEmail).type()//<----- Adicionar Email antes de executar
    cy.get(el.CampoSenha).type()//<----- Adicionar Senha antes de executar
    cy.get(el.BotaoLogar).click()
    cy.wait(3000)
 }

 ConfirmarMaiorIdade(){
    cy.get(el.PopUpMaiorIdade).should('contain', 'Você tem 18 anos ou mais?')
    cy.get(el.OpcaoSimMaiorDe18).click()
 }

 AdicionarCerveja(){
   cy.get(el.CategoriaCervejas).click()
   cy.wait(2000)
   cy.get(el.CervejaBrahma).click()
   cy.get(el.PaginaAtual).should('contain', 'Brahma')
   cy.get(el.BrahmaDuploMalte).click()
   cy.get(el.TituloDoProduto).should('contain', 'Brahma Duplo Malte 350ml')
   cy.get(el.AdicionarProduto).click()
   cy.get(el.FecharTelaSacola).click()
 }

 AdicionarDestilado(){
   cy.get(el.CategoriaDestilado).click()
   cy.get(el.DestiladoBeats).click()
   cy.get(el.SkolBeats).click()
   cy.get(el.TituloDoProduto).should('contain', 'Beats GT 269ml - Pack de 8 unidades')
   cy.get(el.AdicionarProduto).click()
   cy.get(el.FecharTelaSacola).click()

 }

 AdicionarItemLojinha(){
   cy.get(el.CategoriaLojinha).click()
   cy.get(el.GeloLojinha).click()
   cy.get(el.Gelo5kg).click()
   cy.get(el.TituloDoProduto).should('contain', 'Saco de Gelo em Cubos - 5kg')
   cy.get(el.AdicionarProduto).click()
   cy.get(el.FecharTelaSacola).click()

 }

 AdicionarComidinha(){
   cy.get(el.CategoriaComidinha).click()
   cy.get(el.PetiscosComidinha).click()
   cy.get(el.Ovinhos).click()
   cy.get(el.TituloDoProduto).should('contain', 'Ovinhos de Amendoim Elma Chips 65g')
   cy.get(el.AdicionarProduto).click()

 }

 ContinuarCompra(){
   cy.get(el.BotaoContinuar).click()
 }

 ValidarItensDaCompra(){
   cy.get(el.ItensDeCompra)
   .should('contain', 'Brahma Duplo Malte 350ml')
   .should('contain', 'Beats GT 269ml - Pack de 8 unidades')
   .should('contain', 'Saco de Gelo em Cubos - 5kg')
   .should('contain', 'Ovinhos de Amendoim Elma Chips 65g')
 }

 
 AdicionarCupom(){
   cy.get(el.AcessarTelaCupom).click()
   cy.get(el.AdicionarCupom).click()
   cy.get(el.DetalhesDOCupom).should('contain', 'DOUCABOR9')
   cy.get(el.CheckoutValores).should('contain', 'Desconto do cupom')
}

ClicarNoBotaoSelecionarFormaDePagamento(){
   cy.get(el.BotaoSelecionar).click()
}
ValidarFormasDePagamento(){
   cy.get(el.TelaDeOpçãoDePagamento)
   .should('contain', 'Cartão de Débito ou Crédito')
   .should('contain', 'Dinheiro')
}
}
export default new PageObjectsNew();