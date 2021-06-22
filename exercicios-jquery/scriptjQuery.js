//Exercicio 1

//A. Faça uma instrução jQuery que selecione todos elementos com a classe module.
var elementos_classe_module = $(".module"); //$('div.module').css('background', 'yellow');

//B. Faça uma instrução jQuery que selecione o terceiro elemento da lista não ordenada myList.
var terceiro_elementos = $("#myList li").eq(2); //$('#myList li').eq(2).css('background', 'yellow'); 

//C. Faça uma instrução jQuery que selecione o label para o input de busca usando um seletor de atributo.
var seletor_atributo = $("label[for='q']");//$('label[for=q]').css('background', 'yellow'); 

//D. Escreva uma instrução jQuery que encontre quantos elementos na página tem um atributo alt.
//Resposta: 3 elementos(fruit, vegetable e Bread)
var elementos_alt = $("[alt]").length;

//E. Faça uma instrução jQuery que selecione todas as linhas pares da tabela com exceção do cabeçalho.
var linhas_pares = $("#fruits tbody tr").even();

//F. Faça uma instrução jQuery que encontre quantos elementos h2 possuem as letras "B", "e" NO MESMO texto.
var count = 0;
$("h2").each(function(index){
    var texto = $(this).text();

    if(texto.indexof('e')> -1 || texto.indexof('B')> -1){
        count = count++;
    }
    
});

//G. Faça uma instrução jQuery que selecione todos os li dentro de #myList que não estão vermelhos. Proibido 
//utilizar os pseudo-seletores :eq, :gt ou :lt.
var elementos_pretos = $("#myList li:not(.current)");

//H. Faça uma instrução jQuery que selecione todos os elementos que são os últimos filhos no HTML do tipo 
//img OU que são os últimos filhos no HTML do tipo h3
var ultimos_img = $("img:last-child");
var ultimos_h3 = $("h3:last-child");


//I. Faça uma instrução jQuery que conte o número de caractéres somados dos textos de todos li que estão 
//APÓS o li com fonte vermelha, dentro de #myList. Ex:
var count = 0;

$("#myList li.current").nextAll().each(function(index){
    count += $(this).text().length;
});
 alert(count)

//-----------------------------------------------------------------------------------
//Exercico 2

//A. Faça uma instrução JavaScript + jQuery que adicione cinco novos itens de lista
//no fim da lista não ordenada #myList. Os itens devem seguir o padrão de texto
//dos itens já existentes na lista e devem continuar a contagem (que parou em 7).
var myList = $("#my List");

for(var i= 9; i< 13; i++){
    myList.appedn("<li>List item " + i + "</li>")
}

//B. Faça uma instrução jQuery que remova os itens com texto par da lista #myList.
var myList = $("#my List li").even();
myList.remove();

//C. Faça uma instrução jQuery que:
//. Adicione uma nova div.module à página depois da última (última div module antes da execução).
var div =  $(".module").last();
div.append("<div class='module' id='nova'>Texto</div>");

//. Coloque uma cópia da primeira imagem existente dentro dela.
var div_nova = $("#nova");
var priemeira_image = $("img:first");

div_nova.append(primeira_imagem.clone());


//-----------------------------------------------------------------------------------
//Exercico 3

//O exercicio 3, se encontra no arquivo ex003.js