(function(w,d,u){
'use strict';

var alias = 'jLite';

var core = function(selector){
    var elements = d.querySelectorAll(selector);
    return (elements.lenght > 1)?elements:elements[0];
};

core.create = function(element){
    return d.createElement(element);
};

core.remove = function(element){
    element.parentNode.removeChild(element);
}

w.$ = w[alias] = core;

})(window,document);

var canvas = $('#container');
canvas.style.height = '600px';
canvas.style.width = '600px';
canvas.style.position = 'relative';

var lakitu

var inicio = $('button')
inicio.addEventListener('click',iniciar)

function iniciar(e){
    $.remove(inicio);
    $.remove($('h1'));

    lakitu = $.create('img');
    lakitu.src = 'lakitu.png';
    canvas.appendChild(lakitu);
    lakitu.style.position = 'absolute';

    canvas.addEventListener('click', moverPersonaje)
}

function moverPersonaje(e){
    if(e.target == canvas){
        animar(lakitu,e.offsetX,e.offsetY)
        
    }
}

function animar(ele,x,y){
    var posActual = {
        x:ele.offsetLeft,
        y:ele.offsetTop
    }

    function continuo(){

        if(posActual.x != x){
            (posActual.x > x)?posActual.x--:posActual.x++;
        }
        if(posActual.y != y){
            (posActual.y > y)?posActual.y--:posActual.y++;
        }

        
        lakitu.style.top = posActual.y + 'px';
        lakitu.style.left = posActual.x + 'px';
        
        if(posActual.x != x || posActual.y != y){
            setTimeout(continuo,1);
        }

    }
    continuo();
}

var contador = 1;

function mover(){
    canvas.style.backgroundPosition = contador+'px 0px';
    contador++;
}

setInterval(mover,10);
