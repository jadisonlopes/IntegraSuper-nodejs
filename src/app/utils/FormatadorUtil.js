export const { format: precoBr } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const cpfCnpj = (texto) => {
  const semMascara = texto.replace(/[^0-9]/gi, '');

  if (semMascara.length <= 11)
    return semMascara.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  else
    return semMascara.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5',
    );
}