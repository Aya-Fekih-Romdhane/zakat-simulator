export interface ZakatResult {
  type: string;
  typeAr: string;
  zakatDue: boolean;
  nisabValue: number;
  totalAssets: number;
  zakatAmount: number;
  zakatRate: number;
  currency: string;
  notes: string;
  notesAr: string;
}

export interface ZakatMalRequest {
  cashSavings: number;
  bankDeposits: number;
  investments: number;
  debtsOwedToYou: number;
  debtsYouOwe: number;
  goldPricePerGram: number;
  currency: string;
}

export interface ZakatGoldSilverRequest {
  goldGrams: number;
  silverGrams: number;
  goldPricePerGram: number;
  silverPricePerGram: number;
  currency: string;
}

export interface ZakatTijarahRequest {
  stockValue: number;
  cashOnHand: number;
  receivables: number;
  payables: number;
  goldPricePerGram: number;
  currency: string;
}

export interface ZakatZiraaRequest {
  harvestKg: number;
  naturallyIrrigated: boolean;
  currency: string;
}

export interface ZakatMawashiRequest {
  camels: number;
  cattle: number;
  sheep: number;
  currency: string;
}

export interface ZakatFitrRequest {
  numberOfPersons: number;
  stapleGrainPricePerKg: number;
  currency: string;
}

export type ZakatTab = 'mal' | 'goldsilver' | 'tijarah' | 'ziraa' | 'mawashi' | 'fitr';

export interface TabConfig {
  id: ZakatTab;
  labelAr: string;
  labelFr: string;
  icon: string;
}
