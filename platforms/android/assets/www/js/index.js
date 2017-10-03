// Modelo
var festa = {
    tipo: function(valor){
        if(valor){
            this._tipo = valor
        }
        return this._tipo
    },
    detalhe: function(valor){
        if(valor){
            this._detalhe = valor
        }
        return this._detalhe
    },
    empresa: function(valor){
        if(valor){
            this._empresa = valor
        }
    }
}

var detalhe = {
    pessoas: function(valor){
        if(valor){
            this._pessoas = valor
        }
        return this._pessoas
    },
    duracao: function(valor){
        if(valor){
            this._duracao = valor
        }
        return this._duracao
    },
    data: function(valor){
        if(valor){
            this._data = valor
        }
        return this._data
    },
}

var empresa = {
    bebidas: function(valor){
        if(valor){
            this._bebidas = valor
        }
        return this._bebidas
    },
    comidas: function(valor){
        if(valor){
            this._comidas = valor
        }
        return this._comidas
    },
    descartaveis: function(valor){
        if(valor){
            this._descartaveis = valor
        }
        return this._descartaveis
    },
}

var carregarNome = function(){
    $(".app").load("tpl/inicio.tpl", function(){
        $(".app .home-content .btn").click(function(){
            carregarTipos()
        })
    })
}

var carregarTipos = function(){
    $(".app").load("tpl/selecionar.tpl", function(){
        $(".app .selecionar-content input[type=radio]").click(function(){
            console.info($(".app .selecionar-content input[type=radio]:checked").val())
        })
        $(".app .selecionar-content .btn").click(function(){
            carregarInfo()
        })
    })        
}

var carregarInfo = function(){
    $(".app").load("tpl/info.tpl", function(){
        $(".app .info-content .btn").click(function(){
            carregarEmp()
        })
    })
}

var carregarEmp = function(){
    $(".app").load("tpl/emp.tpl", function(){
        $(".app .emp-content .btn").click(function(){
            carregarCalc()
        })
    })
}

var carregarCalc = function(){
    $(".app").load("tpl/calc.tpl", function(){                                  
        $(".app .calc-content .btn", function(){
        })                                  
    })
}

// carregar a pagina com o arquivo
carregarNome()