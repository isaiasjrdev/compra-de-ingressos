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

function comprarSuperior(qtd) {
   let qtdSuperior = parseInt(document.querySelector('#qtd-superior').textContent);
   if (qtd > qtdSuperior) {
      alert('Quantidade indisponível para tipo superior');
   } else {
      qtdSuperior = qtdSuperior - qtd;
      document.querySelector('#qtd-superior').textContent = qtdSuperior;
      alert('Compra realizada com sucesso!');
   }
}

function comprarInferior(qtd) {
   let qtdInferior = parseInt(document.querySelector('#qtd-inferior').textContent);
   if (qtd > qtdInferior) {
      alert('Quantidade indisponível para tipo inferior');
   } else {
      qtdInferior = qtdInferior - qtd;
      document.querySelector('#qtd-inferior').textContent = qtdInferior;
      alert('Compra realizada com sucesso!');
   }
}