export type Customer = {
  _id: string;
  name: string;
  status: number;
};

export type Delivery = {
  _id: string;
  name: string;
  date: Date;
  customer: Customer;
};
