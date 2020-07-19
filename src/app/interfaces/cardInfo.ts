export interface GenericList {
  card_key: string;
  card_name: string;
  condition: string;
  edition: string;
  expansion: string;
  image: string;
  price: string;
  pricec: string;
  quantity: number;
  rarity: string;
  web_site: string;
}

export interface Results1 {
  Damaged: GenericList[];
  "Heavily Played": GenericList[];
  "Lightly Played": GenericList[];
  "Moderately Played": GenericList[];
  "Near Mint": GenericList[];
  Played: GenericList[];
  "See Image For Condition": GenericList[];
}

export interface CardInfo2 {
  results: GenericList[];
}

export interface Editions {
  first_Edition: GenericList[];
  Unlimited: GenericList[];
  Limited_Edition: GenericList[];
}

export interface CardInfo {
  results: Results;
}

export interface Results {
  card_key: string;
  card_name: string;
  expansion: string;
  image: string; 
  card_list: GenericList[];
}