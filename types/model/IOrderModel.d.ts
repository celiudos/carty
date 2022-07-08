interface IOrderModel {
  _id: string;
  selections: string[];
  status: string[];
  notified: boolean;
  client: string;
  business: string;
  payment: string;
  delivery: string;
  subTotal: number;
  hash: string;
  createdAt: string;
  orderNumber: number;
  __v: number;
  cardImage: string;
  cardLastDigits: string;
  cardPaymentId?: any;
  coupon?: any;
  deliveryNeighborhood: string;
  deliveryTax?: any;
  installmentRate: number;
  installmentsMessage?: any;
  note: string;
  orderTotal: number;
  shippingDays: string;
  shippingFee: number;
}
