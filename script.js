//Mensagem de Cadastro
function msg() {
  alert("Cadastro feito com sucesso!");
};





//Zoom das imgaens do Produto (precisa ter 1 id por imagem)
$(document).ready(function(){
  $('#ex1').zoom({ magnify: 1, duration: 100});
  $('#ex2').zoom({ magnify: 1, duration: 100});
  $('#ex3').zoom({ magnify: 1, duration: 100});
  $('#ex4').zoom({ magnify: 1, duration: 100});
});



//Carrosséis da página de produto
//Primeiro: Previews das imagens, rolagem vertical e responsivo
$(document).on('ready', function() {
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }
    },]
  });
//Segundo: Imagem grande, sem rolagem e com o zoom aplicado depois
  $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav',
   draggable: false,
   swipe: false,
 });
});
