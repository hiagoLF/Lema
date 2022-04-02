export class Customer {
  static schema = {
    name: 'Customer',
    properties: {
      _id: 'string',
      name: 'string',
      status: 'int',
    },
    primaryKey: '_id',
  };
}
