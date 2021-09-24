import React, { useEffect } from 'react';

export default function ProblemThree() {
    const matriz = [];

    useEffect(() => {
        geraMatriz();
        exibeMatriz();
        exibeMatrizPar();
        exibeMatrizImpar()
    }, [])

    //Função que gera os números aleatórios da matriz.
    function geraMatriz(){        
        for(var i = 0; i < 5; i++){
            var numeros = [];
            for(var j = 0; j < 5; j++){
                var num = Math.floor(Math.random() * (99 - 1)) + 1;
                numeros.push(num);
            }            
            matriz.push(numeros);
        }
    }

    //Função que verifica se o número é par ou ímpar e retorna o resultado da verificação.
    function parImpar(num){
        if(num%2 === 0)
            return 'par';
        return 'impar';
    }

    //Função que exibe a matriz com os números aleatórios gerados.
    function exibeMatriz(){
        var showMatriz = document.getElementById('showmatriz');
        var show = '<p>Matriz</p>';
        var linhas = []
        for(var i = 0; i < 5; i++){
            var linha = [];
            for(var j = 0; j < 5; j++){
                var n = matriz[i][j] < 10 ? ' 0' + matriz[i][j] : ' ' + matriz[i][j];
                linha.push(n);
            }
            linhas.push(linha);         
        }
        for(var i = 0; i < 5; i++){
            show = show + '<p>[ ' + linhas[i] + ' ]</p>'         
        }
        showMatriz.innerHTML = show;       
    }

    //Função que exibe a matriz com os números pares, faz a 
    //verificação se o número é par e mostra o número com dois dígitos(01).
    function exibeMatrizPar(){
        var showMatriz = document.getElementById('showmatrizpar');
        var show = '<p>Matriz Par</p>';
        var linhas = []
        for(var i = 0; i < 5; i++){
            var linha = [];
            for(var j = 0; j < 5; j++){
                var n = matriz[i][j] < 10 ? 
                (parImpar(matriz[i][j]) === 'par' ? ' 0' + matriz[i][j] : ' xx') : 
                (parImpar(matriz[i][j]) === 'par' ? ' ' + matriz[i][j] : ' xx');
                linha.push(n);
            }
            linhas.push(linha);         
        }
        for(var i = 0; i < 5; i++){
            show = show + '<p>[ ' + linhas[i] + ' ]</p>'         
        }
        showMatriz.innerHTML = show;         
    }

    //Função que exibe a matriz com os números ímpares, faz a 
    //verificação se o número é ímpar e mostra o número com dois dígitos(01).
    function exibeMatrizImpar(){
        var showMatriz = document.getElementById('showmatrizimpar');
        var show = '<p>Matriz Ímpar</p>';
        var linhas = []
        for(var i = 0; i < 5; i++){
            var linha = [];
            for(var j = 0; j < 5; j++){
                var n = matriz[i][j] < 10 ? 
                (parImpar(matriz[i][j]) === 'impar' ? ' 0' + matriz[i][j] : ' xx') : 
                (parImpar(matriz[i][j]) === 'impar' ? ' ' + matriz[i][j] : ' xx');
                linha.push(n);
            }
            linhas.push(linha);         
        }
        for(var i = 0; i < 5; i++){
            show = show + '<p>[ ' + linhas[i] + ' ]</p>'         
        }
        showMatriz.innerHTML = show;        
    }

    return (
      <div className="container">
        <h1>Problema 3</h1>
        <p>
          Criar um algoritmo que gere uma matriz 5x5 e imprima:
          toda a matriz, a matriz gerada apenas com os números
          ímpares e outra só com os números pares.
        </p>
            <div className="container-matriz">
                <div className="matriz" id='showmatriz'></div>
                <div className="matriz" id='showmatrizpar'></div>
                <div className="matriz" id='showmatrizimpar'></div>
            </div>
      </div>
    );
}