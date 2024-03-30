export const isArray = Array.isArray;
export const isMap = (val:unknown) => toTypeString(val) === "[object Map]";
export const isSet = (val:unknown) => toTypeString(val) === "[object Set]";
export const isDate = (val:unknown) => toTypeString(val) === "[object Date]";
export const isRegExp = (val:unknown) => toTypeString(val) === "[object RegExp]";
export const isFunction = (val:unknown) => typeof val === "function";
export const isString = (val:unknown) => typeof val === "string";
export const isSymbol = (val:unknown) => typeof val === "symbol";
export const isObject = (val:unknown) => val !== null && typeof val === "object";
export const toTypeString = (val:unknown) => Object.prototype.toString.call(val)
