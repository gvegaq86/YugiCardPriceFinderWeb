export interface Damaged {
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

export interface HeavilyPlayed {
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

export interface LightlyPlayed {
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

export interface ModeratelyPlayed {
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

export interface NearMint {
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

export interface Played {
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

export interface SeeImageForCondition {
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

export interface Results {
  Damaged: Damaged[];
  "Heavily Played": HeavilyPlayed[];
  "Lightly Played": LightlyPlayed[];
  "Moderately Played": ModeratelyPlayed[];
  "Near Mint": NearMint[];
  Played: Played[];
  "See Image For Condition": SeeImageForCondition[];
}

export interface CardInfo {
  results: Results;
}