export function flatMap<T>(array: T[], array2: T[]): T[] {
  return array.concat(array2);
}

export function isNullOrUndefined(value: any): boolean {
  return value === undefined || value === null;
}

export function isDefined(value: any): boolean {
  return !isNullOrUndefined(value);
}

export function isArrayEmpty(array: any[]): boolean {
  return isNullOrUndefined(array) || array.length === 0;
}

export function isArrayNotEmpty(array: any[]): boolean {
  return !isNullOrUndefined(array) && array.length > 0;
}
