import { IApiService } from "./interface/IApiService";

export class ApiService implements IApiService {
    async getUser(endpoint: string): Promise<any> {
        return fetch(endpoint).then((res) => res.json());
    }
}