import { ContractType } from './contract-type.model';

export const CONTRACT_TYPES: ContractType[] = [
  new ContractType(1, 'Fixed Bid'),
  new ContractType(2, 'Time and Materials'),
  new ContractType(3, 'Cost + Fixed Markup'),
  new ContractType(4, 'Fixed Profit'),
  new ContractType(5, 'Phased Development'),
  new ContractType(6, 'Sprint Contract'),
  new ContractType(7, 'Joint Ventures'),
];
