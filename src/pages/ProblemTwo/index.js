import React, { useState } from 'react';

export default function ProblemTwo() {
  const [tituloLivro, setTituloLivro] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('0');
  
  //Função que verifica o tipo do usuário.
  function tipo(){
    if(tipoUsuario === "1"){
      return [{titulo: 'Aluno', dias: 3}];
    } else if(tipoUsuario === "2"){
      return [{titulo: 'Professor', dias: 10}];
    } else if(tipoUsuario === "0"){
      return [{titulo: 'Não definido', dias: 0}];
    }   
  }

  //Função que exibe o recibo.
  function recibo(){
    var tipoUser = tipo(tipoUsuario);
    var recibo = document.getElementById('recibo');
    var livro = document.getElementById('recibolivro');
    var usuario = document.getElementById('recibousuario');
    var dias = document.getElementById('recibodias');
    livro.innerHTML = '<b>Livro:</b> ' + tituloLivro;
    usuario.innerHTML = '<b>Tipo de usuário:</b> ' + tipoUser[0].titulo;
    dias.innerHTML = '<b>Dias de emprestimo:</b> ' + tipoUser[0].dias;
    recibo.innerHTML = "Recibo";
    setTipoUsuario('0');
    setTituloLivro('');
  }

  return (
    <div className="container">
      <h1 className="titulo">Problema 2</h1>
      <p>
        • A biblioteca de uma universidade deseja fazer um algoritmo que leia
          o nome do livro que será emprestado, o tipo de usuário (professor ou
          aluno), o algoritmo deve imprimir um recibo mostrando o nome do
          livro, o tipo de usuário por extenso e o total de dias de empréstimo.
        • Considerar que o professor tem 10 dias para devolver o livro e o
          aluno somente 3 dias.
      </p>
      <form>
        <label>
          Titulo do livro: 
          <input className value={tituloLivro} onChange={(e) => setTituloLivro(e.target.value)} required/>
        </label>
        <label>
          Tipo de Usuário: 
          <select value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} required>
            <option value="0">Selecionar</option>
            <option value="1">Aluno</option>
            <option value="2">Professor</option>
          </select>
        </label>
        <button type='button' onClick={recibo}>Imprimir Recibo</button>
      </form>
      <h3 id="recibo"></h3>
      <p id="recibolivro"></p>
      <p id="recibousuario"></p>
      <p id="recibodias"></p>
    </div>
  );
}