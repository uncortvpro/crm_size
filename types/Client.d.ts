declare interface Client {
  name: string;
  phone: string;
  additional_phone: string;
  email: string;
  gender: string;
  birthday: any;
  instagram: string;
  telegram: string;
  comment: string;
  latest_order_date: string;
  total_price_sum: any;
  orders: ShoppingHistoryItem[];
  status: any;
  userpic: any;
  _id: string;
}
