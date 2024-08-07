const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(buttonn => {
    buttonn.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
        
    })
})