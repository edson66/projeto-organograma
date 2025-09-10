document.addEventListener("DOMContentLoaded", () => {
    const opcoes = document.querySelectorAll('.menu__opcoes p');
    const track = document.querySelector('.carrossel__imagens');
    const menuContainer = document.querySelector('.menu__opcoes');


    const opcoes_array = Array.from(opcoes);

    function mover_background(){
        const opcaoAtiva = document.querySelector('.menu__opcoes p.active');
        if(!opcaoAtiva)return

        const targetWidth = opcaoAtiva.offsetWidth;
        const targetLeft = opcaoAtiva.offsetLeft;

        menuContainer.style.setProperty('--highlight-width', `${targetWidth}px`);
        menuContainer.style.setProperty('--highlight-left', `${targetLeft}px`);

        const index_atual = opcoes_array.indexOf(opcaoAtiva);
        if (index_atual > -1) {
            const movePercentage = -index_atual * 100;
            track.style.transform = `translateX(${movePercentage}%)`;
        }
    }

    function debounce(func, delay = 250) {
        let tempo;
        return (...args) => {
            clearTimeout(tempo);
            tempo = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    opcoes_array.forEach((option,index) => {
        option.addEventListener("click", () => {

            opcoes_array.forEach(opc => opc.classList.remove("active"));
            option.classList.add("active");

            mover_background();
        })
    })

    mover_background();
    const versao_debounce = debounce(mover_background);

    window.addEventListener('resize', versao_debounce);

})