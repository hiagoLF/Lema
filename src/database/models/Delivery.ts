export class Delivery {
  static schema = {
    name: 'Delivery',
    properties: {
      _id: 'string',
      name: 'string',
      date: 'date',
      customer: 'Customer?',
    },
    primaryKey: '_id',
  };
}
