declare interface GlobalProduct {
    amount: number;
    name: string;
    price: number;
    size: string;
    _id: string;
    warehouse: string;
    variations_num?: number;
    variations: any[];
    subwarehouse: string;
    status: Status | any;
    pieces: number;
    description: string;
    category: string;
    comment: string;
  }
  