/**
 * All 256 hexadecimal pairs
 * @NOTE Maximum index is `255`
 */
export const HEX: readonly string[];

/**
 * Convert an `ArrayBuffer` to a hexadecimal string.
 * @param {ArrayBuffer} input
 */
export function toHEX(input: ArrayBuffer): string;

/**
 * Decode a hexadecimal string into an `Uint8Array` instance.
 * @NOTE Pass output through `decode()` for string conversion.
 * @param {string} input
 */
export function viaHEX(input: string): Uint8Array;

/**
 * Generate a unique string of `len` length.
 * @NOTE Relies on `crypto` to produce cryptographically secure (CSPRNG) values.
 * @param {number} [len] The desired length (defaults to `11`)
 */
export function uid<N extends number = 11>(len?: N): UID<N>;
export type UID<N extends number> = { 0: string; length: N } & string;

/**
 * Generate a new UUID.V4 value.
 * @NOTE Relies on `crypto` to produce cryptographically secure (CSPRNG) values.
 */
export function uuid(): UUID;
export type UUID = { 0: string; length: 36 } & string;

/**
 * Generate a universally unique lexicographically sortable identifier (ulid).
 * @NOTE Relies on `crypto` to produce cryptographically secure (CSPRNG) values.
 * @see https://github.com/ulid/spec
 */
export function ulid(): ULID;
export type ULID = { 0: string; length: 26 } & string;

/**
 * Generate a specified number of cryptographically strong random values.
 * @NOTE Throws a `QuotaExceededError` error if `length` exceeds 65,536 bytes.
 */
export function randomize(length: number): Uint8Array;

/**
 * Reusable `TextEncoder` instance.
 */
export const Encoder: TextEncoder;

/**
 * Reusable `TextDecoder` instance.
 * @NOTE Initialized with UTF-8 encoding.
 */
export const Decoder: TextDecoder;

/**
 * Encode a string as an `Uint8Array` containing UTF-8 encoded text.
 * @param {string} input
 */
export function encode(input: string): Uint8Array;

/**
 * Decode a UTF-8 text string from an `ArrayBuffer` or an `ArrayBufferView` input.
 * @param {string} input
 * @param {boolean} [isStream] Additional data will follow in subsequent calls to decode.
 */
export function decode(input: ArrayBufferView | ArrayBuffer, isStream?: boolean): string;

/**
 * Calculate the length (in bytes) of an input string.
 * @param {string} [input]
 */
export function byteLength(input?: string): number;

/**
 * Convenient alias for all TypedArray classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
 */
export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
export type ArrayBufferPure<T extends ArrayBuffer> = T extends TypedArray ? never : T;

/**
 * Check if two `TypedArray` inputs are equal.
 * @NOTE See `isArrayBufferEqual` for raw `ArrayBuffer` instances.
 */
export function isTypedArrayEqual(a: TypedArray, b: TypedArray): boolean;

/**
 * Check if two `ArrayBuffer` inputs are equal.
 * @NOTE See `isTypedArrayEqual` if already have TypedArray instances.
 */
export function isArrayBufferEqual<A extends ArrayBuffer, B extends ArrayBuffer>(a: ArrayBufferPure<A>, b: ArrayBufferPure<B>): boolean;
