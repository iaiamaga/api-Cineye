
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cineproductions
 * 
 */
export type cineproductions = $Result.DefaultSelection<Prisma.$cineproductionsPayload>
/**
 * Model film_genero
 * 
 */
export type film_genero = $Result.DefaultSelection<Prisma.$film_generoPayload>
/**
 * Model genres
 * 
 */
export type genres = $Result.DefaultSelection<Prisma.$genresPayload>
/**
 * Model idioms
 * 
 */
export type idioms = $Result.DefaultSelection<Prisma.$idiomsPayload>
/**
 * Model types
 * 
 */
export type types = $Result.DefaultSelection<Prisma.$typesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cineproductions
 * const cineproductions = await prisma.cineproductions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cineproductions
   * const cineproductions = await prisma.cineproductions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cineproductions`: Exposes CRUD operations for the **cineproductions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cineproductions
    * const cineproductions = await prisma.cineproductions.findMany()
    * ```
    */
  get cineproductions(): Prisma.cineproductionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.film_genero`: Exposes CRUD operations for the **film_genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Film_generos
    * const film_generos = await prisma.film_genero.findMany()
    * ```
    */
  get film_genero(): Prisma.film_generoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.genresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idioms`: Exposes CRUD operations for the **idioms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idioms
    * const idioms = await prisma.idioms.findMany()
    * ```
    */
  get idioms(): Prisma.idiomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.types`: Exposes CRUD operations for the **types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.types.findMany()
    * ```
    */
  get types(): Prisma.typesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cineproductions: 'cineproductions',
    film_genero: 'film_genero',
    genres: 'genres',
    idioms: 'idioms',
    types: 'types'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cineproductions" | "film_genero" | "genres" | "idioms" | "types"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cineproductions: {
        payload: Prisma.$cineproductionsPayload<ExtArgs>
        fields: Prisma.cineproductionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cineproductionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cineproductionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload>
          }
          findFirst: {
            args: Prisma.cineproductionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cineproductionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload>
          }
          findMany: {
            args: Prisma.cineproductionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload>[]
          }
          create: {
            args: Prisma.cineproductionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload>
          }
          createMany: {
            args: Prisma.cineproductionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cineproductionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload>[]
          }
          delete: {
            args: Prisma.cineproductionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload>
          }
          update: {
            args: Prisma.cineproductionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload>
          }
          deleteMany: {
            args: Prisma.cineproductionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cineproductionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cineproductionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload>[]
          }
          upsert: {
            args: Prisma.cineproductionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cineproductionsPayload>
          }
          aggregate: {
            args: Prisma.CineproductionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCineproductions>
          }
          groupBy: {
            args: Prisma.cineproductionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CineproductionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cineproductionsCountArgs<ExtArgs>
            result: $Utils.Optional<CineproductionsCountAggregateOutputType> | number
          }
        }
      }
      film_genero: {
        payload: Prisma.$film_generoPayload<ExtArgs>
        fields: Prisma.film_generoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.film_generoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.film_generoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload>
          }
          findFirst: {
            args: Prisma.film_generoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.film_generoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload>
          }
          findMany: {
            args: Prisma.film_generoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload>[]
          }
          create: {
            args: Prisma.film_generoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload>
          }
          createMany: {
            args: Prisma.film_generoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.film_generoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload>[]
          }
          delete: {
            args: Prisma.film_generoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload>
          }
          update: {
            args: Prisma.film_generoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload>
          }
          deleteMany: {
            args: Prisma.film_generoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.film_generoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.film_generoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload>[]
          }
          upsert: {
            args: Prisma.film_generoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$film_generoPayload>
          }
          aggregate: {
            args: Prisma.Film_generoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilm_genero>
          }
          groupBy: {
            args: Prisma.film_generoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Film_generoGroupByOutputType>[]
          }
          count: {
            args: Prisma.film_generoCountArgs<ExtArgs>
            result: $Utils.Optional<Film_generoCountAggregateOutputType> | number
          }
        }
      }
      genres: {
        payload: Prisma.$genresPayload<ExtArgs>
        fields: Prisma.genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findFirst: {
            args: Prisma.genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findMany: {
            args: Prisma.genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          create: {
            args: Prisma.genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          createMany: {
            args: Prisma.genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.genresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          delete: {
            args: Prisma.genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          update: {
            args: Prisma.genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          deleteMany: {
            args: Prisma.genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.genresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          upsert: {
            args: Prisma.genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.genresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      idioms: {
        payload: Prisma.$idiomsPayload<ExtArgs>
        fields: Prisma.idiomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idiomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idiomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload>
          }
          findFirst: {
            args: Prisma.idiomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idiomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload>
          }
          findMany: {
            args: Prisma.idiomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload>[]
          }
          create: {
            args: Prisma.idiomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload>
          }
          createMany: {
            args: Prisma.idiomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.idiomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload>[]
          }
          delete: {
            args: Prisma.idiomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload>
          }
          update: {
            args: Prisma.idiomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload>
          }
          deleteMany: {
            args: Prisma.idiomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idiomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.idiomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload>[]
          }
          upsert: {
            args: Prisma.idiomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idiomsPayload>
          }
          aggregate: {
            args: Prisma.IdiomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdioms>
          }
          groupBy: {
            args: Prisma.idiomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdiomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.idiomsCountArgs<ExtArgs>
            result: $Utils.Optional<IdiomsCountAggregateOutputType> | number
          }
        }
      }
      types: {
        payload: Prisma.$typesPayload<ExtArgs>
        fields: Prisma.typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          findFirst: {
            args: Prisma.typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          findMany: {
            args: Prisma.typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>[]
          }
          create: {
            args: Prisma.typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          createMany: {
            args: Prisma.typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>[]
          }
          delete: {
            args: Prisma.typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          update: {
            args: Prisma.typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          deleteMany: {
            args: Prisma.typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>[]
          }
          upsert: {
            args: Prisma.typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          aggregate: {
            args: Prisma.TypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypes>
          }
          groupBy: {
            args: Prisma.typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.typesCountArgs<ExtArgs>
            result: $Utils.Optional<TypesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cineproductions?: cineproductionsOmit
    film_genero?: film_generoOmit
    genres?: genresOmit
    idioms?: idiomsOmit
    types?: typesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CineproductionsCountOutputType
   */

  export type CineproductionsCountOutputType = {
    film_genero: number
  }

  export type CineproductionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    film_genero?: boolean | CineproductionsCountOutputTypeCountFilm_generoArgs
  }

  // Custom InputTypes
  /**
   * CineproductionsCountOutputType without action
   */
  export type CineproductionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CineproductionsCountOutputType
     */
    select?: CineproductionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CineproductionsCountOutputType without action
   */
  export type CineproductionsCountOutputTypeCountFilm_generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_generoWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    cineproductions: number
    film_genero: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cineproductions?: boolean | GenresCountOutputTypeCountCineproductionsArgs
    film_genero?: boolean | GenresCountOutputTypeCountFilm_generoArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountCineproductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cineproductionsWhereInput
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountFilm_generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_generoWhereInput
  }


  /**
   * Count Type IdiomsCountOutputType
   */

  export type IdiomsCountOutputType = {
    cineproductions: number
  }

  export type IdiomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cineproductions?: boolean | IdiomsCountOutputTypeCountCineproductionsArgs
  }

  // Custom InputTypes
  /**
   * IdiomsCountOutputType without action
   */
  export type IdiomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdiomsCountOutputType
     */
    select?: IdiomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IdiomsCountOutputType without action
   */
  export type IdiomsCountOutputTypeCountCineproductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cineproductionsWhereInput
  }


  /**
   * Count Type TypesCountOutputType
   */

  export type TypesCountOutputType = {
    cineproductions: number
  }

  export type TypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cineproductions?: boolean | TypesCountOutputTypeCountCineproductionsArgs
  }

  // Custom InputTypes
  /**
   * TypesCountOutputType without action
   */
  export type TypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypesCountOutputType
     */
    select?: TypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypesCountOutputType without action
   */
  export type TypesCountOutputTypeCountCineproductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cineproductionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cineproductions
   */

  export type AggregateCineproductions = {
    _count: CineproductionsCountAggregateOutputType | null
    _avg: CineproductionsAvgAggregateOutputType | null
    _sum: CineproductionsSumAggregateOutputType | null
    _min: CineproductionsMinAggregateOutputType | null
    _max: CineproductionsMaxAggregateOutputType | null
  }

  export type CineproductionsAvgAggregateOutputType = {
    id: number | null
    release_date: number | null
    idiom_id: number | null
    genre_id: number | null
    type_id: number | null
  }

  export type CineproductionsSumAggregateOutputType = {
    id: number | null
    release_date: number | null
    idiom_id: number | null
    genre_id: number | null
    type_id: number | null
  }

  export type CineproductionsMinAggregateOutputType = {
    id: number | null
    title: string | null
    release_date: number | null
    nationality: string | null
    idiom_id: number | null
    genre_id: number | null
    directors: string | null
    type_id: number | null
  }

  export type CineproductionsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    release_date: number | null
    nationality: string | null
    idiom_id: number | null
    genre_id: number | null
    directors: string | null
    type_id: number | null
  }

  export type CineproductionsCountAggregateOutputType = {
    id: number
    title: number
    release_date: number
    nationality: number
    idiom_id: number
    genre_id: number
    directors: number
    type_id: number
    _all: number
  }


  export type CineproductionsAvgAggregateInputType = {
    id?: true
    release_date?: true
    idiom_id?: true
    genre_id?: true
    type_id?: true
  }

  export type CineproductionsSumAggregateInputType = {
    id?: true
    release_date?: true
    idiom_id?: true
    genre_id?: true
    type_id?: true
  }

  export type CineproductionsMinAggregateInputType = {
    id?: true
    title?: true
    release_date?: true
    nationality?: true
    idiom_id?: true
    genre_id?: true
    directors?: true
    type_id?: true
  }

  export type CineproductionsMaxAggregateInputType = {
    id?: true
    title?: true
    release_date?: true
    nationality?: true
    idiom_id?: true
    genre_id?: true
    directors?: true
    type_id?: true
  }

  export type CineproductionsCountAggregateInputType = {
    id?: true
    title?: true
    release_date?: true
    nationality?: true
    idiom_id?: true
    genre_id?: true
    directors?: true
    type_id?: true
    _all?: true
  }

  export type CineproductionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cineproductions to aggregate.
     */
    where?: cineproductionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cineproductions to fetch.
     */
    orderBy?: cineproductionsOrderByWithRelationInput | cineproductionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cineproductionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cineproductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cineproductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cineproductions
    **/
    _count?: true | CineproductionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CineproductionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CineproductionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CineproductionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CineproductionsMaxAggregateInputType
  }

  export type GetCineproductionsAggregateType<T extends CineproductionsAggregateArgs> = {
        [P in keyof T & keyof AggregateCineproductions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCineproductions[P]>
      : GetScalarType<T[P], AggregateCineproductions[P]>
  }




  export type cineproductionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cineproductionsWhereInput
    orderBy?: cineproductionsOrderByWithAggregationInput | cineproductionsOrderByWithAggregationInput[]
    by: CineproductionsScalarFieldEnum[] | CineproductionsScalarFieldEnum
    having?: cineproductionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CineproductionsCountAggregateInputType | true
    _avg?: CineproductionsAvgAggregateInputType
    _sum?: CineproductionsSumAggregateInputType
    _min?: CineproductionsMinAggregateInputType
    _max?: CineproductionsMaxAggregateInputType
  }

  export type CineproductionsGroupByOutputType = {
    id: number
    title: string | null
    release_date: number | null
    nationality: string | null
    idiom_id: number | null
    genre_id: number | null
    directors: string | null
    type_id: number | null
    _count: CineproductionsCountAggregateOutputType | null
    _avg: CineproductionsAvgAggregateOutputType | null
    _sum: CineproductionsSumAggregateOutputType | null
    _min: CineproductionsMinAggregateOutputType | null
    _max: CineproductionsMaxAggregateOutputType | null
  }

  type GetCineproductionsGroupByPayload<T extends cineproductionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CineproductionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CineproductionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CineproductionsGroupByOutputType[P]>
            : GetScalarType<T[P], CineproductionsGroupByOutputType[P]>
        }
      >
    >


  export type cineproductionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    release_date?: boolean
    nationality?: boolean
    idiom_id?: boolean
    genre_id?: boolean
    directors?: boolean
    type_id?: boolean
    genres?: boolean | cineproductions$genresArgs<ExtArgs>
    idioms?: boolean | cineproductions$idiomsArgs<ExtArgs>
    types?: boolean | cineproductions$typesArgs<ExtArgs>
    film_genero?: boolean | cineproductions$film_generoArgs<ExtArgs>
    _count?: boolean | CineproductionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cineproductions"]>

  export type cineproductionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    release_date?: boolean
    nationality?: boolean
    idiom_id?: boolean
    genre_id?: boolean
    directors?: boolean
    type_id?: boolean
    genres?: boolean | cineproductions$genresArgs<ExtArgs>
    idioms?: boolean | cineproductions$idiomsArgs<ExtArgs>
    types?: boolean | cineproductions$typesArgs<ExtArgs>
  }, ExtArgs["result"]["cineproductions"]>

  export type cineproductionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    release_date?: boolean
    nationality?: boolean
    idiom_id?: boolean
    genre_id?: boolean
    directors?: boolean
    type_id?: boolean
    genres?: boolean | cineproductions$genresArgs<ExtArgs>
    idioms?: boolean | cineproductions$idiomsArgs<ExtArgs>
    types?: boolean | cineproductions$typesArgs<ExtArgs>
  }, ExtArgs["result"]["cineproductions"]>

  export type cineproductionsSelectScalar = {
    id?: boolean
    title?: boolean
    release_date?: boolean
    nationality?: boolean
    idiom_id?: boolean
    genre_id?: boolean
    directors?: boolean
    type_id?: boolean
  }

  export type cineproductionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "release_date" | "nationality" | "idiom_id" | "genre_id" | "directors" | "type_id", ExtArgs["result"]["cineproductions"]>
  export type cineproductionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | cineproductions$genresArgs<ExtArgs>
    idioms?: boolean | cineproductions$idiomsArgs<ExtArgs>
    types?: boolean | cineproductions$typesArgs<ExtArgs>
    film_genero?: boolean | cineproductions$film_generoArgs<ExtArgs>
    _count?: boolean | CineproductionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cineproductionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | cineproductions$genresArgs<ExtArgs>
    idioms?: boolean | cineproductions$idiomsArgs<ExtArgs>
    types?: boolean | cineproductions$typesArgs<ExtArgs>
  }
  export type cineproductionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | cineproductions$genresArgs<ExtArgs>
    idioms?: boolean | cineproductions$idiomsArgs<ExtArgs>
    types?: boolean | cineproductions$typesArgs<ExtArgs>
  }

  export type $cineproductionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cineproductions"
    objects: {
      genres: Prisma.$genresPayload<ExtArgs> | null
      idioms: Prisma.$idiomsPayload<ExtArgs> | null
      types: Prisma.$typesPayload<ExtArgs> | null
      film_genero: Prisma.$film_generoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      release_date: number | null
      nationality: string | null
      idiom_id: number | null
      genre_id: number | null
      directors: string | null
      type_id: number | null
    }, ExtArgs["result"]["cineproductions"]>
    composites: {}
  }

  type cineproductionsGetPayload<S extends boolean | null | undefined | cineproductionsDefaultArgs> = $Result.GetResult<Prisma.$cineproductionsPayload, S>

  type cineproductionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cineproductionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CineproductionsCountAggregateInputType | true
    }

  export interface cineproductionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cineproductions'], meta: { name: 'cineproductions' } }
    /**
     * Find zero or one Cineproductions that matches the filter.
     * @param {cineproductionsFindUniqueArgs} args - Arguments to find a Cineproductions
     * @example
     * // Get one Cineproductions
     * const cineproductions = await prisma.cineproductions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cineproductionsFindUniqueArgs>(args: SelectSubset<T, cineproductionsFindUniqueArgs<ExtArgs>>): Prisma__cineproductionsClient<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cineproductions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cineproductionsFindUniqueOrThrowArgs} args - Arguments to find a Cineproductions
     * @example
     * // Get one Cineproductions
     * const cineproductions = await prisma.cineproductions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cineproductionsFindUniqueOrThrowArgs>(args: SelectSubset<T, cineproductionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cineproductionsClient<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cineproductions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cineproductionsFindFirstArgs} args - Arguments to find a Cineproductions
     * @example
     * // Get one Cineproductions
     * const cineproductions = await prisma.cineproductions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cineproductionsFindFirstArgs>(args?: SelectSubset<T, cineproductionsFindFirstArgs<ExtArgs>>): Prisma__cineproductionsClient<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cineproductions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cineproductionsFindFirstOrThrowArgs} args - Arguments to find a Cineproductions
     * @example
     * // Get one Cineproductions
     * const cineproductions = await prisma.cineproductions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cineproductionsFindFirstOrThrowArgs>(args?: SelectSubset<T, cineproductionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cineproductionsClient<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cineproductions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cineproductionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cineproductions
     * const cineproductions = await prisma.cineproductions.findMany()
     * 
     * // Get first 10 Cineproductions
     * const cineproductions = await prisma.cineproductions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cineproductionsWithIdOnly = await prisma.cineproductions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cineproductionsFindManyArgs>(args?: SelectSubset<T, cineproductionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cineproductions.
     * @param {cineproductionsCreateArgs} args - Arguments to create a Cineproductions.
     * @example
     * // Create one Cineproductions
     * const Cineproductions = await prisma.cineproductions.create({
     *   data: {
     *     // ... data to create a Cineproductions
     *   }
     * })
     * 
     */
    create<T extends cineproductionsCreateArgs>(args: SelectSubset<T, cineproductionsCreateArgs<ExtArgs>>): Prisma__cineproductionsClient<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cineproductions.
     * @param {cineproductionsCreateManyArgs} args - Arguments to create many Cineproductions.
     * @example
     * // Create many Cineproductions
     * const cineproductions = await prisma.cineproductions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cineproductionsCreateManyArgs>(args?: SelectSubset<T, cineproductionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cineproductions and returns the data saved in the database.
     * @param {cineproductionsCreateManyAndReturnArgs} args - Arguments to create many Cineproductions.
     * @example
     * // Create many Cineproductions
     * const cineproductions = await prisma.cineproductions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cineproductions and only return the `id`
     * const cineproductionsWithIdOnly = await prisma.cineproductions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cineproductionsCreateManyAndReturnArgs>(args?: SelectSubset<T, cineproductionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cineproductions.
     * @param {cineproductionsDeleteArgs} args - Arguments to delete one Cineproductions.
     * @example
     * // Delete one Cineproductions
     * const Cineproductions = await prisma.cineproductions.delete({
     *   where: {
     *     // ... filter to delete one Cineproductions
     *   }
     * })
     * 
     */
    delete<T extends cineproductionsDeleteArgs>(args: SelectSubset<T, cineproductionsDeleteArgs<ExtArgs>>): Prisma__cineproductionsClient<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cineproductions.
     * @param {cineproductionsUpdateArgs} args - Arguments to update one Cineproductions.
     * @example
     * // Update one Cineproductions
     * const cineproductions = await prisma.cineproductions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cineproductionsUpdateArgs>(args: SelectSubset<T, cineproductionsUpdateArgs<ExtArgs>>): Prisma__cineproductionsClient<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cineproductions.
     * @param {cineproductionsDeleteManyArgs} args - Arguments to filter Cineproductions to delete.
     * @example
     * // Delete a few Cineproductions
     * const { count } = await prisma.cineproductions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cineproductionsDeleteManyArgs>(args?: SelectSubset<T, cineproductionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cineproductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cineproductionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cineproductions
     * const cineproductions = await prisma.cineproductions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cineproductionsUpdateManyArgs>(args: SelectSubset<T, cineproductionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cineproductions and returns the data updated in the database.
     * @param {cineproductionsUpdateManyAndReturnArgs} args - Arguments to update many Cineproductions.
     * @example
     * // Update many Cineproductions
     * const cineproductions = await prisma.cineproductions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cineproductions and only return the `id`
     * const cineproductionsWithIdOnly = await prisma.cineproductions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cineproductionsUpdateManyAndReturnArgs>(args: SelectSubset<T, cineproductionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cineproductions.
     * @param {cineproductionsUpsertArgs} args - Arguments to update or create a Cineproductions.
     * @example
     * // Update or create a Cineproductions
     * const cineproductions = await prisma.cineproductions.upsert({
     *   create: {
     *     // ... data to create a Cineproductions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cineproductions we want to update
     *   }
     * })
     */
    upsert<T extends cineproductionsUpsertArgs>(args: SelectSubset<T, cineproductionsUpsertArgs<ExtArgs>>): Prisma__cineproductionsClient<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cineproductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cineproductionsCountArgs} args - Arguments to filter Cineproductions to count.
     * @example
     * // Count the number of Cineproductions
     * const count = await prisma.cineproductions.count({
     *   where: {
     *     // ... the filter for the Cineproductions we want to count
     *   }
     * })
    **/
    count<T extends cineproductionsCountArgs>(
      args?: Subset<T, cineproductionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CineproductionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cineproductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CineproductionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CineproductionsAggregateArgs>(args: Subset<T, CineproductionsAggregateArgs>): Prisma.PrismaPromise<GetCineproductionsAggregateType<T>>

    /**
     * Group by Cineproductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cineproductionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cineproductionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cineproductionsGroupByArgs['orderBy'] }
        : { orderBy?: cineproductionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cineproductionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCineproductionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cineproductions model
   */
  readonly fields: cineproductionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cineproductions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cineproductionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends cineproductions$genresArgs<ExtArgs> = {}>(args?: Subset<T, cineproductions$genresArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    idioms<T extends cineproductions$idiomsArgs<ExtArgs> = {}>(args?: Subset<T, cineproductions$idiomsArgs<ExtArgs>>): Prisma__idiomsClient<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    types<T extends cineproductions$typesArgs<ExtArgs> = {}>(args?: Subset<T, cineproductions$typesArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    film_genero<T extends cineproductions$film_generoArgs<ExtArgs> = {}>(args?: Subset<T, cineproductions$film_generoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cineproductions model
   */
  interface cineproductionsFieldRefs {
    readonly id: FieldRef<"cineproductions", 'Int'>
    readonly title: FieldRef<"cineproductions", 'String'>
    readonly release_date: FieldRef<"cineproductions", 'Int'>
    readonly nationality: FieldRef<"cineproductions", 'String'>
    readonly idiom_id: FieldRef<"cineproductions", 'Int'>
    readonly genre_id: FieldRef<"cineproductions", 'Int'>
    readonly directors: FieldRef<"cineproductions", 'String'>
    readonly type_id: FieldRef<"cineproductions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * cineproductions findUnique
   */
  export type cineproductionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    /**
     * Filter, which cineproductions to fetch.
     */
    where: cineproductionsWhereUniqueInput
  }

  /**
   * cineproductions findUniqueOrThrow
   */
  export type cineproductionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    /**
     * Filter, which cineproductions to fetch.
     */
    where: cineproductionsWhereUniqueInput
  }

  /**
   * cineproductions findFirst
   */
  export type cineproductionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    /**
     * Filter, which cineproductions to fetch.
     */
    where?: cineproductionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cineproductions to fetch.
     */
    orderBy?: cineproductionsOrderByWithRelationInput | cineproductionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cineproductions.
     */
    cursor?: cineproductionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cineproductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cineproductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cineproductions.
     */
    distinct?: CineproductionsScalarFieldEnum | CineproductionsScalarFieldEnum[]
  }

  /**
   * cineproductions findFirstOrThrow
   */
  export type cineproductionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    /**
     * Filter, which cineproductions to fetch.
     */
    where?: cineproductionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cineproductions to fetch.
     */
    orderBy?: cineproductionsOrderByWithRelationInput | cineproductionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cineproductions.
     */
    cursor?: cineproductionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cineproductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cineproductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cineproductions.
     */
    distinct?: CineproductionsScalarFieldEnum | CineproductionsScalarFieldEnum[]
  }

  /**
   * cineproductions findMany
   */
  export type cineproductionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    /**
     * Filter, which cineproductions to fetch.
     */
    where?: cineproductionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cineproductions to fetch.
     */
    orderBy?: cineproductionsOrderByWithRelationInput | cineproductionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cineproductions.
     */
    cursor?: cineproductionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cineproductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cineproductions.
     */
    skip?: number
    distinct?: CineproductionsScalarFieldEnum | CineproductionsScalarFieldEnum[]
  }

  /**
   * cineproductions create
   */
  export type cineproductionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    /**
     * The data needed to create a cineproductions.
     */
    data?: XOR<cineproductionsCreateInput, cineproductionsUncheckedCreateInput>
  }

  /**
   * cineproductions createMany
   */
  export type cineproductionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cineproductions.
     */
    data: cineproductionsCreateManyInput | cineproductionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cineproductions createManyAndReturn
   */
  export type cineproductionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * The data used to create many cineproductions.
     */
    data: cineproductionsCreateManyInput | cineproductionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cineproductions update
   */
  export type cineproductionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    /**
     * The data needed to update a cineproductions.
     */
    data: XOR<cineproductionsUpdateInput, cineproductionsUncheckedUpdateInput>
    /**
     * Choose, which cineproductions to update.
     */
    where: cineproductionsWhereUniqueInput
  }

  /**
   * cineproductions updateMany
   */
  export type cineproductionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cineproductions.
     */
    data: XOR<cineproductionsUpdateManyMutationInput, cineproductionsUncheckedUpdateManyInput>
    /**
     * Filter which cineproductions to update
     */
    where?: cineproductionsWhereInput
    /**
     * Limit how many cineproductions to update.
     */
    limit?: number
  }

  /**
   * cineproductions updateManyAndReturn
   */
  export type cineproductionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * The data used to update cineproductions.
     */
    data: XOR<cineproductionsUpdateManyMutationInput, cineproductionsUncheckedUpdateManyInput>
    /**
     * Filter which cineproductions to update
     */
    where?: cineproductionsWhereInput
    /**
     * Limit how many cineproductions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cineproductions upsert
   */
  export type cineproductionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    /**
     * The filter to search for the cineproductions to update in case it exists.
     */
    where: cineproductionsWhereUniqueInput
    /**
     * In case the cineproductions found by the `where` argument doesn't exist, create a new cineproductions with this data.
     */
    create: XOR<cineproductionsCreateInput, cineproductionsUncheckedCreateInput>
    /**
     * In case the cineproductions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cineproductionsUpdateInput, cineproductionsUncheckedUpdateInput>
  }

  /**
   * cineproductions delete
   */
  export type cineproductionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    /**
     * Filter which cineproductions to delete.
     */
    where: cineproductionsWhereUniqueInput
  }

  /**
   * cineproductions deleteMany
   */
  export type cineproductionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cineproductions to delete
     */
    where?: cineproductionsWhereInput
    /**
     * Limit how many cineproductions to delete.
     */
    limit?: number
  }

  /**
   * cineproductions.genres
   */
  export type cineproductions$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    where?: genresWhereInput
  }

  /**
   * cineproductions.idioms
   */
  export type cineproductions$idiomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    where?: idiomsWhereInput
  }

  /**
   * cineproductions.types
   */
  export type cineproductions$typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    where?: typesWhereInput
  }

  /**
   * cineproductions.film_genero
   */
  export type cineproductions$film_generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    where?: film_generoWhereInput
    orderBy?: film_generoOrderByWithRelationInput | film_generoOrderByWithRelationInput[]
    cursor?: film_generoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_generoScalarFieldEnum | Film_generoScalarFieldEnum[]
  }

  /**
   * cineproductions without action
   */
  export type cineproductionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
  }


  /**
   * Model film_genero
   */

  export type AggregateFilm_genero = {
    _count: Film_generoCountAggregateOutputType | null
    _avg: Film_generoAvgAggregateOutputType | null
    _sum: Film_generoSumAggregateOutputType | null
    _min: Film_generoMinAggregateOutputType | null
    _max: Film_generoMaxAggregateOutputType | null
  }

  export type Film_generoAvgAggregateOutputType = {
    cineproductions_id: number | null
    genero_id: number | null
  }

  export type Film_generoSumAggregateOutputType = {
    cineproductions_id: number | null
    genero_id: number | null
  }

  export type Film_generoMinAggregateOutputType = {
    cineproductions_id: number | null
    genero_id: number | null
  }

  export type Film_generoMaxAggregateOutputType = {
    cineproductions_id: number | null
    genero_id: number | null
  }

  export type Film_generoCountAggregateOutputType = {
    cineproductions_id: number
    genero_id: number
    _all: number
  }


  export type Film_generoAvgAggregateInputType = {
    cineproductions_id?: true
    genero_id?: true
  }

  export type Film_generoSumAggregateInputType = {
    cineproductions_id?: true
    genero_id?: true
  }

  export type Film_generoMinAggregateInputType = {
    cineproductions_id?: true
    genero_id?: true
  }

  export type Film_generoMaxAggregateInputType = {
    cineproductions_id?: true
    genero_id?: true
  }

  export type Film_generoCountAggregateInputType = {
    cineproductions_id?: true
    genero_id?: true
    _all?: true
  }

  export type Film_generoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_genero to aggregate.
     */
    where?: film_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_generos to fetch.
     */
    orderBy?: film_generoOrderByWithRelationInput | film_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: film_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned film_generos
    **/
    _count?: true | Film_generoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Film_generoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Film_generoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Film_generoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Film_generoMaxAggregateInputType
  }

  export type GetFilm_generoAggregateType<T extends Film_generoAggregateArgs> = {
        [P in keyof T & keyof AggregateFilm_genero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilm_genero[P]>
      : GetScalarType<T[P], AggregateFilm_genero[P]>
  }




  export type film_generoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: film_generoWhereInput
    orderBy?: film_generoOrderByWithAggregationInput | film_generoOrderByWithAggregationInput[]
    by: Film_generoScalarFieldEnum[] | Film_generoScalarFieldEnum
    having?: film_generoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Film_generoCountAggregateInputType | true
    _avg?: Film_generoAvgAggregateInputType
    _sum?: Film_generoSumAggregateInputType
    _min?: Film_generoMinAggregateInputType
    _max?: Film_generoMaxAggregateInputType
  }

  export type Film_generoGroupByOutputType = {
    cineproductions_id: number
    genero_id: number
    _count: Film_generoCountAggregateOutputType | null
    _avg: Film_generoAvgAggregateOutputType | null
    _sum: Film_generoSumAggregateOutputType | null
    _min: Film_generoMinAggregateOutputType | null
    _max: Film_generoMaxAggregateOutputType | null
  }

  type GetFilm_generoGroupByPayload<T extends film_generoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Film_generoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Film_generoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Film_generoGroupByOutputType[P]>
            : GetScalarType<T[P], Film_generoGroupByOutputType[P]>
        }
      >
    >


  export type film_generoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cineproductions_id?: boolean
    genero_id?: boolean
    cineproductions?: boolean | cineproductionsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_genero"]>

  export type film_generoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cineproductions_id?: boolean
    genero_id?: boolean
    cineproductions?: boolean | cineproductionsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_genero"]>

  export type film_generoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cineproductions_id?: boolean
    genero_id?: boolean
    cineproductions?: boolean | cineproductionsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["film_genero"]>

  export type film_generoSelectScalar = {
    cineproductions_id?: boolean
    genero_id?: boolean
  }

  export type film_generoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cineproductions_id" | "genero_id", ExtArgs["result"]["film_genero"]>
  export type film_generoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cineproductions?: boolean | cineproductionsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }
  export type film_generoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cineproductions?: boolean | cineproductionsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }
  export type film_generoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cineproductions?: boolean | cineproductionsDefaultArgs<ExtArgs>
    genres?: boolean | genresDefaultArgs<ExtArgs>
  }

  export type $film_generoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "film_genero"
    objects: {
      cineproductions: Prisma.$cineproductionsPayload<ExtArgs>
      genres: Prisma.$genresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cineproductions_id: number
      genero_id: number
    }, ExtArgs["result"]["film_genero"]>
    composites: {}
  }

  type film_generoGetPayload<S extends boolean | null | undefined | film_generoDefaultArgs> = $Result.GetResult<Prisma.$film_generoPayload, S>

  type film_generoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<film_generoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Film_generoCountAggregateInputType | true
    }

  export interface film_generoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['film_genero'], meta: { name: 'film_genero' } }
    /**
     * Find zero or one Film_genero that matches the filter.
     * @param {film_generoFindUniqueArgs} args - Arguments to find a Film_genero
     * @example
     * // Get one Film_genero
     * const film_genero = await prisma.film_genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends film_generoFindUniqueArgs>(args: SelectSubset<T, film_generoFindUniqueArgs<ExtArgs>>): Prisma__film_generoClient<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Film_genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {film_generoFindUniqueOrThrowArgs} args - Arguments to find a Film_genero
     * @example
     * // Get one Film_genero
     * const film_genero = await prisma.film_genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends film_generoFindUniqueOrThrowArgs>(args: SelectSubset<T, film_generoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__film_generoClient<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_generoFindFirstArgs} args - Arguments to find a Film_genero
     * @example
     * // Get one Film_genero
     * const film_genero = await prisma.film_genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends film_generoFindFirstArgs>(args?: SelectSubset<T, film_generoFindFirstArgs<ExtArgs>>): Prisma__film_generoClient<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Film_genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_generoFindFirstOrThrowArgs} args - Arguments to find a Film_genero
     * @example
     * // Get one Film_genero
     * const film_genero = await prisma.film_genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends film_generoFindFirstOrThrowArgs>(args?: SelectSubset<T, film_generoFindFirstOrThrowArgs<ExtArgs>>): Prisma__film_generoClient<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Film_generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_generoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Film_generos
     * const film_generos = await prisma.film_genero.findMany()
     * 
     * // Get first 10 Film_generos
     * const film_generos = await prisma.film_genero.findMany({ take: 10 })
     * 
     * // Only select the `cineproductions_id`
     * const film_generoWithCineproductions_idOnly = await prisma.film_genero.findMany({ select: { cineproductions_id: true } })
     * 
     */
    findMany<T extends film_generoFindManyArgs>(args?: SelectSubset<T, film_generoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Film_genero.
     * @param {film_generoCreateArgs} args - Arguments to create a Film_genero.
     * @example
     * // Create one Film_genero
     * const Film_genero = await prisma.film_genero.create({
     *   data: {
     *     // ... data to create a Film_genero
     *   }
     * })
     * 
     */
    create<T extends film_generoCreateArgs>(args: SelectSubset<T, film_generoCreateArgs<ExtArgs>>): Prisma__film_generoClient<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Film_generos.
     * @param {film_generoCreateManyArgs} args - Arguments to create many Film_generos.
     * @example
     * // Create many Film_generos
     * const film_genero = await prisma.film_genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends film_generoCreateManyArgs>(args?: SelectSubset<T, film_generoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Film_generos and returns the data saved in the database.
     * @param {film_generoCreateManyAndReturnArgs} args - Arguments to create many Film_generos.
     * @example
     * // Create many Film_generos
     * const film_genero = await prisma.film_genero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Film_generos and only return the `cineproductions_id`
     * const film_generoWithCineproductions_idOnly = await prisma.film_genero.createManyAndReturn({
     *   select: { cineproductions_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends film_generoCreateManyAndReturnArgs>(args?: SelectSubset<T, film_generoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Film_genero.
     * @param {film_generoDeleteArgs} args - Arguments to delete one Film_genero.
     * @example
     * // Delete one Film_genero
     * const Film_genero = await prisma.film_genero.delete({
     *   where: {
     *     // ... filter to delete one Film_genero
     *   }
     * })
     * 
     */
    delete<T extends film_generoDeleteArgs>(args: SelectSubset<T, film_generoDeleteArgs<ExtArgs>>): Prisma__film_generoClient<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Film_genero.
     * @param {film_generoUpdateArgs} args - Arguments to update one Film_genero.
     * @example
     * // Update one Film_genero
     * const film_genero = await prisma.film_genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends film_generoUpdateArgs>(args: SelectSubset<T, film_generoUpdateArgs<ExtArgs>>): Prisma__film_generoClient<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Film_generos.
     * @param {film_generoDeleteManyArgs} args - Arguments to filter Film_generos to delete.
     * @example
     * // Delete a few Film_generos
     * const { count } = await prisma.film_genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends film_generoDeleteManyArgs>(args?: SelectSubset<T, film_generoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_generoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Film_generos
     * const film_genero = await prisma.film_genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends film_generoUpdateManyArgs>(args: SelectSubset<T, film_generoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Film_generos and returns the data updated in the database.
     * @param {film_generoUpdateManyAndReturnArgs} args - Arguments to update many Film_generos.
     * @example
     * // Update many Film_generos
     * const film_genero = await prisma.film_genero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Film_generos and only return the `cineproductions_id`
     * const film_generoWithCineproductions_idOnly = await prisma.film_genero.updateManyAndReturn({
     *   select: { cineproductions_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends film_generoUpdateManyAndReturnArgs>(args: SelectSubset<T, film_generoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Film_genero.
     * @param {film_generoUpsertArgs} args - Arguments to update or create a Film_genero.
     * @example
     * // Update or create a Film_genero
     * const film_genero = await prisma.film_genero.upsert({
     *   create: {
     *     // ... data to create a Film_genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Film_genero we want to update
     *   }
     * })
     */
    upsert<T extends film_generoUpsertArgs>(args: SelectSubset<T, film_generoUpsertArgs<ExtArgs>>): Prisma__film_generoClient<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Film_generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_generoCountArgs} args - Arguments to filter Film_generos to count.
     * @example
     * // Count the number of Film_generos
     * const count = await prisma.film_genero.count({
     *   where: {
     *     // ... the filter for the Film_generos we want to count
     *   }
     * })
    **/
    count<T extends film_generoCountArgs>(
      args?: Subset<T, film_generoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Film_generoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Film_genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Film_generoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Film_generoAggregateArgs>(args: Subset<T, Film_generoAggregateArgs>): Prisma.PrismaPromise<GetFilm_generoAggregateType<T>>

    /**
     * Group by Film_genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {film_generoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends film_generoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: film_generoGroupByArgs['orderBy'] }
        : { orderBy?: film_generoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, film_generoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilm_generoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the film_genero model
   */
  readonly fields: film_generoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for film_genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__film_generoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cineproductions<T extends cineproductionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cineproductionsDefaultArgs<ExtArgs>>): Prisma__cineproductionsClient<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genres<T extends genresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, genresDefaultArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the film_genero model
   */
  interface film_generoFieldRefs {
    readonly cineproductions_id: FieldRef<"film_genero", 'Int'>
    readonly genero_id: FieldRef<"film_genero", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * film_genero findUnique
   */
  export type film_generoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    /**
     * Filter, which film_genero to fetch.
     */
    where: film_generoWhereUniqueInput
  }

  /**
   * film_genero findUniqueOrThrow
   */
  export type film_generoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    /**
     * Filter, which film_genero to fetch.
     */
    where: film_generoWhereUniqueInput
  }

  /**
   * film_genero findFirst
   */
  export type film_generoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    /**
     * Filter, which film_genero to fetch.
     */
    where?: film_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_generos to fetch.
     */
    orderBy?: film_generoOrderByWithRelationInput | film_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_generos.
     */
    cursor?: film_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_generos.
     */
    distinct?: Film_generoScalarFieldEnum | Film_generoScalarFieldEnum[]
  }

  /**
   * film_genero findFirstOrThrow
   */
  export type film_generoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    /**
     * Filter, which film_genero to fetch.
     */
    where?: film_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_generos to fetch.
     */
    orderBy?: film_generoOrderByWithRelationInput | film_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for film_generos.
     */
    cursor?: film_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of film_generos.
     */
    distinct?: Film_generoScalarFieldEnum | Film_generoScalarFieldEnum[]
  }

  /**
   * film_genero findMany
   */
  export type film_generoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    /**
     * Filter, which film_generos to fetch.
     */
    where?: film_generoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of film_generos to fetch.
     */
    orderBy?: film_generoOrderByWithRelationInput | film_generoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing film_generos.
     */
    cursor?: film_generoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` film_generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` film_generos.
     */
    skip?: number
    distinct?: Film_generoScalarFieldEnum | Film_generoScalarFieldEnum[]
  }

  /**
   * film_genero create
   */
  export type film_generoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    /**
     * The data needed to create a film_genero.
     */
    data: XOR<film_generoCreateInput, film_generoUncheckedCreateInput>
  }

  /**
   * film_genero createMany
   */
  export type film_generoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many film_generos.
     */
    data: film_generoCreateManyInput | film_generoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * film_genero createManyAndReturn
   */
  export type film_generoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * The data used to create many film_generos.
     */
    data: film_generoCreateManyInput | film_generoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_genero update
   */
  export type film_generoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    /**
     * The data needed to update a film_genero.
     */
    data: XOR<film_generoUpdateInput, film_generoUncheckedUpdateInput>
    /**
     * Choose, which film_genero to update.
     */
    where: film_generoWhereUniqueInput
  }

  /**
   * film_genero updateMany
   */
  export type film_generoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update film_generos.
     */
    data: XOR<film_generoUpdateManyMutationInput, film_generoUncheckedUpdateManyInput>
    /**
     * Filter which film_generos to update
     */
    where?: film_generoWhereInput
    /**
     * Limit how many film_generos to update.
     */
    limit?: number
  }

  /**
   * film_genero updateManyAndReturn
   */
  export type film_generoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * The data used to update film_generos.
     */
    data: XOR<film_generoUpdateManyMutationInput, film_generoUncheckedUpdateManyInput>
    /**
     * Filter which film_generos to update
     */
    where?: film_generoWhereInput
    /**
     * Limit how many film_generos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * film_genero upsert
   */
  export type film_generoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    /**
     * The filter to search for the film_genero to update in case it exists.
     */
    where: film_generoWhereUniqueInput
    /**
     * In case the film_genero found by the `where` argument doesn't exist, create a new film_genero with this data.
     */
    create: XOR<film_generoCreateInput, film_generoUncheckedCreateInput>
    /**
     * In case the film_genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<film_generoUpdateInput, film_generoUncheckedUpdateInput>
  }

  /**
   * film_genero delete
   */
  export type film_generoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    /**
     * Filter which film_genero to delete.
     */
    where: film_generoWhereUniqueInput
  }

  /**
   * film_genero deleteMany
   */
  export type film_generoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which film_generos to delete
     */
    where?: film_generoWhereInput
    /**
     * Limit how many film_generos to delete.
     */
    limit?: number
  }

  /**
   * film_genero without action
   */
  export type film_generoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
  }


  /**
   * Model genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    id: number | null
  }

  export type GenresSumAggregateOutputType = {
    id: number | null
  }

  export type GenresMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    id?: true
  }

  export type GenresSumAggregateInputType = {
    id?: true
  }

  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to aggregate.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genresWhereInput
    orderBy?: genresOrderByWithAggregationInput | genresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: number
    name: string | null
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cineproductions?: boolean | genres$cineproductionsArgs<ExtArgs>
    film_genero?: boolean | genres$film_generoArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type genresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type genresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genres"]>
  export type genresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cineproductions?: boolean | genres$cineproductionsArgs<ExtArgs>
    film_genero?: boolean | genres$film_generoArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type genresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type genresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genres"
    objects: {
      cineproductions: Prisma.$cineproductionsPayload<ExtArgs>[]
      film_genero: Prisma.$film_generoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type genresGetPayload<S extends boolean | null | undefined | genresDefaultArgs> = $Result.GetResult<Prisma.$genresPayload, S>

  type genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<genresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genres'], meta: { name: 'genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {genresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genresFindUniqueArgs>(args: SelectSubset<T, genresFindUniqueArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {genresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genresFindUniqueOrThrowArgs>(args: SelectSubset<T, genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genresFindFirstArgs>(args?: SelectSubset<T, genresFindFirstArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genresFindFirstOrThrowArgs>(args?: SelectSubset<T, genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends genresFindManyArgs>(args?: SelectSubset<T, genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genres.
     * @param {genresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends genresCreateArgs>(args: SelectSubset<T, genresCreateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {genresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genresCreateManyArgs>(args?: SelectSubset<T, genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {genresCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends genresCreateManyAndReturnArgs>(args?: SelectSubset<T, genresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genres.
     * @param {genresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends genresDeleteArgs>(args: SelectSubset<T, genresDeleteArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genres.
     * @param {genresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genresUpdateArgs>(args: SelectSubset<T, genresUpdateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {genresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genresDeleteManyArgs>(args?: SelectSubset<T, genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genresUpdateManyArgs>(args: SelectSubset<T, genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {genresUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends genresUpdateManyAndReturnArgs>(args: SelectSubset<T, genresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genres.
     * @param {genresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends genresUpsertArgs>(args: SelectSubset<T, genresUpsertArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genresCountArgs>(
      args?: Subset<T, genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genresGroupByArgs['orderBy'] }
        : { orderBy?: genresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genres model
   */
  readonly fields: genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cineproductions<T extends genres$cineproductionsArgs<ExtArgs> = {}>(args?: Subset<T, genres$cineproductionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    film_genero<T extends genres$film_generoArgs<ExtArgs> = {}>(args?: Subset<T, genres$film_generoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$film_generoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the genres model
   */
  interface genresFieldRefs {
    readonly id: FieldRef<"genres", 'Int'>
    readonly name: FieldRef<"genres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * genres findUnique
   */
  export type genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findUniqueOrThrow
   */
  export type genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findFirst
   */
  export type genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findFirstOrThrow
   */
  export type genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findMany
   */
  export type genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres create
   */
  export type genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to create a genres.
     */
    data?: XOR<genresCreateInput, genresUncheckedCreateInput>
  }

  /**
   * genres createMany
   */
  export type genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres createManyAndReturn
   */
  export type genresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres update
   */
  export type genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to update a genres.
     */
    data: XOR<genresUpdateInput, genresUncheckedUpdateInput>
    /**
     * Choose, which genres to update.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres updateMany
   */
  export type genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres updateManyAndReturn
   */
  export type genresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres upsert
   */
  export type genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The filter to search for the genres to update in case it exists.
     */
    where: genresWhereUniqueInput
    /**
     * In case the genres found by the `where` argument doesn't exist, create a new genres with this data.
     */
    create: XOR<genresCreateInput, genresUncheckedCreateInput>
    /**
     * In case the genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genresUpdateInput, genresUncheckedUpdateInput>
  }

  /**
   * genres delete
   */
  export type genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter which genres to delete.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres deleteMany
   */
  export type genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to delete.
     */
    limit?: number
  }

  /**
   * genres.cineproductions
   */
  export type genres$cineproductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    where?: cineproductionsWhereInput
    orderBy?: cineproductionsOrderByWithRelationInput | cineproductionsOrderByWithRelationInput[]
    cursor?: cineproductionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CineproductionsScalarFieldEnum | CineproductionsScalarFieldEnum[]
  }

  /**
   * genres.film_genero
   */
  export type genres$film_generoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the film_genero
     */
    select?: film_generoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the film_genero
     */
    omit?: film_generoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: film_generoInclude<ExtArgs> | null
    where?: film_generoWhereInput
    orderBy?: film_generoOrderByWithRelationInput | film_generoOrderByWithRelationInput[]
    cursor?: film_generoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Film_generoScalarFieldEnum | Film_generoScalarFieldEnum[]
  }

  /**
   * genres without action
   */
  export type genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
  }


  /**
   * Model idioms
   */

  export type AggregateIdioms = {
    _count: IdiomsCountAggregateOutputType | null
    _avg: IdiomsAvgAggregateOutputType | null
    _sum: IdiomsSumAggregateOutputType | null
    _min: IdiomsMinAggregateOutputType | null
    _max: IdiomsMaxAggregateOutputType | null
  }

  export type IdiomsAvgAggregateOutputType = {
    id: number | null
  }

  export type IdiomsSumAggregateOutputType = {
    id: number | null
  }

  export type IdiomsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type IdiomsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type IdiomsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type IdiomsAvgAggregateInputType = {
    id?: true
  }

  export type IdiomsSumAggregateInputType = {
    id?: true
  }

  export type IdiomsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type IdiomsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type IdiomsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type IdiomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idioms to aggregate.
     */
    where?: idiomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idioms to fetch.
     */
    orderBy?: idiomsOrderByWithRelationInput | idiomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idiomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idioms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idioms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idioms
    **/
    _count?: true | IdiomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdiomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdiomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdiomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdiomsMaxAggregateInputType
  }

  export type GetIdiomsAggregateType<T extends IdiomsAggregateArgs> = {
        [P in keyof T & keyof AggregateIdioms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdioms[P]>
      : GetScalarType<T[P], AggregateIdioms[P]>
  }




  export type idiomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idiomsWhereInput
    orderBy?: idiomsOrderByWithAggregationInput | idiomsOrderByWithAggregationInput[]
    by: IdiomsScalarFieldEnum[] | IdiomsScalarFieldEnum
    having?: idiomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdiomsCountAggregateInputType | true
    _avg?: IdiomsAvgAggregateInputType
    _sum?: IdiomsSumAggregateInputType
    _min?: IdiomsMinAggregateInputType
    _max?: IdiomsMaxAggregateInputType
  }

  export type IdiomsGroupByOutputType = {
    id: number
    name: string | null
    _count: IdiomsCountAggregateOutputType | null
    _avg: IdiomsAvgAggregateOutputType | null
    _sum: IdiomsSumAggregateOutputType | null
    _min: IdiomsMinAggregateOutputType | null
    _max: IdiomsMaxAggregateOutputType | null
  }

  type GetIdiomsGroupByPayload<T extends idiomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdiomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdiomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdiomsGroupByOutputType[P]>
            : GetScalarType<T[P], IdiomsGroupByOutputType[P]>
        }
      >
    >


  export type idiomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cineproductions?: boolean | idioms$cineproductionsArgs<ExtArgs>
    _count?: boolean | IdiomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idioms"]>

  export type idiomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["idioms"]>

  export type idiomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["idioms"]>

  export type idiomsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type idiomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["idioms"]>
  export type idiomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cineproductions?: boolean | idioms$cineproductionsArgs<ExtArgs>
    _count?: boolean | IdiomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type idiomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type idiomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $idiomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idioms"
    objects: {
      cineproductions: Prisma.$cineproductionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["idioms"]>
    composites: {}
  }

  type idiomsGetPayload<S extends boolean | null | undefined | idiomsDefaultArgs> = $Result.GetResult<Prisma.$idiomsPayload, S>

  type idiomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idiomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdiomsCountAggregateInputType | true
    }

  export interface idiomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idioms'], meta: { name: 'idioms' } }
    /**
     * Find zero or one Idioms that matches the filter.
     * @param {idiomsFindUniqueArgs} args - Arguments to find a Idioms
     * @example
     * // Get one Idioms
     * const idioms = await prisma.idioms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idiomsFindUniqueArgs>(args: SelectSubset<T, idiomsFindUniqueArgs<ExtArgs>>): Prisma__idiomsClient<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idioms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idiomsFindUniqueOrThrowArgs} args - Arguments to find a Idioms
     * @example
     * // Get one Idioms
     * const idioms = await prisma.idioms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idiomsFindUniqueOrThrowArgs>(args: SelectSubset<T, idiomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idiomsClient<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idioms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomsFindFirstArgs} args - Arguments to find a Idioms
     * @example
     * // Get one Idioms
     * const idioms = await prisma.idioms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idiomsFindFirstArgs>(args?: SelectSubset<T, idiomsFindFirstArgs<ExtArgs>>): Prisma__idiomsClient<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idioms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomsFindFirstOrThrowArgs} args - Arguments to find a Idioms
     * @example
     * // Get one Idioms
     * const idioms = await prisma.idioms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idiomsFindFirstOrThrowArgs>(args?: SelectSubset<T, idiomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__idiomsClient<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idioms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idioms
     * const idioms = await prisma.idioms.findMany()
     * 
     * // Get first 10 Idioms
     * const idioms = await prisma.idioms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idiomsWithIdOnly = await prisma.idioms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idiomsFindManyArgs>(args?: SelectSubset<T, idiomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idioms.
     * @param {idiomsCreateArgs} args - Arguments to create a Idioms.
     * @example
     * // Create one Idioms
     * const Idioms = await prisma.idioms.create({
     *   data: {
     *     // ... data to create a Idioms
     *   }
     * })
     * 
     */
    create<T extends idiomsCreateArgs>(args: SelectSubset<T, idiomsCreateArgs<ExtArgs>>): Prisma__idiomsClient<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idioms.
     * @param {idiomsCreateManyArgs} args - Arguments to create many Idioms.
     * @example
     * // Create many Idioms
     * const idioms = await prisma.idioms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idiomsCreateManyArgs>(args?: SelectSubset<T, idiomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Idioms and returns the data saved in the database.
     * @param {idiomsCreateManyAndReturnArgs} args - Arguments to create many Idioms.
     * @example
     * // Create many Idioms
     * const idioms = await prisma.idioms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Idioms and only return the `id`
     * const idiomsWithIdOnly = await prisma.idioms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends idiomsCreateManyAndReturnArgs>(args?: SelectSubset<T, idiomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Idioms.
     * @param {idiomsDeleteArgs} args - Arguments to delete one Idioms.
     * @example
     * // Delete one Idioms
     * const Idioms = await prisma.idioms.delete({
     *   where: {
     *     // ... filter to delete one Idioms
     *   }
     * })
     * 
     */
    delete<T extends idiomsDeleteArgs>(args: SelectSubset<T, idiomsDeleteArgs<ExtArgs>>): Prisma__idiomsClient<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idioms.
     * @param {idiomsUpdateArgs} args - Arguments to update one Idioms.
     * @example
     * // Update one Idioms
     * const idioms = await prisma.idioms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idiomsUpdateArgs>(args: SelectSubset<T, idiomsUpdateArgs<ExtArgs>>): Prisma__idiomsClient<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idioms.
     * @param {idiomsDeleteManyArgs} args - Arguments to filter Idioms to delete.
     * @example
     * // Delete a few Idioms
     * const { count } = await prisma.idioms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idiomsDeleteManyArgs>(args?: SelectSubset<T, idiomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idioms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idioms
     * const idioms = await prisma.idioms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idiomsUpdateManyArgs>(args: SelectSubset<T, idiomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idioms and returns the data updated in the database.
     * @param {idiomsUpdateManyAndReturnArgs} args - Arguments to update many Idioms.
     * @example
     * // Update many Idioms
     * const idioms = await prisma.idioms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Idioms and only return the `id`
     * const idiomsWithIdOnly = await prisma.idioms.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends idiomsUpdateManyAndReturnArgs>(args: SelectSubset<T, idiomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Idioms.
     * @param {idiomsUpsertArgs} args - Arguments to update or create a Idioms.
     * @example
     * // Update or create a Idioms
     * const idioms = await prisma.idioms.upsert({
     *   create: {
     *     // ... data to create a Idioms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idioms we want to update
     *   }
     * })
     */
    upsert<T extends idiomsUpsertArgs>(args: SelectSubset<T, idiomsUpsertArgs<ExtArgs>>): Prisma__idiomsClient<$Result.GetResult<Prisma.$idiomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idioms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomsCountArgs} args - Arguments to filter Idioms to count.
     * @example
     * // Count the number of Idioms
     * const count = await prisma.idioms.count({
     *   where: {
     *     // ... the filter for the Idioms we want to count
     *   }
     * })
    **/
    count<T extends idiomsCountArgs>(
      args?: Subset<T, idiomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdiomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idioms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdiomsAggregateArgs>(args: Subset<T, IdiomsAggregateArgs>): Prisma.PrismaPromise<GetIdiomsAggregateType<T>>

    /**
     * Group by Idioms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idiomsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends idiomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idiomsGroupByArgs['orderBy'] }
        : { orderBy?: idiomsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, idiomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdiomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idioms model
   */
  readonly fields: idiomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idioms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idiomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cineproductions<T extends idioms$cineproductionsArgs<ExtArgs> = {}>(args?: Subset<T, idioms$cineproductionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the idioms model
   */
  interface idiomsFieldRefs {
    readonly id: FieldRef<"idioms", 'Int'>
    readonly name: FieldRef<"idioms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * idioms findUnique
   */
  export type idiomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    /**
     * Filter, which idioms to fetch.
     */
    where: idiomsWhereUniqueInput
  }

  /**
   * idioms findUniqueOrThrow
   */
  export type idiomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    /**
     * Filter, which idioms to fetch.
     */
    where: idiomsWhereUniqueInput
  }

  /**
   * idioms findFirst
   */
  export type idiomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    /**
     * Filter, which idioms to fetch.
     */
    where?: idiomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idioms to fetch.
     */
    orderBy?: idiomsOrderByWithRelationInput | idiomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idioms.
     */
    cursor?: idiomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idioms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idioms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idioms.
     */
    distinct?: IdiomsScalarFieldEnum | IdiomsScalarFieldEnum[]
  }

  /**
   * idioms findFirstOrThrow
   */
  export type idiomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    /**
     * Filter, which idioms to fetch.
     */
    where?: idiomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idioms to fetch.
     */
    orderBy?: idiomsOrderByWithRelationInput | idiomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idioms.
     */
    cursor?: idiomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idioms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idioms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idioms.
     */
    distinct?: IdiomsScalarFieldEnum | IdiomsScalarFieldEnum[]
  }

  /**
   * idioms findMany
   */
  export type idiomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    /**
     * Filter, which idioms to fetch.
     */
    where?: idiomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idioms to fetch.
     */
    orderBy?: idiomsOrderByWithRelationInput | idiomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idioms.
     */
    cursor?: idiomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idioms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idioms.
     */
    skip?: number
    distinct?: IdiomsScalarFieldEnum | IdiomsScalarFieldEnum[]
  }

  /**
   * idioms create
   */
  export type idiomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    /**
     * The data needed to create a idioms.
     */
    data?: XOR<idiomsCreateInput, idiomsUncheckedCreateInput>
  }

  /**
   * idioms createMany
   */
  export type idiomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idioms.
     */
    data: idiomsCreateManyInput | idiomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idioms createManyAndReturn
   */
  export type idiomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * The data used to create many idioms.
     */
    data: idiomsCreateManyInput | idiomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idioms update
   */
  export type idiomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    /**
     * The data needed to update a idioms.
     */
    data: XOR<idiomsUpdateInput, idiomsUncheckedUpdateInput>
    /**
     * Choose, which idioms to update.
     */
    where: idiomsWhereUniqueInput
  }

  /**
   * idioms updateMany
   */
  export type idiomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idioms.
     */
    data: XOR<idiomsUpdateManyMutationInput, idiomsUncheckedUpdateManyInput>
    /**
     * Filter which idioms to update
     */
    where?: idiomsWhereInput
    /**
     * Limit how many idioms to update.
     */
    limit?: number
  }

  /**
   * idioms updateManyAndReturn
   */
  export type idiomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * The data used to update idioms.
     */
    data: XOR<idiomsUpdateManyMutationInput, idiomsUncheckedUpdateManyInput>
    /**
     * Filter which idioms to update
     */
    where?: idiomsWhereInput
    /**
     * Limit how many idioms to update.
     */
    limit?: number
  }

  /**
   * idioms upsert
   */
  export type idiomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    /**
     * The filter to search for the idioms to update in case it exists.
     */
    where: idiomsWhereUniqueInput
    /**
     * In case the idioms found by the `where` argument doesn't exist, create a new idioms with this data.
     */
    create: XOR<idiomsCreateInput, idiomsUncheckedCreateInput>
    /**
     * In case the idioms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idiomsUpdateInput, idiomsUncheckedUpdateInput>
  }

  /**
   * idioms delete
   */
  export type idiomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
    /**
     * Filter which idioms to delete.
     */
    where: idiomsWhereUniqueInput
  }

  /**
   * idioms deleteMany
   */
  export type idiomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idioms to delete
     */
    where?: idiomsWhereInput
    /**
     * Limit how many idioms to delete.
     */
    limit?: number
  }

  /**
   * idioms.cineproductions
   */
  export type idioms$cineproductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    where?: cineproductionsWhereInput
    orderBy?: cineproductionsOrderByWithRelationInput | cineproductionsOrderByWithRelationInput[]
    cursor?: cineproductionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CineproductionsScalarFieldEnum | CineproductionsScalarFieldEnum[]
  }

  /**
   * idioms without action
   */
  export type idiomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idioms
     */
    select?: idiomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idioms
     */
    omit?: idiomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: idiomsInclude<ExtArgs> | null
  }


  /**
   * Model types
   */

  export type AggregateTypes = {
    _count: TypesCountAggregateOutputType | null
    _avg: TypesAvgAggregateOutputType | null
    _sum: TypesSumAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  export type TypesAvgAggregateOutputType = {
    id: number | null
  }

  export type TypesSumAggregateOutputType = {
    id: number | null
  }

  export type TypesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TypesAvgAggregateInputType = {
    id?: true
  }

  export type TypesSumAggregateInputType = {
    id?: true
  }

  export type TypesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which types to aggregate.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned types
    **/
    _count?: true | TypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypesMaxAggregateInputType
  }

  export type GetTypesAggregateType<T extends TypesAggregateArgs> = {
        [P in keyof T & keyof AggregateTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypes[P]>
      : GetScalarType<T[P], AggregateTypes[P]>
  }




  export type typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: typesWhereInput
    orderBy?: typesOrderByWithAggregationInput | typesOrderByWithAggregationInput[]
    by: TypesScalarFieldEnum[] | TypesScalarFieldEnum
    having?: typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypesCountAggregateInputType | true
    _avg?: TypesAvgAggregateInputType
    _sum?: TypesSumAggregateInputType
    _min?: TypesMinAggregateInputType
    _max?: TypesMaxAggregateInputType
  }

  export type TypesGroupByOutputType = {
    id: number
    name: string | null
    _count: TypesCountAggregateOutputType | null
    _avg: TypesAvgAggregateOutputType | null
    _sum: TypesSumAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  type GetTypesGroupByPayload<T extends typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypesGroupByOutputType[P]>
            : GetScalarType<T[P], TypesGroupByOutputType[P]>
        }
      >
    >


  export type typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cineproductions?: boolean | types$cineproductionsArgs<ExtArgs>
    _count?: boolean | TypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["types"]>

  export type typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["types"]>

  export type typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["types"]>

  export type typesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["types"]>
  export type typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cineproductions?: boolean | types$cineproductionsArgs<ExtArgs>
    _count?: boolean | TypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "types"
    objects: {
      cineproductions: Prisma.$cineproductionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["types"]>
    composites: {}
  }

  type typesGetPayload<S extends boolean | null | undefined | typesDefaultArgs> = $Result.GetResult<Prisma.$typesPayload, S>

  type typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypesCountAggregateInputType | true
    }

  export interface typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['types'], meta: { name: 'types' } }
    /**
     * Find zero or one Types that matches the filter.
     * @param {typesFindUniqueArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends typesFindUniqueArgs>(args: SelectSubset<T, typesFindUniqueArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {typesFindUniqueOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends typesFindUniqueOrThrowArgs>(args: SelectSubset<T, typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesFindFirstArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends typesFindFirstArgs>(args?: SelectSubset<T, typesFindFirstArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesFindFirstOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends typesFindFirstOrThrowArgs>(args?: SelectSubset<T, typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.types.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typesWithIdOnly = await prisma.types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends typesFindManyArgs>(args?: SelectSubset<T, typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Types.
     * @param {typesCreateArgs} args - Arguments to create a Types.
     * @example
     * // Create one Types
     * const Types = await prisma.types.create({
     *   data: {
     *     // ... data to create a Types
     *   }
     * })
     * 
     */
    create<T extends typesCreateArgs>(args: SelectSubset<T, typesCreateArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {typesCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const types = await prisma.types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends typesCreateManyArgs>(args?: SelectSubset<T, typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {typesCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const types = await prisma.types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typesWithIdOnly = await prisma.types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends typesCreateManyAndReturnArgs>(args?: SelectSubset<T, typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Types.
     * @param {typesDeleteArgs} args - Arguments to delete one Types.
     * @example
     * // Delete one Types
     * const Types = await prisma.types.delete({
     *   where: {
     *     // ... filter to delete one Types
     *   }
     * })
     * 
     */
    delete<T extends typesDeleteArgs>(args: SelectSubset<T, typesDeleteArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Types.
     * @param {typesUpdateArgs} args - Arguments to update one Types.
     * @example
     * // Update one Types
     * const types = await prisma.types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends typesUpdateArgs>(args: SelectSubset<T, typesUpdateArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {typesDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends typesDeleteManyArgs>(args?: SelectSubset<T, typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends typesUpdateManyArgs>(args: SelectSubset<T, typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types and returns the data updated in the database.
     * @param {typesUpdateManyAndReturnArgs} args - Arguments to update many Types.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Types and only return the `id`
     * const typesWithIdOnly = await prisma.types.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends typesUpdateManyAndReturnArgs>(args: SelectSubset<T, typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Types.
     * @param {typesUpsertArgs} args - Arguments to update or create a Types.
     * @example
     * // Update or create a Types
     * const types = await prisma.types.upsert({
     *   create: {
     *     // ... data to create a Types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Types we want to update
     *   }
     * })
     */
    upsert<T extends typesUpsertArgs>(args: SelectSubset<T, typesUpsertArgs<ExtArgs>>): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.types.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends typesCountArgs>(
      args?: Subset<T, typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypesAggregateArgs>(args: Subset<T, TypesAggregateArgs>): Prisma.PrismaPromise<GetTypesAggregateType<T>>

    /**
     * Group by Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: typesGroupByArgs['orderBy'] }
        : { orderBy?: typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the types model
   */
  readonly fields: typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cineproductions<T extends types$cineproductionsArgs<ExtArgs> = {}>(args?: Subset<T, types$cineproductionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cineproductionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the types model
   */
  interface typesFieldRefs {
    readonly id: FieldRef<"types", 'Int'>
    readonly name: FieldRef<"types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * types findUnique
   */
  export type typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types findUniqueOrThrow
   */
  export type typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types findFirst
   */
  export type typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * types findFirstOrThrow
   */
  export type typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * types findMany
   */
  export type typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing types.
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * types create
   */
  export type typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * The data needed to create a types.
     */
    data?: XOR<typesCreateInput, typesUncheckedCreateInput>
  }

  /**
   * types createMany
   */
  export type typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many types.
     */
    data: typesCreateManyInput | typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * types createManyAndReturn
   */
  export type typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * The data used to create many types.
     */
    data: typesCreateManyInput | typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * types update
   */
  export type typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * The data needed to update a types.
     */
    data: XOR<typesUpdateInput, typesUncheckedUpdateInput>
    /**
     * Choose, which types to update.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types updateMany
   */
  export type typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update types.
     */
    data: XOR<typesUpdateManyMutationInput, typesUncheckedUpdateManyInput>
    /**
     * Filter which types to update
     */
    where?: typesWhereInput
    /**
     * Limit how many types to update.
     */
    limit?: number
  }

  /**
   * types updateManyAndReturn
   */
  export type typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * The data used to update types.
     */
    data: XOR<typesUpdateManyMutationInput, typesUncheckedUpdateManyInput>
    /**
     * Filter which types to update
     */
    where?: typesWhereInput
    /**
     * Limit how many types to update.
     */
    limit?: number
  }

  /**
   * types upsert
   */
  export type typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * The filter to search for the types to update in case it exists.
     */
    where: typesWhereUniqueInput
    /**
     * In case the types found by the `where` argument doesn't exist, create a new types with this data.
     */
    create: XOR<typesCreateInput, typesUncheckedCreateInput>
    /**
     * In case the types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<typesUpdateInput, typesUncheckedUpdateInput>
  }

  /**
   * types delete
   */
  export type typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
    /**
     * Filter which types to delete.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types deleteMany
   */
  export type typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which types to delete
     */
    where?: typesWhereInput
    /**
     * Limit how many types to delete.
     */
    limit?: number
  }

  /**
   * types.cineproductions
   */
  export type types$cineproductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cineproductions
     */
    select?: cineproductionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cineproductions
     */
    omit?: cineproductionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cineproductionsInclude<ExtArgs> | null
    where?: cineproductionsWhereInput
    orderBy?: cineproductionsOrderByWithRelationInput | cineproductionsOrderByWithRelationInput[]
    cursor?: cineproductionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CineproductionsScalarFieldEnum | CineproductionsScalarFieldEnum[]
  }

  /**
   * types without action
   */
  export type typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the types
     */
    omit?: typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CineproductionsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    release_date: 'release_date',
    nationality: 'nationality',
    idiom_id: 'idiom_id',
    genre_id: 'genre_id',
    directors: 'directors',
    type_id: 'type_id'
  };

  export type CineproductionsScalarFieldEnum = (typeof CineproductionsScalarFieldEnum)[keyof typeof CineproductionsScalarFieldEnum]


  export const Film_generoScalarFieldEnum: {
    cineproductions_id: 'cineproductions_id',
    genero_id: 'genero_id'
  };

  export type Film_generoScalarFieldEnum = (typeof Film_generoScalarFieldEnum)[keyof typeof Film_generoScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const IdiomsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type IdiomsScalarFieldEnum = (typeof IdiomsScalarFieldEnum)[keyof typeof IdiomsScalarFieldEnum]


  export const TypesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TypesScalarFieldEnum = (typeof TypesScalarFieldEnum)[keyof typeof TypesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type cineproductionsWhereInput = {
    AND?: cineproductionsWhereInput | cineproductionsWhereInput[]
    OR?: cineproductionsWhereInput[]
    NOT?: cineproductionsWhereInput | cineproductionsWhereInput[]
    id?: IntFilter<"cineproductions"> | number
    title?: StringNullableFilter<"cineproductions"> | string | null
    release_date?: IntNullableFilter<"cineproductions"> | number | null
    nationality?: StringNullableFilter<"cineproductions"> | string | null
    idiom_id?: IntNullableFilter<"cineproductions"> | number | null
    genre_id?: IntNullableFilter<"cineproductions"> | number | null
    directors?: StringNullableFilter<"cineproductions"> | string | null
    type_id?: IntNullableFilter<"cineproductions"> | number | null
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
    idioms?: XOR<IdiomsNullableScalarRelationFilter, idiomsWhereInput> | null
    types?: XOR<TypesNullableScalarRelationFilter, typesWhereInput> | null
    film_genero?: Film_generoListRelationFilter
  }

  export type cineproductionsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    idiom_id?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    directors?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    genres?: genresOrderByWithRelationInput
    idioms?: idiomsOrderByWithRelationInput
    types?: typesOrderByWithRelationInput
    film_genero?: film_generoOrderByRelationAggregateInput
  }

  export type cineproductionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cineproductionsWhereInput | cineproductionsWhereInput[]
    OR?: cineproductionsWhereInput[]
    NOT?: cineproductionsWhereInput | cineproductionsWhereInput[]
    title?: StringNullableFilter<"cineproductions"> | string | null
    release_date?: IntNullableFilter<"cineproductions"> | number | null
    nationality?: StringNullableFilter<"cineproductions"> | string | null
    idiom_id?: IntNullableFilter<"cineproductions"> | number | null
    genre_id?: IntNullableFilter<"cineproductions"> | number | null
    directors?: StringNullableFilter<"cineproductions"> | string | null
    type_id?: IntNullableFilter<"cineproductions"> | number | null
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
    idioms?: XOR<IdiomsNullableScalarRelationFilter, idiomsWhereInput> | null
    types?: XOR<TypesNullableScalarRelationFilter, typesWhereInput> | null
    film_genero?: Film_generoListRelationFilter
  }, "id">

  export type cineproductionsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    idiom_id?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    directors?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    _count?: cineproductionsCountOrderByAggregateInput
    _avg?: cineproductionsAvgOrderByAggregateInput
    _max?: cineproductionsMaxOrderByAggregateInput
    _min?: cineproductionsMinOrderByAggregateInput
    _sum?: cineproductionsSumOrderByAggregateInput
  }

  export type cineproductionsScalarWhereWithAggregatesInput = {
    AND?: cineproductionsScalarWhereWithAggregatesInput | cineproductionsScalarWhereWithAggregatesInput[]
    OR?: cineproductionsScalarWhereWithAggregatesInput[]
    NOT?: cineproductionsScalarWhereWithAggregatesInput | cineproductionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cineproductions"> | number
    title?: StringNullableWithAggregatesFilter<"cineproductions"> | string | null
    release_date?: IntNullableWithAggregatesFilter<"cineproductions"> | number | null
    nationality?: StringNullableWithAggregatesFilter<"cineproductions"> | string | null
    idiom_id?: IntNullableWithAggregatesFilter<"cineproductions"> | number | null
    genre_id?: IntNullableWithAggregatesFilter<"cineproductions"> | number | null
    directors?: StringNullableWithAggregatesFilter<"cineproductions"> | string | null
    type_id?: IntNullableWithAggregatesFilter<"cineproductions"> | number | null
  }

  export type film_generoWhereInput = {
    AND?: film_generoWhereInput | film_generoWhereInput[]
    OR?: film_generoWhereInput[]
    NOT?: film_generoWhereInput | film_generoWhereInput[]
    cineproductions_id?: IntFilter<"film_genero"> | number
    genero_id?: IntFilter<"film_genero"> | number
    cineproductions?: XOR<CineproductionsScalarRelationFilter, cineproductionsWhereInput>
    genres?: XOR<GenresScalarRelationFilter, genresWhereInput>
  }

  export type film_generoOrderByWithRelationInput = {
    cineproductions_id?: SortOrder
    genero_id?: SortOrder
    cineproductions?: cineproductionsOrderByWithRelationInput
    genres?: genresOrderByWithRelationInput
  }

  export type film_generoWhereUniqueInput = Prisma.AtLeast<{
    cineproductions_id_genero_id?: film_generoCineproductions_idGenero_idCompoundUniqueInput
    AND?: film_generoWhereInput | film_generoWhereInput[]
    OR?: film_generoWhereInput[]
    NOT?: film_generoWhereInput | film_generoWhereInput[]
    cineproductions_id?: IntFilter<"film_genero"> | number
    genero_id?: IntFilter<"film_genero"> | number
    cineproductions?: XOR<CineproductionsScalarRelationFilter, cineproductionsWhereInput>
    genres?: XOR<GenresScalarRelationFilter, genresWhereInput>
  }, "cineproductions_id_genero_id">

  export type film_generoOrderByWithAggregationInput = {
    cineproductions_id?: SortOrder
    genero_id?: SortOrder
    _count?: film_generoCountOrderByAggregateInput
    _avg?: film_generoAvgOrderByAggregateInput
    _max?: film_generoMaxOrderByAggregateInput
    _min?: film_generoMinOrderByAggregateInput
    _sum?: film_generoSumOrderByAggregateInput
  }

  export type film_generoScalarWhereWithAggregatesInput = {
    AND?: film_generoScalarWhereWithAggregatesInput | film_generoScalarWhereWithAggregatesInput[]
    OR?: film_generoScalarWhereWithAggregatesInput[]
    NOT?: film_generoScalarWhereWithAggregatesInput | film_generoScalarWhereWithAggregatesInput[]
    cineproductions_id?: IntWithAggregatesFilter<"film_genero"> | number
    genero_id?: IntWithAggregatesFilter<"film_genero"> | number
  }

  export type genresWhereInput = {
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    id?: IntFilter<"genres"> | number
    name?: StringNullableFilter<"genres"> | string | null
    cineproductions?: CineproductionsListRelationFilter
    film_genero?: Film_generoListRelationFilter
  }

  export type genresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    cineproductions?: cineproductionsOrderByRelationAggregateInput
    film_genero?: film_generoOrderByRelationAggregateInput
  }

  export type genresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    name?: StringNullableFilter<"genres"> | string | null
    cineproductions?: CineproductionsListRelationFilter
    film_genero?: Film_generoListRelationFilter
  }, "id">

  export type genresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: genresCountOrderByAggregateInput
    _avg?: genresAvgOrderByAggregateInput
    _max?: genresMaxOrderByAggregateInput
    _min?: genresMinOrderByAggregateInput
    _sum?: genresSumOrderByAggregateInput
  }

  export type genresScalarWhereWithAggregatesInput = {
    AND?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    OR?: genresScalarWhereWithAggregatesInput[]
    NOT?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"genres"> | number
    name?: StringNullableWithAggregatesFilter<"genres"> | string | null
  }

  export type idiomsWhereInput = {
    AND?: idiomsWhereInput | idiomsWhereInput[]
    OR?: idiomsWhereInput[]
    NOT?: idiomsWhereInput | idiomsWhereInput[]
    id?: IntFilter<"idioms"> | number
    name?: StringNullableFilter<"idioms"> | string | null
    cineproductions?: CineproductionsListRelationFilter
  }

  export type idiomsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    cineproductions?: cineproductionsOrderByRelationAggregateInput
  }

  export type idiomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: idiomsWhereInput | idiomsWhereInput[]
    OR?: idiomsWhereInput[]
    NOT?: idiomsWhereInput | idiomsWhereInput[]
    name?: StringNullableFilter<"idioms"> | string | null
    cineproductions?: CineproductionsListRelationFilter
  }, "id">

  export type idiomsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: idiomsCountOrderByAggregateInput
    _avg?: idiomsAvgOrderByAggregateInput
    _max?: idiomsMaxOrderByAggregateInput
    _min?: idiomsMinOrderByAggregateInput
    _sum?: idiomsSumOrderByAggregateInput
  }

  export type idiomsScalarWhereWithAggregatesInput = {
    AND?: idiomsScalarWhereWithAggregatesInput | idiomsScalarWhereWithAggregatesInput[]
    OR?: idiomsScalarWhereWithAggregatesInput[]
    NOT?: idiomsScalarWhereWithAggregatesInput | idiomsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"idioms"> | number
    name?: StringNullableWithAggregatesFilter<"idioms"> | string | null
  }

  export type typesWhereInput = {
    AND?: typesWhereInput | typesWhereInput[]
    OR?: typesWhereInput[]
    NOT?: typesWhereInput | typesWhereInput[]
    id?: IntFilter<"types"> | number
    name?: StringNullableFilter<"types"> | string | null
    cineproductions?: CineproductionsListRelationFilter
  }

  export type typesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    cineproductions?: cineproductionsOrderByRelationAggregateInput
  }

  export type typesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: typesWhereInput | typesWhereInput[]
    OR?: typesWhereInput[]
    NOT?: typesWhereInput | typesWhereInput[]
    name?: StringNullableFilter<"types"> | string | null
    cineproductions?: CineproductionsListRelationFilter
  }, "id">

  export type typesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: typesCountOrderByAggregateInput
    _avg?: typesAvgOrderByAggregateInput
    _max?: typesMaxOrderByAggregateInput
    _min?: typesMinOrderByAggregateInput
    _sum?: typesSumOrderByAggregateInput
  }

  export type typesScalarWhereWithAggregatesInput = {
    AND?: typesScalarWhereWithAggregatesInput | typesScalarWhereWithAggregatesInput[]
    OR?: typesScalarWhereWithAggregatesInput[]
    NOT?: typesScalarWhereWithAggregatesInput | typesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"types"> | number
    name?: StringNullableWithAggregatesFilter<"types"> | string | null
  }

  export type cineproductionsCreateInput = {
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    directors?: string | null
    genres?: genresCreateNestedOneWithoutCineproductionsInput
    idioms?: idiomsCreateNestedOneWithoutCineproductionsInput
    types?: typesCreateNestedOneWithoutCineproductionsInput
    film_genero?: film_generoCreateNestedManyWithoutCineproductionsInput
  }

  export type cineproductionsUncheckedCreateInput = {
    id?: number
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    idiom_id?: number | null
    genre_id?: number | null
    directors?: string | null
    type_id?: number | null
    film_genero?: film_generoUncheckedCreateNestedManyWithoutCineproductionsInput
  }

  export type cineproductionsUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: genresUpdateOneWithoutCineproductionsNestedInput
    idioms?: idiomsUpdateOneWithoutCineproductionsNestedInput
    types?: typesUpdateOneWithoutCineproductionsNestedInput
    film_genero?: film_generoUpdateManyWithoutCineproductionsNestedInput
  }

  export type cineproductionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    idiom_id?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    film_genero?: film_generoUncheckedUpdateManyWithoutCineproductionsNestedInput
  }

  export type cineproductionsCreateManyInput = {
    id?: number
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    idiom_id?: number | null
    genre_id?: number | null
    directors?: string | null
    type_id?: number | null
  }

  export type cineproductionsUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cineproductionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    idiom_id?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type film_generoCreateInput = {
    cineproductions: cineproductionsCreateNestedOneWithoutFilm_generoInput
    genres: genresCreateNestedOneWithoutFilm_generoInput
  }

  export type film_generoUncheckedCreateInput = {
    cineproductions_id: number
    genero_id: number
  }

  export type film_generoUpdateInput = {
    cineproductions?: cineproductionsUpdateOneRequiredWithoutFilm_generoNestedInput
    genres?: genresUpdateOneRequiredWithoutFilm_generoNestedInput
  }

  export type film_generoUncheckedUpdateInput = {
    cineproductions_id?: IntFieldUpdateOperationsInput | number
    genero_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_generoCreateManyInput = {
    cineproductions_id: number
    genero_id: number
  }

  export type film_generoUpdateManyMutationInput = {

  }

  export type film_generoUncheckedUpdateManyInput = {
    cineproductions_id?: IntFieldUpdateOperationsInput | number
    genero_id?: IntFieldUpdateOperationsInput | number
  }

  export type genresCreateInput = {
    name?: string | null
    cineproductions?: cineproductionsCreateNestedManyWithoutGenresInput
    film_genero?: film_generoCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateInput = {
    id?: number
    name?: string | null
    cineproductions?: cineproductionsUncheckedCreateNestedManyWithoutGenresInput
    film_genero?: film_generoUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cineproductions?: cineproductionsUpdateManyWithoutGenresNestedInput
    film_genero?: film_generoUpdateManyWithoutGenresNestedInput
  }

  export type genresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cineproductions?: cineproductionsUncheckedUpdateManyWithoutGenresNestedInput
    film_genero?: film_generoUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type genresCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type genresUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type idiomsCreateInput = {
    name?: string | null
    cineproductions?: cineproductionsCreateNestedManyWithoutIdiomsInput
  }

  export type idiomsUncheckedCreateInput = {
    id?: number
    name?: string | null
    cineproductions?: cineproductionsUncheckedCreateNestedManyWithoutIdiomsInput
  }

  export type idiomsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cineproductions?: cineproductionsUpdateManyWithoutIdiomsNestedInput
  }

  export type idiomsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cineproductions?: cineproductionsUncheckedUpdateManyWithoutIdiomsNestedInput
  }

  export type idiomsCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type idiomsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type idiomsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesCreateInput = {
    name?: string | null
    cineproductions?: cineproductionsCreateNestedManyWithoutTypesInput
  }

  export type typesUncheckedCreateInput = {
    id?: number
    name?: string | null
    cineproductions?: cineproductionsUncheckedCreateNestedManyWithoutTypesInput
  }

  export type typesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cineproductions?: cineproductionsUpdateManyWithoutTypesNestedInput
  }

  export type typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cineproductions?: cineproductionsUncheckedUpdateManyWithoutTypesNestedInput
  }

  export type typesCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type typesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GenresNullableScalarRelationFilter = {
    is?: genresWhereInput | null
    isNot?: genresWhereInput | null
  }

  export type IdiomsNullableScalarRelationFilter = {
    is?: idiomsWhereInput | null
    isNot?: idiomsWhereInput | null
  }

  export type TypesNullableScalarRelationFilter = {
    is?: typesWhereInput | null
    isNot?: typesWhereInput | null
  }

  export type Film_generoListRelationFilter = {
    every?: film_generoWhereInput
    some?: film_generoWhereInput
    none?: film_generoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type film_generoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cineproductionsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    release_date?: SortOrder
    nationality?: SortOrder
    idiom_id?: SortOrder
    genre_id?: SortOrder
    directors?: SortOrder
    type_id?: SortOrder
  }

  export type cineproductionsAvgOrderByAggregateInput = {
    id?: SortOrder
    release_date?: SortOrder
    idiom_id?: SortOrder
    genre_id?: SortOrder
    type_id?: SortOrder
  }

  export type cineproductionsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    release_date?: SortOrder
    nationality?: SortOrder
    idiom_id?: SortOrder
    genre_id?: SortOrder
    directors?: SortOrder
    type_id?: SortOrder
  }

  export type cineproductionsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    release_date?: SortOrder
    nationality?: SortOrder
    idiom_id?: SortOrder
    genre_id?: SortOrder
    directors?: SortOrder
    type_id?: SortOrder
  }

  export type cineproductionsSumOrderByAggregateInput = {
    id?: SortOrder
    release_date?: SortOrder
    idiom_id?: SortOrder
    genre_id?: SortOrder
    type_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CineproductionsScalarRelationFilter = {
    is?: cineproductionsWhereInput
    isNot?: cineproductionsWhereInput
  }

  export type GenresScalarRelationFilter = {
    is?: genresWhereInput
    isNot?: genresWhereInput
  }

  export type film_generoCineproductions_idGenero_idCompoundUniqueInput = {
    cineproductions_id: number
    genero_id: number
  }

  export type film_generoCountOrderByAggregateInput = {
    cineproductions_id?: SortOrder
    genero_id?: SortOrder
  }

  export type film_generoAvgOrderByAggregateInput = {
    cineproductions_id?: SortOrder
    genero_id?: SortOrder
  }

  export type film_generoMaxOrderByAggregateInput = {
    cineproductions_id?: SortOrder
    genero_id?: SortOrder
  }

  export type film_generoMinOrderByAggregateInput = {
    cineproductions_id?: SortOrder
    genero_id?: SortOrder
  }

  export type film_generoSumOrderByAggregateInput = {
    cineproductions_id?: SortOrder
    genero_id?: SortOrder
  }

  export type CineproductionsListRelationFilter = {
    every?: cineproductionsWhereInput
    some?: cineproductionsWhereInput
    none?: cineproductionsWhereInput
  }

  export type cineproductionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type genresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type genresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type genresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type genresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type genresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type idiomsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type idiomsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type idiomsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type idiomsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type idiomsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type typesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type typesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type typesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type typesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type typesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type genresCreateNestedOneWithoutCineproductionsInput = {
    create?: XOR<genresCreateWithoutCineproductionsInput, genresUncheckedCreateWithoutCineproductionsInput>
    connectOrCreate?: genresCreateOrConnectWithoutCineproductionsInput
    connect?: genresWhereUniqueInput
  }

  export type idiomsCreateNestedOneWithoutCineproductionsInput = {
    create?: XOR<idiomsCreateWithoutCineproductionsInput, idiomsUncheckedCreateWithoutCineproductionsInput>
    connectOrCreate?: idiomsCreateOrConnectWithoutCineproductionsInput
    connect?: idiomsWhereUniqueInput
  }

  export type typesCreateNestedOneWithoutCineproductionsInput = {
    create?: XOR<typesCreateWithoutCineproductionsInput, typesUncheckedCreateWithoutCineproductionsInput>
    connectOrCreate?: typesCreateOrConnectWithoutCineproductionsInput
    connect?: typesWhereUniqueInput
  }

  export type film_generoCreateNestedManyWithoutCineproductionsInput = {
    create?: XOR<film_generoCreateWithoutCineproductionsInput, film_generoUncheckedCreateWithoutCineproductionsInput> | film_generoCreateWithoutCineproductionsInput[] | film_generoUncheckedCreateWithoutCineproductionsInput[]
    connectOrCreate?: film_generoCreateOrConnectWithoutCineproductionsInput | film_generoCreateOrConnectWithoutCineproductionsInput[]
    createMany?: film_generoCreateManyCineproductionsInputEnvelope
    connect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
  }

  export type film_generoUncheckedCreateNestedManyWithoutCineproductionsInput = {
    create?: XOR<film_generoCreateWithoutCineproductionsInput, film_generoUncheckedCreateWithoutCineproductionsInput> | film_generoCreateWithoutCineproductionsInput[] | film_generoUncheckedCreateWithoutCineproductionsInput[]
    connectOrCreate?: film_generoCreateOrConnectWithoutCineproductionsInput | film_generoCreateOrConnectWithoutCineproductionsInput[]
    createMany?: film_generoCreateManyCineproductionsInputEnvelope
    connect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type genresUpdateOneWithoutCineproductionsNestedInput = {
    create?: XOR<genresCreateWithoutCineproductionsInput, genresUncheckedCreateWithoutCineproductionsInput>
    connectOrCreate?: genresCreateOrConnectWithoutCineproductionsInput
    upsert?: genresUpsertWithoutCineproductionsInput
    disconnect?: genresWhereInput | boolean
    delete?: genresWhereInput | boolean
    connect?: genresWhereUniqueInput
    update?: XOR<XOR<genresUpdateToOneWithWhereWithoutCineproductionsInput, genresUpdateWithoutCineproductionsInput>, genresUncheckedUpdateWithoutCineproductionsInput>
  }

  export type idiomsUpdateOneWithoutCineproductionsNestedInput = {
    create?: XOR<idiomsCreateWithoutCineproductionsInput, idiomsUncheckedCreateWithoutCineproductionsInput>
    connectOrCreate?: idiomsCreateOrConnectWithoutCineproductionsInput
    upsert?: idiomsUpsertWithoutCineproductionsInput
    disconnect?: idiomsWhereInput | boolean
    delete?: idiomsWhereInput | boolean
    connect?: idiomsWhereUniqueInput
    update?: XOR<XOR<idiomsUpdateToOneWithWhereWithoutCineproductionsInput, idiomsUpdateWithoutCineproductionsInput>, idiomsUncheckedUpdateWithoutCineproductionsInput>
  }

  export type typesUpdateOneWithoutCineproductionsNestedInput = {
    create?: XOR<typesCreateWithoutCineproductionsInput, typesUncheckedCreateWithoutCineproductionsInput>
    connectOrCreate?: typesCreateOrConnectWithoutCineproductionsInput
    upsert?: typesUpsertWithoutCineproductionsInput
    disconnect?: typesWhereInput | boolean
    delete?: typesWhereInput | boolean
    connect?: typesWhereUniqueInput
    update?: XOR<XOR<typesUpdateToOneWithWhereWithoutCineproductionsInput, typesUpdateWithoutCineproductionsInput>, typesUncheckedUpdateWithoutCineproductionsInput>
  }

  export type film_generoUpdateManyWithoutCineproductionsNestedInput = {
    create?: XOR<film_generoCreateWithoutCineproductionsInput, film_generoUncheckedCreateWithoutCineproductionsInput> | film_generoCreateWithoutCineproductionsInput[] | film_generoUncheckedCreateWithoutCineproductionsInput[]
    connectOrCreate?: film_generoCreateOrConnectWithoutCineproductionsInput | film_generoCreateOrConnectWithoutCineproductionsInput[]
    upsert?: film_generoUpsertWithWhereUniqueWithoutCineproductionsInput | film_generoUpsertWithWhereUniqueWithoutCineproductionsInput[]
    createMany?: film_generoCreateManyCineproductionsInputEnvelope
    set?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    disconnect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    delete?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    connect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    update?: film_generoUpdateWithWhereUniqueWithoutCineproductionsInput | film_generoUpdateWithWhereUniqueWithoutCineproductionsInput[]
    updateMany?: film_generoUpdateManyWithWhereWithoutCineproductionsInput | film_generoUpdateManyWithWhereWithoutCineproductionsInput[]
    deleteMany?: film_generoScalarWhereInput | film_generoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type film_generoUncheckedUpdateManyWithoutCineproductionsNestedInput = {
    create?: XOR<film_generoCreateWithoutCineproductionsInput, film_generoUncheckedCreateWithoutCineproductionsInput> | film_generoCreateWithoutCineproductionsInput[] | film_generoUncheckedCreateWithoutCineproductionsInput[]
    connectOrCreate?: film_generoCreateOrConnectWithoutCineproductionsInput | film_generoCreateOrConnectWithoutCineproductionsInput[]
    upsert?: film_generoUpsertWithWhereUniqueWithoutCineproductionsInput | film_generoUpsertWithWhereUniqueWithoutCineproductionsInput[]
    createMany?: film_generoCreateManyCineproductionsInputEnvelope
    set?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    disconnect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    delete?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    connect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    update?: film_generoUpdateWithWhereUniqueWithoutCineproductionsInput | film_generoUpdateWithWhereUniqueWithoutCineproductionsInput[]
    updateMany?: film_generoUpdateManyWithWhereWithoutCineproductionsInput | film_generoUpdateManyWithWhereWithoutCineproductionsInput[]
    deleteMany?: film_generoScalarWhereInput | film_generoScalarWhereInput[]
  }

  export type cineproductionsCreateNestedOneWithoutFilm_generoInput = {
    create?: XOR<cineproductionsCreateWithoutFilm_generoInput, cineproductionsUncheckedCreateWithoutFilm_generoInput>
    connectOrCreate?: cineproductionsCreateOrConnectWithoutFilm_generoInput
    connect?: cineproductionsWhereUniqueInput
  }

  export type genresCreateNestedOneWithoutFilm_generoInput = {
    create?: XOR<genresCreateWithoutFilm_generoInput, genresUncheckedCreateWithoutFilm_generoInput>
    connectOrCreate?: genresCreateOrConnectWithoutFilm_generoInput
    connect?: genresWhereUniqueInput
  }

  export type cineproductionsUpdateOneRequiredWithoutFilm_generoNestedInput = {
    create?: XOR<cineproductionsCreateWithoutFilm_generoInput, cineproductionsUncheckedCreateWithoutFilm_generoInput>
    connectOrCreate?: cineproductionsCreateOrConnectWithoutFilm_generoInput
    upsert?: cineproductionsUpsertWithoutFilm_generoInput
    connect?: cineproductionsWhereUniqueInput
    update?: XOR<XOR<cineproductionsUpdateToOneWithWhereWithoutFilm_generoInput, cineproductionsUpdateWithoutFilm_generoInput>, cineproductionsUncheckedUpdateWithoutFilm_generoInput>
  }

  export type genresUpdateOneRequiredWithoutFilm_generoNestedInput = {
    create?: XOR<genresCreateWithoutFilm_generoInput, genresUncheckedCreateWithoutFilm_generoInput>
    connectOrCreate?: genresCreateOrConnectWithoutFilm_generoInput
    upsert?: genresUpsertWithoutFilm_generoInput
    connect?: genresWhereUniqueInput
    update?: XOR<XOR<genresUpdateToOneWithWhereWithoutFilm_generoInput, genresUpdateWithoutFilm_generoInput>, genresUncheckedUpdateWithoutFilm_generoInput>
  }

  export type cineproductionsCreateNestedManyWithoutGenresInput = {
    create?: XOR<cineproductionsCreateWithoutGenresInput, cineproductionsUncheckedCreateWithoutGenresInput> | cineproductionsCreateWithoutGenresInput[] | cineproductionsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutGenresInput | cineproductionsCreateOrConnectWithoutGenresInput[]
    createMany?: cineproductionsCreateManyGenresInputEnvelope
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
  }

  export type film_generoCreateNestedManyWithoutGenresInput = {
    create?: XOR<film_generoCreateWithoutGenresInput, film_generoUncheckedCreateWithoutGenresInput> | film_generoCreateWithoutGenresInput[] | film_generoUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_generoCreateOrConnectWithoutGenresInput | film_generoCreateOrConnectWithoutGenresInput[]
    createMany?: film_generoCreateManyGenresInputEnvelope
    connect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
  }

  export type cineproductionsUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<cineproductionsCreateWithoutGenresInput, cineproductionsUncheckedCreateWithoutGenresInput> | cineproductionsCreateWithoutGenresInput[] | cineproductionsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutGenresInput | cineproductionsCreateOrConnectWithoutGenresInput[]
    createMany?: cineproductionsCreateManyGenresInputEnvelope
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
  }

  export type film_generoUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<film_generoCreateWithoutGenresInput, film_generoUncheckedCreateWithoutGenresInput> | film_generoCreateWithoutGenresInput[] | film_generoUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_generoCreateOrConnectWithoutGenresInput | film_generoCreateOrConnectWithoutGenresInput[]
    createMany?: film_generoCreateManyGenresInputEnvelope
    connect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
  }

  export type cineproductionsUpdateManyWithoutGenresNestedInput = {
    create?: XOR<cineproductionsCreateWithoutGenresInput, cineproductionsUncheckedCreateWithoutGenresInput> | cineproductionsCreateWithoutGenresInput[] | cineproductionsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutGenresInput | cineproductionsCreateOrConnectWithoutGenresInput[]
    upsert?: cineproductionsUpsertWithWhereUniqueWithoutGenresInput | cineproductionsUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: cineproductionsCreateManyGenresInputEnvelope
    set?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    disconnect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    delete?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    update?: cineproductionsUpdateWithWhereUniqueWithoutGenresInput | cineproductionsUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: cineproductionsUpdateManyWithWhereWithoutGenresInput | cineproductionsUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: cineproductionsScalarWhereInput | cineproductionsScalarWhereInput[]
  }

  export type film_generoUpdateManyWithoutGenresNestedInput = {
    create?: XOR<film_generoCreateWithoutGenresInput, film_generoUncheckedCreateWithoutGenresInput> | film_generoCreateWithoutGenresInput[] | film_generoUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_generoCreateOrConnectWithoutGenresInput | film_generoCreateOrConnectWithoutGenresInput[]
    upsert?: film_generoUpsertWithWhereUniqueWithoutGenresInput | film_generoUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: film_generoCreateManyGenresInputEnvelope
    set?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    disconnect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    delete?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    connect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    update?: film_generoUpdateWithWhereUniqueWithoutGenresInput | film_generoUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: film_generoUpdateManyWithWhereWithoutGenresInput | film_generoUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: film_generoScalarWhereInput | film_generoScalarWhereInput[]
  }

  export type cineproductionsUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<cineproductionsCreateWithoutGenresInput, cineproductionsUncheckedCreateWithoutGenresInput> | cineproductionsCreateWithoutGenresInput[] | cineproductionsUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutGenresInput | cineproductionsCreateOrConnectWithoutGenresInput[]
    upsert?: cineproductionsUpsertWithWhereUniqueWithoutGenresInput | cineproductionsUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: cineproductionsCreateManyGenresInputEnvelope
    set?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    disconnect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    delete?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    update?: cineproductionsUpdateWithWhereUniqueWithoutGenresInput | cineproductionsUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: cineproductionsUpdateManyWithWhereWithoutGenresInput | cineproductionsUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: cineproductionsScalarWhereInput | cineproductionsScalarWhereInput[]
  }

  export type film_generoUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<film_generoCreateWithoutGenresInput, film_generoUncheckedCreateWithoutGenresInput> | film_generoCreateWithoutGenresInput[] | film_generoUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: film_generoCreateOrConnectWithoutGenresInput | film_generoCreateOrConnectWithoutGenresInput[]
    upsert?: film_generoUpsertWithWhereUniqueWithoutGenresInput | film_generoUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: film_generoCreateManyGenresInputEnvelope
    set?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    disconnect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    delete?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    connect?: film_generoWhereUniqueInput | film_generoWhereUniqueInput[]
    update?: film_generoUpdateWithWhereUniqueWithoutGenresInput | film_generoUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: film_generoUpdateManyWithWhereWithoutGenresInput | film_generoUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: film_generoScalarWhereInput | film_generoScalarWhereInput[]
  }

  export type cineproductionsCreateNestedManyWithoutIdiomsInput = {
    create?: XOR<cineproductionsCreateWithoutIdiomsInput, cineproductionsUncheckedCreateWithoutIdiomsInput> | cineproductionsCreateWithoutIdiomsInput[] | cineproductionsUncheckedCreateWithoutIdiomsInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutIdiomsInput | cineproductionsCreateOrConnectWithoutIdiomsInput[]
    createMany?: cineproductionsCreateManyIdiomsInputEnvelope
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
  }

  export type cineproductionsUncheckedCreateNestedManyWithoutIdiomsInput = {
    create?: XOR<cineproductionsCreateWithoutIdiomsInput, cineproductionsUncheckedCreateWithoutIdiomsInput> | cineproductionsCreateWithoutIdiomsInput[] | cineproductionsUncheckedCreateWithoutIdiomsInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutIdiomsInput | cineproductionsCreateOrConnectWithoutIdiomsInput[]
    createMany?: cineproductionsCreateManyIdiomsInputEnvelope
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
  }

  export type cineproductionsUpdateManyWithoutIdiomsNestedInput = {
    create?: XOR<cineproductionsCreateWithoutIdiomsInput, cineproductionsUncheckedCreateWithoutIdiomsInput> | cineproductionsCreateWithoutIdiomsInput[] | cineproductionsUncheckedCreateWithoutIdiomsInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutIdiomsInput | cineproductionsCreateOrConnectWithoutIdiomsInput[]
    upsert?: cineproductionsUpsertWithWhereUniqueWithoutIdiomsInput | cineproductionsUpsertWithWhereUniqueWithoutIdiomsInput[]
    createMany?: cineproductionsCreateManyIdiomsInputEnvelope
    set?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    disconnect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    delete?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    update?: cineproductionsUpdateWithWhereUniqueWithoutIdiomsInput | cineproductionsUpdateWithWhereUniqueWithoutIdiomsInput[]
    updateMany?: cineproductionsUpdateManyWithWhereWithoutIdiomsInput | cineproductionsUpdateManyWithWhereWithoutIdiomsInput[]
    deleteMany?: cineproductionsScalarWhereInput | cineproductionsScalarWhereInput[]
  }

  export type cineproductionsUncheckedUpdateManyWithoutIdiomsNestedInput = {
    create?: XOR<cineproductionsCreateWithoutIdiomsInput, cineproductionsUncheckedCreateWithoutIdiomsInput> | cineproductionsCreateWithoutIdiomsInput[] | cineproductionsUncheckedCreateWithoutIdiomsInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutIdiomsInput | cineproductionsCreateOrConnectWithoutIdiomsInput[]
    upsert?: cineproductionsUpsertWithWhereUniqueWithoutIdiomsInput | cineproductionsUpsertWithWhereUniqueWithoutIdiomsInput[]
    createMany?: cineproductionsCreateManyIdiomsInputEnvelope
    set?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    disconnect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    delete?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    update?: cineproductionsUpdateWithWhereUniqueWithoutIdiomsInput | cineproductionsUpdateWithWhereUniqueWithoutIdiomsInput[]
    updateMany?: cineproductionsUpdateManyWithWhereWithoutIdiomsInput | cineproductionsUpdateManyWithWhereWithoutIdiomsInput[]
    deleteMany?: cineproductionsScalarWhereInput | cineproductionsScalarWhereInput[]
  }

  export type cineproductionsCreateNestedManyWithoutTypesInput = {
    create?: XOR<cineproductionsCreateWithoutTypesInput, cineproductionsUncheckedCreateWithoutTypesInput> | cineproductionsCreateWithoutTypesInput[] | cineproductionsUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutTypesInput | cineproductionsCreateOrConnectWithoutTypesInput[]
    createMany?: cineproductionsCreateManyTypesInputEnvelope
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
  }

  export type cineproductionsUncheckedCreateNestedManyWithoutTypesInput = {
    create?: XOR<cineproductionsCreateWithoutTypesInput, cineproductionsUncheckedCreateWithoutTypesInput> | cineproductionsCreateWithoutTypesInput[] | cineproductionsUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutTypesInput | cineproductionsCreateOrConnectWithoutTypesInput[]
    createMany?: cineproductionsCreateManyTypesInputEnvelope
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
  }

  export type cineproductionsUpdateManyWithoutTypesNestedInput = {
    create?: XOR<cineproductionsCreateWithoutTypesInput, cineproductionsUncheckedCreateWithoutTypesInput> | cineproductionsCreateWithoutTypesInput[] | cineproductionsUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutTypesInput | cineproductionsCreateOrConnectWithoutTypesInput[]
    upsert?: cineproductionsUpsertWithWhereUniqueWithoutTypesInput | cineproductionsUpsertWithWhereUniqueWithoutTypesInput[]
    createMany?: cineproductionsCreateManyTypesInputEnvelope
    set?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    disconnect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    delete?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    update?: cineproductionsUpdateWithWhereUniqueWithoutTypesInput | cineproductionsUpdateWithWhereUniqueWithoutTypesInput[]
    updateMany?: cineproductionsUpdateManyWithWhereWithoutTypesInput | cineproductionsUpdateManyWithWhereWithoutTypesInput[]
    deleteMany?: cineproductionsScalarWhereInput | cineproductionsScalarWhereInput[]
  }

  export type cineproductionsUncheckedUpdateManyWithoutTypesNestedInput = {
    create?: XOR<cineproductionsCreateWithoutTypesInput, cineproductionsUncheckedCreateWithoutTypesInput> | cineproductionsCreateWithoutTypesInput[] | cineproductionsUncheckedCreateWithoutTypesInput[]
    connectOrCreate?: cineproductionsCreateOrConnectWithoutTypesInput | cineproductionsCreateOrConnectWithoutTypesInput[]
    upsert?: cineproductionsUpsertWithWhereUniqueWithoutTypesInput | cineproductionsUpsertWithWhereUniqueWithoutTypesInput[]
    createMany?: cineproductionsCreateManyTypesInputEnvelope
    set?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    disconnect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    delete?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    connect?: cineproductionsWhereUniqueInput | cineproductionsWhereUniqueInput[]
    update?: cineproductionsUpdateWithWhereUniqueWithoutTypesInput | cineproductionsUpdateWithWhereUniqueWithoutTypesInput[]
    updateMany?: cineproductionsUpdateManyWithWhereWithoutTypesInput | cineproductionsUpdateManyWithWhereWithoutTypesInput[]
    deleteMany?: cineproductionsScalarWhereInput | cineproductionsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type genresCreateWithoutCineproductionsInput = {
    name?: string | null
    film_genero?: film_generoCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateWithoutCineproductionsInput = {
    id?: number
    name?: string | null
    film_genero?: film_generoUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresCreateOrConnectWithoutCineproductionsInput = {
    where: genresWhereUniqueInput
    create: XOR<genresCreateWithoutCineproductionsInput, genresUncheckedCreateWithoutCineproductionsInput>
  }

  export type idiomsCreateWithoutCineproductionsInput = {
    name?: string | null
  }

  export type idiomsUncheckedCreateWithoutCineproductionsInput = {
    id?: number
    name?: string | null
  }

  export type idiomsCreateOrConnectWithoutCineproductionsInput = {
    where: idiomsWhereUniqueInput
    create: XOR<idiomsCreateWithoutCineproductionsInput, idiomsUncheckedCreateWithoutCineproductionsInput>
  }

  export type typesCreateWithoutCineproductionsInput = {
    name?: string | null
  }

  export type typesUncheckedCreateWithoutCineproductionsInput = {
    id?: number
    name?: string | null
  }

  export type typesCreateOrConnectWithoutCineproductionsInput = {
    where: typesWhereUniqueInput
    create: XOR<typesCreateWithoutCineproductionsInput, typesUncheckedCreateWithoutCineproductionsInput>
  }

  export type film_generoCreateWithoutCineproductionsInput = {
    genres: genresCreateNestedOneWithoutFilm_generoInput
  }

  export type film_generoUncheckedCreateWithoutCineproductionsInput = {
    genero_id: number
  }

  export type film_generoCreateOrConnectWithoutCineproductionsInput = {
    where: film_generoWhereUniqueInput
    create: XOR<film_generoCreateWithoutCineproductionsInput, film_generoUncheckedCreateWithoutCineproductionsInput>
  }

  export type film_generoCreateManyCineproductionsInputEnvelope = {
    data: film_generoCreateManyCineproductionsInput | film_generoCreateManyCineproductionsInput[]
    skipDuplicates?: boolean
  }

  export type genresUpsertWithoutCineproductionsInput = {
    update: XOR<genresUpdateWithoutCineproductionsInput, genresUncheckedUpdateWithoutCineproductionsInput>
    create: XOR<genresCreateWithoutCineproductionsInput, genresUncheckedCreateWithoutCineproductionsInput>
    where?: genresWhereInput
  }

  export type genresUpdateToOneWithWhereWithoutCineproductionsInput = {
    where?: genresWhereInput
    data: XOR<genresUpdateWithoutCineproductionsInput, genresUncheckedUpdateWithoutCineproductionsInput>
  }

  export type genresUpdateWithoutCineproductionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    film_genero?: film_generoUpdateManyWithoutGenresNestedInput
  }

  export type genresUncheckedUpdateWithoutCineproductionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    film_genero?: film_generoUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type idiomsUpsertWithoutCineproductionsInput = {
    update: XOR<idiomsUpdateWithoutCineproductionsInput, idiomsUncheckedUpdateWithoutCineproductionsInput>
    create: XOR<idiomsCreateWithoutCineproductionsInput, idiomsUncheckedCreateWithoutCineproductionsInput>
    where?: idiomsWhereInput
  }

  export type idiomsUpdateToOneWithWhereWithoutCineproductionsInput = {
    where?: idiomsWhereInput
    data: XOR<idiomsUpdateWithoutCineproductionsInput, idiomsUncheckedUpdateWithoutCineproductionsInput>
  }

  export type idiomsUpdateWithoutCineproductionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type idiomsUncheckedUpdateWithoutCineproductionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesUpsertWithoutCineproductionsInput = {
    update: XOR<typesUpdateWithoutCineproductionsInput, typesUncheckedUpdateWithoutCineproductionsInput>
    create: XOR<typesCreateWithoutCineproductionsInput, typesUncheckedCreateWithoutCineproductionsInput>
    where?: typesWhereInput
  }

  export type typesUpdateToOneWithWhereWithoutCineproductionsInput = {
    where?: typesWhereInput
    data: XOR<typesUpdateWithoutCineproductionsInput, typesUncheckedUpdateWithoutCineproductionsInput>
  }

  export type typesUpdateWithoutCineproductionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesUncheckedUpdateWithoutCineproductionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type film_generoUpsertWithWhereUniqueWithoutCineproductionsInput = {
    where: film_generoWhereUniqueInput
    update: XOR<film_generoUpdateWithoutCineproductionsInput, film_generoUncheckedUpdateWithoutCineproductionsInput>
    create: XOR<film_generoCreateWithoutCineproductionsInput, film_generoUncheckedCreateWithoutCineproductionsInput>
  }

  export type film_generoUpdateWithWhereUniqueWithoutCineproductionsInput = {
    where: film_generoWhereUniqueInput
    data: XOR<film_generoUpdateWithoutCineproductionsInput, film_generoUncheckedUpdateWithoutCineproductionsInput>
  }

  export type film_generoUpdateManyWithWhereWithoutCineproductionsInput = {
    where: film_generoScalarWhereInput
    data: XOR<film_generoUpdateManyMutationInput, film_generoUncheckedUpdateManyWithoutCineproductionsInput>
  }

  export type film_generoScalarWhereInput = {
    AND?: film_generoScalarWhereInput | film_generoScalarWhereInput[]
    OR?: film_generoScalarWhereInput[]
    NOT?: film_generoScalarWhereInput | film_generoScalarWhereInput[]
    cineproductions_id?: IntFilter<"film_genero"> | number
    genero_id?: IntFilter<"film_genero"> | number
  }

  export type cineproductionsCreateWithoutFilm_generoInput = {
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    directors?: string | null
    genres?: genresCreateNestedOneWithoutCineproductionsInput
    idioms?: idiomsCreateNestedOneWithoutCineproductionsInput
    types?: typesCreateNestedOneWithoutCineproductionsInput
  }

  export type cineproductionsUncheckedCreateWithoutFilm_generoInput = {
    id?: number
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    idiom_id?: number | null
    genre_id?: number | null
    directors?: string | null
    type_id?: number | null
  }

  export type cineproductionsCreateOrConnectWithoutFilm_generoInput = {
    where: cineproductionsWhereUniqueInput
    create: XOR<cineproductionsCreateWithoutFilm_generoInput, cineproductionsUncheckedCreateWithoutFilm_generoInput>
  }

  export type genresCreateWithoutFilm_generoInput = {
    name?: string | null
    cineproductions?: cineproductionsCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateWithoutFilm_generoInput = {
    id?: number
    name?: string | null
    cineproductions?: cineproductionsUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresCreateOrConnectWithoutFilm_generoInput = {
    where: genresWhereUniqueInput
    create: XOR<genresCreateWithoutFilm_generoInput, genresUncheckedCreateWithoutFilm_generoInput>
  }

  export type cineproductionsUpsertWithoutFilm_generoInput = {
    update: XOR<cineproductionsUpdateWithoutFilm_generoInput, cineproductionsUncheckedUpdateWithoutFilm_generoInput>
    create: XOR<cineproductionsCreateWithoutFilm_generoInput, cineproductionsUncheckedCreateWithoutFilm_generoInput>
    where?: cineproductionsWhereInput
  }

  export type cineproductionsUpdateToOneWithWhereWithoutFilm_generoInput = {
    where?: cineproductionsWhereInput
    data: XOR<cineproductionsUpdateWithoutFilm_generoInput, cineproductionsUncheckedUpdateWithoutFilm_generoInput>
  }

  export type cineproductionsUpdateWithoutFilm_generoInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: genresUpdateOneWithoutCineproductionsNestedInput
    idioms?: idiomsUpdateOneWithoutCineproductionsNestedInput
    types?: typesUpdateOneWithoutCineproductionsNestedInput
  }

  export type cineproductionsUncheckedUpdateWithoutFilm_generoInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    idiom_id?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type genresUpsertWithoutFilm_generoInput = {
    update: XOR<genresUpdateWithoutFilm_generoInput, genresUncheckedUpdateWithoutFilm_generoInput>
    create: XOR<genresCreateWithoutFilm_generoInput, genresUncheckedCreateWithoutFilm_generoInput>
    where?: genresWhereInput
  }

  export type genresUpdateToOneWithWhereWithoutFilm_generoInput = {
    where?: genresWhereInput
    data: XOR<genresUpdateWithoutFilm_generoInput, genresUncheckedUpdateWithoutFilm_generoInput>
  }

  export type genresUpdateWithoutFilm_generoInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cineproductions?: cineproductionsUpdateManyWithoutGenresNestedInput
  }

  export type genresUncheckedUpdateWithoutFilm_generoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cineproductions?: cineproductionsUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type cineproductionsCreateWithoutGenresInput = {
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    directors?: string | null
    idioms?: idiomsCreateNestedOneWithoutCineproductionsInput
    types?: typesCreateNestedOneWithoutCineproductionsInput
    film_genero?: film_generoCreateNestedManyWithoutCineproductionsInput
  }

  export type cineproductionsUncheckedCreateWithoutGenresInput = {
    id?: number
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    idiom_id?: number | null
    directors?: string | null
    type_id?: number | null
    film_genero?: film_generoUncheckedCreateNestedManyWithoutCineproductionsInput
  }

  export type cineproductionsCreateOrConnectWithoutGenresInput = {
    where: cineproductionsWhereUniqueInput
    create: XOR<cineproductionsCreateWithoutGenresInput, cineproductionsUncheckedCreateWithoutGenresInput>
  }

  export type cineproductionsCreateManyGenresInputEnvelope = {
    data: cineproductionsCreateManyGenresInput | cineproductionsCreateManyGenresInput[]
    skipDuplicates?: boolean
  }

  export type film_generoCreateWithoutGenresInput = {
    cineproductions: cineproductionsCreateNestedOneWithoutFilm_generoInput
  }

  export type film_generoUncheckedCreateWithoutGenresInput = {
    cineproductions_id: number
  }

  export type film_generoCreateOrConnectWithoutGenresInput = {
    where: film_generoWhereUniqueInput
    create: XOR<film_generoCreateWithoutGenresInput, film_generoUncheckedCreateWithoutGenresInput>
  }

  export type film_generoCreateManyGenresInputEnvelope = {
    data: film_generoCreateManyGenresInput | film_generoCreateManyGenresInput[]
    skipDuplicates?: boolean
  }

  export type cineproductionsUpsertWithWhereUniqueWithoutGenresInput = {
    where: cineproductionsWhereUniqueInput
    update: XOR<cineproductionsUpdateWithoutGenresInput, cineproductionsUncheckedUpdateWithoutGenresInput>
    create: XOR<cineproductionsCreateWithoutGenresInput, cineproductionsUncheckedCreateWithoutGenresInput>
  }

  export type cineproductionsUpdateWithWhereUniqueWithoutGenresInput = {
    where: cineproductionsWhereUniqueInput
    data: XOR<cineproductionsUpdateWithoutGenresInput, cineproductionsUncheckedUpdateWithoutGenresInput>
  }

  export type cineproductionsUpdateManyWithWhereWithoutGenresInput = {
    where: cineproductionsScalarWhereInput
    data: XOR<cineproductionsUpdateManyMutationInput, cineproductionsUncheckedUpdateManyWithoutGenresInput>
  }

  export type cineproductionsScalarWhereInput = {
    AND?: cineproductionsScalarWhereInput | cineproductionsScalarWhereInput[]
    OR?: cineproductionsScalarWhereInput[]
    NOT?: cineproductionsScalarWhereInput | cineproductionsScalarWhereInput[]
    id?: IntFilter<"cineproductions"> | number
    title?: StringNullableFilter<"cineproductions"> | string | null
    release_date?: IntNullableFilter<"cineproductions"> | number | null
    nationality?: StringNullableFilter<"cineproductions"> | string | null
    idiom_id?: IntNullableFilter<"cineproductions"> | number | null
    genre_id?: IntNullableFilter<"cineproductions"> | number | null
    directors?: StringNullableFilter<"cineproductions"> | string | null
    type_id?: IntNullableFilter<"cineproductions"> | number | null
  }

  export type film_generoUpsertWithWhereUniqueWithoutGenresInput = {
    where: film_generoWhereUniqueInput
    update: XOR<film_generoUpdateWithoutGenresInput, film_generoUncheckedUpdateWithoutGenresInput>
    create: XOR<film_generoCreateWithoutGenresInput, film_generoUncheckedCreateWithoutGenresInput>
  }

  export type film_generoUpdateWithWhereUniqueWithoutGenresInput = {
    where: film_generoWhereUniqueInput
    data: XOR<film_generoUpdateWithoutGenresInput, film_generoUncheckedUpdateWithoutGenresInput>
  }

  export type film_generoUpdateManyWithWhereWithoutGenresInput = {
    where: film_generoScalarWhereInput
    data: XOR<film_generoUpdateManyMutationInput, film_generoUncheckedUpdateManyWithoutGenresInput>
  }

  export type cineproductionsCreateWithoutIdiomsInput = {
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    directors?: string | null
    genres?: genresCreateNestedOneWithoutCineproductionsInput
    types?: typesCreateNestedOneWithoutCineproductionsInput
    film_genero?: film_generoCreateNestedManyWithoutCineproductionsInput
  }

  export type cineproductionsUncheckedCreateWithoutIdiomsInput = {
    id?: number
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    genre_id?: number | null
    directors?: string | null
    type_id?: number | null
    film_genero?: film_generoUncheckedCreateNestedManyWithoutCineproductionsInput
  }

  export type cineproductionsCreateOrConnectWithoutIdiomsInput = {
    where: cineproductionsWhereUniqueInput
    create: XOR<cineproductionsCreateWithoutIdiomsInput, cineproductionsUncheckedCreateWithoutIdiomsInput>
  }

  export type cineproductionsCreateManyIdiomsInputEnvelope = {
    data: cineproductionsCreateManyIdiomsInput | cineproductionsCreateManyIdiomsInput[]
    skipDuplicates?: boolean
  }

  export type cineproductionsUpsertWithWhereUniqueWithoutIdiomsInput = {
    where: cineproductionsWhereUniqueInput
    update: XOR<cineproductionsUpdateWithoutIdiomsInput, cineproductionsUncheckedUpdateWithoutIdiomsInput>
    create: XOR<cineproductionsCreateWithoutIdiomsInput, cineproductionsUncheckedCreateWithoutIdiomsInput>
  }

  export type cineproductionsUpdateWithWhereUniqueWithoutIdiomsInput = {
    where: cineproductionsWhereUniqueInput
    data: XOR<cineproductionsUpdateWithoutIdiomsInput, cineproductionsUncheckedUpdateWithoutIdiomsInput>
  }

  export type cineproductionsUpdateManyWithWhereWithoutIdiomsInput = {
    where: cineproductionsScalarWhereInput
    data: XOR<cineproductionsUpdateManyMutationInput, cineproductionsUncheckedUpdateManyWithoutIdiomsInput>
  }

  export type cineproductionsCreateWithoutTypesInput = {
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    directors?: string | null
    genres?: genresCreateNestedOneWithoutCineproductionsInput
    idioms?: idiomsCreateNestedOneWithoutCineproductionsInput
    film_genero?: film_generoCreateNestedManyWithoutCineproductionsInput
  }

  export type cineproductionsUncheckedCreateWithoutTypesInput = {
    id?: number
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    idiom_id?: number | null
    genre_id?: number | null
    directors?: string | null
    film_genero?: film_generoUncheckedCreateNestedManyWithoutCineproductionsInput
  }

  export type cineproductionsCreateOrConnectWithoutTypesInput = {
    where: cineproductionsWhereUniqueInput
    create: XOR<cineproductionsCreateWithoutTypesInput, cineproductionsUncheckedCreateWithoutTypesInput>
  }

  export type cineproductionsCreateManyTypesInputEnvelope = {
    data: cineproductionsCreateManyTypesInput | cineproductionsCreateManyTypesInput[]
    skipDuplicates?: boolean
  }

  export type cineproductionsUpsertWithWhereUniqueWithoutTypesInput = {
    where: cineproductionsWhereUniqueInput
    update: XOR<cineproductionsUpdateWithoutTypesInput, cineproductionsUncheckedUpdateWithoutTypesInput>
    create: XOR<cineproductionsCreateWithoutTypesInput, cineproductionsUncheckedCreateWithoutTypesInput>
  }

  export type cineproductionsUpdateWithWhereUniqueWithoutTypesInput = {
    where: cineproductionsWhereUniqueInput
    data: XOR<cineproductionsUpdateWithoutTypesInput, cineproductionsUncheckedUpdateWithoutTypesInput>
  }

  export type cineproductionsUpdateManyWithWhereWithoutTypesInput = {
    where: cineproductionsScalarWhereInput
    data: XOR<cineproductionsUpdateManyMutationInput, cineproductionsUncheckedUpdateManyWithoutTypesInput>
  }

  export type film_generoCreateManyCineproductionsInput = {
    genero_id: number
  }

  export type film_generoUpdateWithoutCineproductionsInput = {
    genres?: genresUpdateOneRequiredWithoutFilm_generoNestedInput
  }

  export type film_generoUncheckedUpdateWithoutCineproductionsInput = {
    genero_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_generoUncheckedUpdateManyWithoutCineproductionsInput = {
    genero_id?: IntFieldUpdateOperationsInput | number
  }

  export type cineproductionsCreateManyGenresInput = {
    id?: number
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    idiom_id?: number | null
    directors?: string | null
    type_id?: number | null
  }

  export type film_generoCreateManyGenresInput = {
    cineproductions_id: number
  }

  export type cineproductionsUpdateWithoutGenresInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    idioms?: idiomsUpdateOneWithoutCineproductionsNestedInput
    types?: typesUpdateOneWithoutCineproductionsNestedInput
    film_genero?: film_generoUpdateManyWithoutCineproductionsNestedInput
  }

  export type cineproductionsUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    idiom_id?: NullableIntFieldUpdateOperationsInput | number | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    film_genero?: film_generoUncheckedUpdateManyWithoutCineproductionsNestedInput
  }

  export type cineproductionsUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    idiom_id?: NullableIntFieldUpdateOperationsInput | number | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type film_generoUpdateWithoutGenresInput = {
    cineproductions?: cineproductionsUpdateOneRequiredWithoutFilm_generoNestedInput
  }

  export type film_generoUncheckedUpdateWithoutGenresInput = {
    cineproductions_id?: IntFieldUpdateOperationsInput | number
  }

  export type film_generoUncheckedUpdateManyWithoutGenresInput = {
    cineproductions_id?: IntFieldUpdateOperationsInput | number
  }

  export type cineproductionsCreateManyIdiomsInput = {
    id?: number
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    genre_id?: number | null
    directors?: string | null
    type_id?: number | null
  }

  export type cineproductionsUpdateWithoutIdiomsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: genresUpdateOneWithoutCineproductionsNestedInput
    types?: typesUpdateOneWithoutCineproductionsNestedInput
    film_genero?: film_generoUpdateManyWithoutCineproductionsNestedInput
  }

  export type cineproductionsUncheckedUpdateWithoutIdiomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    film_genero?: film_generoUncheckedUpdateManyWithoutCineproductionsNestedInput
  }

  export type cineproductionsUncheckedUpdateManyWithoutIdiomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cineproductionsCreateManyTypesInput = {
    id?: number
    title?: string | null
    release_date?: number | null
    nationality?: string | null
    idiom_id?: number | null
    genre_id?: number | null
    directors?: string | null
  }

  export type cineproductionsUpdateWithoutTypesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: genresUpdateOneWithoutCineproductionsNestedInput
    idioms?: idiomsUpdateOneWithoutCineproductionsNestedInput
    film_genero?: film_generoUpdateManyWithoutCineproductionsNestedInput
  }

  export type cineproductionsUncheckedUpdateWithoutTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    idiom_id?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
    film_genero?: film_generoUncheckedUpdateManyWithoutCineproductionsNestedInput
  }

  export type cineproductionsUncheckedUpdateManyWithoutTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableIntFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    idiom_id?: NullableIntFieldUpdateOperationsInput | number | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    directors?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}