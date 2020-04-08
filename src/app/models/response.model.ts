interface Res {
  code: number;
  message: string;
}

export type Response<T> = Res | T;
