function comprar() {
   let tipo = document.querySelector('#tipo-ingresso');
   let qtd = parseInt(document.querySelector('#qtd').value);

   if (tipo.value == 'pista') {
      comprarPista(qtd);
   } else if (tipo.value == 'superior') {
      comprarSuperior(qtd);
   } else {
      comprarInferior(qtd);
   }
}

function comprarPista(qtd) {
   let qtdPista = parseInt(document.querySelector('#qtd-pista').textContent);
   if (qtd > qtdPista) {
      alert('Quantidade indisponível para tipo pista');
   } else {
      qtdPista = qtdPista - qtd;
      document.querySelector('#qtd-pista').textContent = qtdPista;
      alert('Compra realizada com sucesso!');
   }
}
