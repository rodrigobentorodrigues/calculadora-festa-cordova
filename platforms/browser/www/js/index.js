// carregar a pagina com o arquivo
$(".app").load("tpl/inicio.tpl", function(){

    $(".app .home-content .btn").click(function(){

        $(".app").load("tpl/nova.tpl", function(){

            console.log("Entrou..")
            $(".app .nova-content input[type=radio]").click(function(){
                console.info($(".app .nova-content input[type=radio]:checked").val())
            })

        })

    })

})
