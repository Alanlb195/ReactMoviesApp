import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options {
    baseURL: string;
    params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {


    private axiosInstance: AxiosInstance;

    constructor( options: Options ){
        this.axiosInstance = axios.create({
            baseURL: options.baseURL,
            params: options.params,
        })
    }

    async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {

        try {

            const { data } = await this.axiosInstance.get<T>(url, options);

            return data;

        }
        catch (error) {
            throw new Error(`Error fetching get: ${ error } `);
        }
    }

}