export const brazilianRealFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const moneyFormatter = formatter => value => formatter.format(value);

export const formatBRL = moneyFormatter(brazilianRealFormatter);

export const formatBRLWithSignal = value => {
  const signal = value > 0 ? '+' : '-';
  const simbol = value > 0 ? 'R$ ' : '-R$ ';
  const formatted = formatBRL(value).replace(simbol, `R$ ${signal}`);
  return formatted;
};
