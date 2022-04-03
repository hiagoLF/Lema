export class Delivery {
  static schema = {
    name: 'Delivery',
    properties: {
      _id: 'string',
      name: 'string',
      date: 'date',
      status: 'int', // 0 -> Não Entregue | 1 -> Entregue
      customer: 'Customer?',
    },
    primaryKey: '_id',
  };
}
