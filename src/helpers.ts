function isString(value: any): value is string {
  return typeof value === "string";
}

export function buildQuerystring(parameters: Record<string, string>): string {
  return Reflect.ownKeys(parameters)
    .filter(isString)
    .filter((key) => parameters[key] !== undefined)
    .map((key) => `${encodeURI(key)}=${encodeURI(parameters[key])}`)
    .join("&");
}
