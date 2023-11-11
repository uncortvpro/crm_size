declare interface Order { 
  client: string;
  comment: string;
  date: DateType; 
  email: string;
  payment: string;
  products: Product[];
  shipping: string;
  source: string;
  status: Status | any;
  total_sum: number;
  _id: string;
} 
