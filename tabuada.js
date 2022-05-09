const saida = document.getElementById("saida")
        function mostrarTabuada(){
            let n = parseInt(prompt("Digite o número para a tabuada:"));
            let msg = ""
            for(let i = 0; i <=10; i++) {
                msg +=`${n} x ${i} = ${(n * i)}<br>`
            } 
            saida.innerHTML = msg
      }
      mostrarTabuada()

      function limparTabuada(){
          saida.innerText = ""
      }


