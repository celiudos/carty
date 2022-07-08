interface ICouponModel {
  _id: string;
  couponType: string;
  valid: boolean;
  amount: number;
  code: string;
  createdAt: string;
  expiresIn: string;
  business: string;
  invalidatedAt: string;
}
