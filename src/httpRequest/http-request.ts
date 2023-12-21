import axios from "axios";

export class httpRequest {
  constructor() {}

  async getInfo(name: string) {
    axios
      .post("/", {})
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return `Problema no servidor tente novamente mais tarde, error: ${error.status}`;
      });
  }
}
