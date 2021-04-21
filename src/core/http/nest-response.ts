export class NestResponse {
  status: number;
  headers: any;
  body: any;

  constructor(resposta: NestResponse) {
    // this.status = resposta.status;
    // this.headers = resposta.headers;
    // this.body = resposta.body;

    Object.assign(this, resposta);
  }
}
