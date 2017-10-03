// carregar a pagina com o arquivo
$(".app").load("tpl/inicio.tpl", function(){

    $(".app .home-content .btn").click(function(){

        $(".app").load("tpl/selecionar.tpl", function(){

            // console.log("Entrou..")
            $(".app .selecionar-content input[type=radio]").click(function(){
                console.info($(".app .selecionar-content input[type=radio]:checked").val())
            })

            $(".app .selecionar-content .btn").click(function(){

            	$(".app").load("tpl/info.tpl", function(){

            		$(".app .info-content .btn").click(function(){

            			$(".app").load("tpl/emp.tpl", function(){

            				$(".app .emp-content .btn").click(function(){

		            			$(".app").load("tpl/calc.tpl", function(){
		            				
		            				$(".app .calc-content .btn", function(){
		            					console.log("Botao Pressionado!")
		            				})
		            				
		            			})

		            		})

            			})

            		})

            	})

            })

        })

    })

})
