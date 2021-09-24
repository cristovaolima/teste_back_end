import React, { useEffect, useState } from 'react';

export default function ProblemOne() {
    var chico = 1.50;
    var juca = 1.10;
    var anos = 0;

    useEffect(() => {
        showCalculo();
    }, [])

    //Função que calcula quantos anos serão necessários para que Juca seja maior que Chico.
    function calcular(){
        while(juca <= chico){
            chico += 0.02;
            juca += 0.03;
            anos++;
        }
        return anos;
    }

    //Função que exibe na tag p o calculo.
    function showCalculo(){
        var show = document.getElementById('show');
        show.innerHTML = "Serão necessário " + calcular() + 
        " anos para que Juca seja maior do que Chico."; 
    }

    return (
      <div className="container">
        <h1>Problema 1</h1>
        <p>
            Chico tem 1,50m e cresce 2 centímetros por ano, enquanto Juca tem 1,10m e 
            cresce 3 centímetros por ano. Construir um algoritmo que calcule e imprima 
            quantos anos serão necessários para que Juca seja maior que Chico.
        </p>
        <p id="show"></p>
      </div>
    );
}