const calculaValor = require('../src/calculaValor');

test('Com uma prestação o montante é igual ao capital', () => {
  // Operação
  const montante = calculaValor.calcularMontante(100, 0.0175, 1);

  // Resultado ou Corpotamento Esperado
  expect(montante).toBe(100);
});
