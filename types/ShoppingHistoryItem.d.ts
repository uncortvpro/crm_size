declare interface ShoppingHistoryItem {
  _id: string;
  client: string;
  comment: string;
  date: string;
  email: string;
  payment: string;
  shipping: string;
  source: string;
  status: any;
  total_sum: number;
  products: Product[];
}
