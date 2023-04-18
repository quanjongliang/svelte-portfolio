export class ResponseCustom<T> {
  data?: T;
  page?: number = 1;
  take?: number = 10;
  status?: number = 200;
  message?: string;
  code?: string;
  constructor(data?: Partial<ResponseCustom<T>>) {
    Object.assign(this, data);
  }
}
