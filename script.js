let certidoes = [];
function criarcertidao(){
  let nome = document.getElementById('nome').value;
  let ddn = document.getElementById('di').value+"/"+document.getElementById('me').value+"/"+document.getElementById('an').value;
  let sx = document.getElementById('se').value;
  certidoes.push({nome: nome,ddn: ddn,sx: sx,p: false});
  document.getElementById('nome').value = "";
  document.getElementById('di').value = "";
  document.getElementById('me').value = "";
  document.getElementById('an').value = "";
  document.getElementById('se').value = "Masculino";
  atualizarcertidoes();
  console.table(certidoes);
  salvar();
}
function atualizarcertidoes(){
  for (let i in certidoes){
    let certidao = certidoes[i];
    if (certidao.p){
      continue;
    }
  document.getElementById("certidoes").innerHTML += "<br> <div class='certidão'>Nome: "+certidao.nome+"<br>Data de nascimento: "+certidao.ddn+"<br>Sexo: "+certidao.sx+"</div>";
  certidao.p = true;
  }
}
