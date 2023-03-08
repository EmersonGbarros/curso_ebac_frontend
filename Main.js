const forms = document.getElementById('cadastro');

function comparar(x,y){
  let resultado = y > x;
  return resultado;
}

forms.addEventListener('submit',function(evento){
  evento.preventDefault();
  const idade = document.getElementById('idade-usuario');
  const idade_mae = document.getElementById('idade-mae');
  const validaçao = comparar(idade.value,idade_mae.value);
  const sucesso = document.querySelector('.ok')
  if(validaçao){
    sucesso.innerHTML = "Tá tudo Funcionando Maluco";
    sucesso.style.display = 'block';
  }else{
    sucesso.innerHTML = "Tem algo errado nessa Parada";
    sucesso.style.display = 'block';
  }
})