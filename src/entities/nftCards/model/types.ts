export interface NftCardResponse {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
}

export interface NftCard {
  id: string;
  title: string;
  image: string;
  bid: number;
  timestamp: number;
}