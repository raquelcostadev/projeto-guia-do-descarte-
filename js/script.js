 function buscarMaterial() { 
     var digitado = document.getElementById('campo-busca').value;
        
        
        var listaDeCards = document.querySelectorAll('.card');

        for (var i = 0; i < listaDeCards.length; i++) {
            
            
            if (digitado == listaDeCards[i].id) {
                
                listaDeCards[i].classList.add('destaque');
                listaDeCards[i].classList.remove('escondido');
            } 
            else if (digitado == "") {
                
                listaDeCards[i].classList.remove('destaque');
                listaDeCards[i].classList.remove('escondido');
            } 
            else {
                listaDeCards[i].classList.add('escondido');
                listaDeCards[i].classList.remove('destaque');
            }
        }
    }
    if (digitado != "") {
        // 5000 milissegundos = 5 segundos. Você pode mudar esse número se quiser mais ou menos tempo!
        setTimeout(function() {
            
            // Esse loop passa por todos os cards e esconde eles de novo
            for (var i = 0; i < listaDeCards.length; i++) {
                listaDeCards[i].classList.add('escondido');
                listaDeCards[i].classList.remove('destaque');
            }

            // Opcional: Limpa o texto que o usuário digitou no campo de busca
            document.getElementById('campo-busca').value = "";

        }, 5000); 
    }

