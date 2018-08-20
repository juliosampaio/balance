import { formatBRL, formatBRLWithSignal } from './formatters';

describe('formatters', () => {
  it('should format value as BRL currency', () => {
    expect(formatBRL(1000)).toEqual('R$ 1.000,00');
  });

  it('should add the + signal value after the BRL currency symbol', () => {
    expect(formatBRLWithSignal(1000)).toEqual('R$ +1.000,00');
  });

  it('should add the - signal value after the BRL currency symbol', () => {
    expect(formatBRLWithSignal(-1000)).toEqual('R$ -1.000,00');
  });
});
