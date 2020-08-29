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
}

export default QobuzClient;
