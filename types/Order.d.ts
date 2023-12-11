declare interface Order { 
  client: string;
  comment: string;
  date: any; 
  email: string;
  payment: string;
  variations: VariationProduct[];
  shipping: string;
  source: string;
  status: Status | any;
  total_sum: number;
  _id: string;
} 
