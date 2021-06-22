//3.1) O elemento com id “toc” é uma tabela que indica o índice da página
//jquery01.htm. Faça com que quando a página esteja pronta, o elemento seja
//oculto.
$(document).ready(function () {
    $("#toc").hide();

    //3.2) Faça com que quando a página esteja pronta, o elemento “toc” seja oculto
    //e quando o botão com o valor “Show Index” for clicado, o índice seja
    //mostrado.
    $("#btContents").click(function () {
        $("#toc").show();
    });

    //3.3) Faça com que quando a página esteja pronta, o elemento “toc” seja oculto,
    //quando o botão com o valor “Show Index” for clicado, o índice seja mostrado
    //e quando o botão com o valor “Hide Index” for clicado, o índice seja ocultado
    //novamente.
    $("#btHideContents").click(function () {
        $("#toc").hide();
    });

    //3.4) Faça com que quando a página esteja pronta, o elemento “toc” seja oculto,
    //quando o botão com o valor “Show/Hide Index” for clicado, o índice seja
    //mostrado e ocultado a cada clique do botão.
    $("#btShowHideContents").click(function () {
        $("#toc").toggle();
    });

    //3.5) Ao carregar a página, faça com que todos os elementos marcados com a
    //classe “external” sejam marcados com uma borda vermelha.
    $(".external").css("border-syle", "solid");
    $(".external").css("border-color", "red");

    //3.6) Ao carregar a página, faça com que todos os elementos marcados com a
    //classe “header” sejam marcados com um fundo amarelo e apareçam
    //suavemente em 1500 milissegundos.
    $(".header").hide();
    $(".header").css("background-color", "yellow")
    $(".header").show(1500);


    //3.7) Após o carregamento da página, faça com que todos os elementos com a
    //classe “editsection” sejam ocultos suavemente em 1500 milissegundos.
    $(".editsection").hide(1500);

    //3.8) Após o carregamento da página, faça com que todos os elementos com a
    //classe “editsection” sejam ocultos suavemente em 1500 milissegundos e só
    //sejam exibidos novamente quando o botão com valor “Edit Mode” for clicado .
    $("#btEditMode").click(function () {
        $(".editsection").show();
    });

    //3.9) Faça com que quando a página esteja pronta, o elemento “toc” seja oculto,
    //quando o botão com o valor “Show/Hide Index” for clicado, o índice seja
    //mostrado e ocultado a cada clique do botão suavemente em 2000
    //milissegundos. Além disso, troque para cinza a cor de fundo de cada elemento
    //da classe tocnumber após o elemento aparecer
    $("#btShowHideContents").click(function () {
        $(".tocnumber").css("background-color", "gray");
    });

    //3.12) Faça com que ao lado de todos os inputs que forem descendentes de um
    //fieldset seja colocado um “*” ao lado direito do elemento quando a página
    //carregar.
    $("fieldset input").after("*");

    //3.13) Faça com que ao carregar a página, seja colocado um sinal gráfico
    //(“<span>>>>></span>”) em todos os links (elemento <a>) dentro de uma div
    //de classe “editsection”.
    $("div.editsection a").before("<span>>>>></span>");

    //3.14) Faça com que ao carregar a página, seja colocado um sinal gráfico
    //(“<span>>>>></span>”) em todos os links (elemento <a>) dentro de uma div
    //de classe “editsection”. Além disso, quando o usuário passar com o mouse
    //sobre o sinal gráfico, ele deve ser trocado para itálico.
    $("div.editsection sapn").hover(
      function(){
          $(this).css("font-style", "italic");
      },
      function(){
        $(this).css("font-style", "normal");
    });

    //3.15) Ao fim do carregamento da página, faça com que todos os links filhos
    //de parágrafos ao serem clicados exibam uma mensagem (alert), indicando o
    //valor do atributo title do link.
    $("p a").click(function(){
        alert($(this).attr(title));
    })

    //3.16) Faça com que o valor de todos os inputs com labels ao lado seja
    //preenchido com o valor do atributo title do próprio input.
    $("label").nextAll().each(function(input){
        $(this).val($(this).attr("title"));
    })
});