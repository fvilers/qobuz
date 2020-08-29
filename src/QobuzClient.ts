import fetch from "node-fetch";
import { buildQuerystring } from "./helpers";

const API_ENDPOINT = "http://www.qobuz.com/api.json/0.2/";

class QobuzClient {
  private appId: string;
  private appSecret?: string;

  constructor(
    appId: string | undefined = process.env.QOBUZ_APP_ID,
    appSecret: string | undefined = process.env.QOBUZ_APP_SECRET
  ) {
    if (appId === undefined || appId === null) {
      throw new Error(
        "No application ID found. Use the constructor parameter or the QOBUZ_APP_ID environment variable to set."
      );
    }

    this.appId = appId;
    this.appSecret = appSecret;
  }

  async get<T>(uri: string, parameters: Record<string, string>): Promise<T> {
    const merged = { app_id: this.appId, ...parameters };
    const queryString = buildQuerystring(merged);
    const response = await fetch(`${API_ENDPOINT}${uri}?${queryString}`);
    const json = await response.json();

    return json;
  }
}

export default QobuzClient;
