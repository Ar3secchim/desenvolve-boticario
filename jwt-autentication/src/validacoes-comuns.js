const { InvalidArgumentError } = require('./erros');


module.exports = {
  campoStringNaoNulo: (valor, nome) => {
    if (typeof valor !== 'string' || valor === 0)
      throw new InvalidArgumentError(`É necessário preencher o campo ${nome}!`);
  },

  campoTamanhoMinimo: (valor, nome, min) => {
    if (valor.length < min)
      throw new InvalidArgumentError(
        `O campo ${nome} precisa ser maior que ${min} caracteres!`
      );
  },

  campoTamanhoMaximo: (valor, nome, max) => {
    if (valor.length > max)
      throw new InvalidArgumentError(
        `O campo ${nome} precisa ser menor que ${maximo} caracteres!`
      );
  }
};
