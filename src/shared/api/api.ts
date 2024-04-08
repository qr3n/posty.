import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getSession } from "@auth0/nextjs-auth0";

class Api {
  _api: AxiosInstance

  constructor() {
    this._api = axios.create()
  }

  async get<T>(url: string, query?: AxiosRequestConfig) {
    const session = await getSession()

    const data = await fetch(url, {
      headers: { Authorization: `Bearer ${session?.idToken}` }
    })

    return await data.json() as T
  }
}

export const api = new Api()
