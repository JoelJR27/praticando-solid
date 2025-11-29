export interface IApiService {
    getUser(endpoint: string): Promise<any>
}