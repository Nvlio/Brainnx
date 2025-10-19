
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
 * Model EstudoTags
 * 
 */
export type EstudoTags = $Result.DefaultSelection<Prisma.$EstudoTagsPayload>
/**
 * Model Estudo
 * 
 */
export type Estudo = $Result.DefaultSelection<Prisma.$EstudoPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Foto
 * 
 */
export type Foto = $Result.DefaultSelection<Prisma.$FotoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EstudoTags
 * const estudoTags = await prisma.estudoTags.findMany()
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
   * // Fetch zero or more EstudoTags
   * const estudoTags = await prisma.estudoTags.findMany()
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
   * `prisma.estudoTags`: Exposes CRUD operations for the **EstudoTags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstudoTags
    * const estudoTags = await prisma.estudoTags.findMany()
    * ```
    */
  get estudoTags(): Prisma.EstudoTagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudo`: Exposes CRUD operations for the **Estudo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudos
    * const estudos = await prisma.estudo.findMany()
    * ```
    */
  get estudo(): Prisma.EstudoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foto`: Exposes CRUD operations for the **Foto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fotos
    * const fotos = await prisma.foto.findMany()
    * ```
    */
  get foto(): Prisma.FotoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    EstudoTags: 'EstudoTags',
    Estudo: 'Estudo',
    Tag: 'Tag',
    Video: 'Video',
    Foto: 'Foto'
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
      modelProps: "estudoTags" | "estudo" | "tag" | "video" | "foto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      EstudoTags: {
        payload: Prisma.$EstudoTagsPayload<ExtArgs>
        fields: Prisma.EstudoTagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudoTagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoTagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudoTagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoTagsPayload>
          }
          findFirst: {
            args: Prisma.EstudoTagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoTagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudoTagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoTagsPayload>
          }
          findMany: {
            args: Prisma.EstudoTagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoTagsPayload>[]
          }
          create: {
            args: Prisma.EstudoTagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoTagsPayload>
          }
          createMany: {
            args: Prisma.EstudoTagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstudoTagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoTagsPayload>
          }
          update: {
            args: Prisma.EstudoTagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoTagsPayload>
          }
          deleteMany: {
            args: Prisma.EstudoTagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudoTagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstudoTagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoTagsPayload>
          }
          aggregate: {
            args: Prisma.EstudoTagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudoTags>
          }
          groupBy: {
            args: Prisma.EstudoTagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudoTagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudoTagsCountArgs<ExtArgs>
            result: $Utils.Optional<EstudoTagsCountAggregateOutputType> | number
          }
        }
      }
      Estudo: {
        payload: Prisma.$EstudoPayload<ExtArgs>
        fields: Prisma.EstudoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoPayload>
          }
          findFirst: {
            args: Prisma.EstudoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoPayload>
          }
          findMany: {
            args: Prisma.EstudoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoPayload>[]
          }
          create: {
            args: Prisma.EstudoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoPayload>
          }
          createMany: {
            args: Prisma.EstudoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstudoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoPayload>
          }
          update: {
            args: Prisma.EstudoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoPayload>
          }
          deleteMany: {
            args: Prisma.EstudoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstudoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudoPayload>
          }
          aggregate: {
            args: Prisma.EstudoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudo>
          }
          groupBy: {
            args: Prisma.EstudoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudoCountArgs<ExtArgs>
            result: $Utils.Optional<EstudoCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Foto: {
        payload: Prisma.$FotoPayload<ExtArgs>
        fields: Prisma.FotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findFirst: {
            args: Prisma.FotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          findMany: {
            args: Prisma.FotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>[]
          }
          create: {
            args: Prisma.FotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          createMany: {
            args: Prisma.FotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          update: {
            args: Prisma.FotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          deleteMany: {
            args: Prisma.FotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FotoPayload>
          }
          aggregate: {
            args: Prisma.FotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoto>
          }
          groupBy: {
            args: Prisma.FotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FotoCountArgs<ExtArgs>
            result: $Utils.Optional<FotoCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    estudoTags?: EstudoTagsOmit
    estudo?: EstudoOmit
    tag?: TagOmit
    video?: VideoOmit
    foto?: FotoOmit
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
   * Count Type EstudoCountOutputType
   */

  export type EstudoCountOutputType = {
    tags: number
    videos: number
    fotos: number
  }

  export type EstudoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | EstudoCountOutputTypeCountTagsArgs
    videos?: boolean | EstudoCountOutputTypeCountVideosArgs
    fotos?: boolean | EstudoCountOutputTypeCountFotosArgs
  }

  // Custom InputTypes
  /**
   * EstudoCountOutputType without action
   */
  export type EstudoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoCountOutputType
     */
    select?: EstudoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudoCountOutputType without action
   */
  export type EstudoCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudoTagsWhereInput
  }

  /**
   * EstudoCountOutputType without action
   */
  export type EstudoCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * EstudoCountOutputType without action
   */
  export type EstudoCountOutputTypeCountFotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    estudo: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudo?: boolean | TagCountOutputTypeCountEstudoArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountEstudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudoTagsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model EstudoTags
   */

  export type AggregateEstudoTags = {
    _count: EstudoTagsCountAggregateOutputType | null
    _avg: EstudoTagsAvgAggregateOutputType | null
    _sum: EstudoTagsSumAggregateOutputType | null
    _min: EstudoTagsMinAggregateOutputType | null
    _max: EstudoTagsMaxAggregateOutputType | null
  }

  export type EstudoTagsAvgAggregateOutputType = {
    estudoId: number | null
    tagId: number | null
  }

  export type EstudoTagsSumAggregateOutputType = {
    estudoId: number | null
    tagId: number | null
  }

  export type EstudoTagsMinAggregateOutputType = {
    estudoId: number | null
    tagId: number | null
  }

  export type EstudoTagsMaxAggregateOutputType = {
    estudoId: number | null
    tagId: number | null
  }

  export type EstudoTagsCountAggregateOutputType = {
    estudoId: number
    tagId: number
    _all: number
  }


  export type EstudoTagsAvgAggregateInputType = {
    estudoId?: true
    tagId?: true
  }

  export type EstudoTagsSumAggregateInputType = {
    estudoId?: true
    tagId?: true
  }

  export type EstudoTagsMinAggregateInputType = {
    estudoId?: true
    tagId?: true
  }

  export type EstudoTagsMaxAggregateInputType = {
    estudoId?: true
    tagId?: true
  }

  export type EstudoTagsCountAggregateInputType = {
    estudoId?: true
    tagId?: true
    _all?: true
  }

  export type EstudoTagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstudoTags to aggregate.
     */
    where?: EstudoTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudoTags to fetch.
     */
    orderBy?: EstudoTagsOrderByWithRelationInput | EstudoTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudoTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstudoTags
    **/
    _count?: true | EstudoTagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudoTagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudoTagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudoTagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudoTagsMaxAggregateInputType
  }

  export type GetEstudoTagsAggregateType<T extends EstudoTagsAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudoTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudoTags[P]>
      : GetScalarType<T[P], AggregateEstudoTags[P]>
  }




  export type EstudoTagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudoTagsWhereInput
    orderBy?: EstudoTagsOrderByWithAggregationInput | EstudoTagsOrderByWithAggregationInput[]
    by: EstudoTagsScalarFieldEnum[] | EstudoTagsScalarFieldEnum
    having?: EstudoTagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudoTagsCountAggregateInputType | true
    _avg?: EstudoTagsAvgAggregateInputType
    _sum?: EstudoTagsSumAggregateInputType
    _min?: EstudoTagsMinAggregateInputType
    _max?: EstudoTagsMaxAggregateInputType
  }

  export type EstudoTagsGroupByOutputType = {
    estudoId: number
    tagId: number
    _count: EstudoTagsCountAggregateOutputType | null
    _avg: EstudoTagsAvgAggregateOutputType | null
    _sum: EstudoTagsSumAggregateOutputType | null
    _min: EstudoTagsMinAggregateOutputType | null
    _max: EstudoTagsMaxAggregateOutputType | null
  }

  type GetEstudoTagsGroupByPayload<T extends EstudoTagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudoTagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudoTagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudoTagsGroupByOutputType[P]>
            : GetScalarType<T[P], EstudoTagsGroupByOutputType[P]>
        }
      >
    >


  export type EstudoTagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    estudoId?: boolean
    tagId?: boolean
    estudo?: boolean | EstudoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudoTags"]>



  export type EstudoTagsSelectScalar = {
    estudoId?: boolean
    tagId?: boolean
  }

  export type EstudoTagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"estudoId" | "tagId", ExtArgs["result"]["estudoTags"]>
  export type EstudoTagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudo?: boolean | EstudoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $EstudoTagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstudoTags"
    objects: {
      estudo: Prisma.$EstudoPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      estudoId: number
      tagId: number
    }, ExtArgs["result"]["estudoTags"]>
    composites: {}
  }

  type EstudoTagsGetPayload<S extends boolean | null | undefined | EstudoTagsDefaultArgs> = $Result.GetResult<Prisma.$EstudoTagsPayload, S>

  type EstudoTagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudoTagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudoTagsCountAggregateInputType | true
    }

  export interface EstudoTagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstudoTags'], meta: { name: 'EstudoTags' } }
    /**
     * Find zero or one EstudoTags that matches the filter.
     * @param {EstudoTagsFindUniqueArgs} args - Arguments to find a EstudoTags
     * @example
     * // Get one EstudoTags
     * const estudoTags = await prisma.estudoTags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudoTagsFindUniqueArgs>(args: SelectSubset<T, EstudoTagsFindUniqueArgs<ExtArgs>>): Prisma__EstudoTagsClient<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstudoTags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudoTagsFindUniqueOrThrowArgs} args - Arguments to find a EstudoTags
     * @example
     * // Get one EstudoTags
     * const estudoTags = await prisma.estudoTags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudoTagsFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudoTagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudoTagsClient<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstudoTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoTagsFindFirstArgs} args - Arguments to find a EstudoTags
     * @example
     * // Get one EstudoTags
     * const estudoTags = await prisma.estudoTags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudoTagsFindFirstArgs>(args?: SelectSubset<T, EstudoTagsFindFirstArgs<ExtArgs>>): Prisma__EstudoTagsClient<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstudoTags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoTagsFindFirstOrThrowArgs} args - Arguments to find a EstudoTags
     * @example
     * // Get one EstudoTags
     * const estudoTags = await prisma.estudoTags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudoTagsFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudoTagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudoTagsClient<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstudoTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoTagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstudoTags
     * const estudoTags = await prisma.estudoTags.findMany()
     * 
     * // Get first 10 EstudoTags
     * const estudoTags = await prisma.estudoTags.findMany({ take: 10 })
     * 
     * // Only select the `estudoId`
     * const estudoTagsWithEstudoIdOnly = await prisma.estudoTags.findMany({ select: { estudoId: true } })
     * 
     */
    findMany<T extends EstudoTagsFindManyArgs>(args?: SelectSubset<T, EstudoTagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstudoTags.
     * @param {EstudoTagsCreateArgs} args - Arguments to create a EstudoTags.
     * @example
     * // Create one EstudoTags
     * const EstudoTags = await prisma.estudoTags.create({
     *   data: {
     *     // ... data to create a EstudoTags
     *   }
     * })
     * 
     */
    create<T extends EstudoTagsCreateArgs>(args: SelectSubset<T, EstudoTagsCreateArgs<ExtArgs>>): Prisma__EstudoTagsClient<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstudoTags.
     * @param {EstudoTagsCreateManyArgs} args - Arguments to create many EstudoTags.
     * @example
     * // Create many EstudoTags
     * const estudoTags = await prisma.estudoTags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudoTagsCreateManyArgs>(args?: SelectSubset<T, EstudoTagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EstudoTags.
     * @param {EstudoTagsDeleteArgs} args - Arguments to delete one EstudoTags.
     * @example
     * // Delete one EstudoTags
     * const EstudoTags = await prisma.estudoTags.delete({
     *   where: {
     *     // ... filter to delete one EstudoTags
     *   }
     * })
     * 
     */
    delete<T extends EstudoTagsDeleteArgs>(args: SelectSubset<T, EstudoTagsDeleteArgs<ExtArgs>>): Prisma__EstudoTagsClient<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstudoTags.
     * @param {EstudoTagsUpdateArgs} args - Arguments to update one EstudoTags.
     * @example
     * // Update one EstudoTags
     * const estudoTags = await prisma.estudoTags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudoTagsUpdateArgs>(args: SelectSubset<T, EstudoTagsUpdateArgs<ExtArgs>>): Prisma__EstudoTagsClient<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstudoTags.
     * @param {EstudoTagsDeleteManyArgs} args - Arguments to filter EstudoTags to delete.
     * @example
     * // Delete a few EstudoTags
     * const { count } = await prisma.estudoTags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudoTagsDeleteManyArgs>(args?: SelectSubset<T, EstudoTagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstudoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoTagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstudoTags
     * const estudoTags = await prisma.estudoTags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudoTagsUpdateManyArgs>(args: SelectSubset<T, EstudoTagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EstudoTags.
     * @param {EstudoTagsUpsertArgs} args - Arguments to update or create a EstudoTags.
     * @example
     * // Update or create a EstudoTags
     * const estudoTags = await prisma.estudoTags.upsert({
     *   create: {
     *     // ... data to create a EstudoTags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstudoTags we want to update
     *   }
     * })
     */
    upsert<T extends EstudoTagsUpsertArgs>(args: SelectSubset<T, EstudoTagsUpsertArgs<ExtArgs>>): Prisma__EstudoTagsClient<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstudoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoTagsCountArgs} args - Arguments to filter EstudoTags to count.
     * @example
     * // Count the number of EstudoTags
     * const count = await prisma.estudoTags.count({
     *   where: {
     *     // ... the filter for the EstudoTags we want to count
     *   }
     * })
    **/
    count<T extends EstudoTagsCountArgs>(
      args?: Subset<T, EstudoTagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudoTagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstudoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoTagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudoTagsAggregateArgs>(args: Subset<T, EstudoTagsAggregateArgs>): Prisma.PrismaPromise<GetEstudoTagsAggregateType<T>>

    /**
     * Group by EstudoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoTagsGroupByArgs} args - Group by arguments.
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
      T extends EstudoTagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudoTagsGroupByArgs['orderBy'] }
        : { orderBy?: EstudoTagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstudoTagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudoTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstudoTags model
   */
  readonly fields: EstudoTagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstudoTags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudoTagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudo<T extends EstudoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudoDefaultArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EstudoTags model
   */
  interface EstudoTagsFieldRefs {
    readonly estudoId: FieldRef<"EstudoTags", 'Int'>
    readonly tagId: FieldRef<"EstudoTags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EstudoTags findUnique
   */
  export type EstudoTagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    /**
     * Filter, which EstudoTags to fetch.
     */
    where: EstudoTagsWhereUniqueInput
  }

  /**
   * EstudoTags findUniqueOrThrow
   */
  export type EstudoTagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    /**
     * Filter, which EstudoTags to fetch.
     */
    where: EstudoTagsWhereUniqueInput
  }

  /**
   * EstudoTags findFirst
   */
  export type EstudoTagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    /**
     * Filter, which EstudoTags to fetch.
     */
    where?: EstudoTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudoTags to fetch.
     */
    orderBy?: EstudoTagsOrderByWithRelationInput | EstudoTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstudoTags.
     */
    cursor?: EstudoTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstudoTags.
     */
    distinct?: EstudoTagsScalarFieldEnum | EstudoTagsScalarFieldEnum[]
  }

  /**
   * EstudoTags findFirstOrThrow
   */
  export type EstudoTagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    /**
     * Filter, which EstudoTags to fetch.
     */
    where?: EstudoTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudoTags to fetch.
     */
    orderBy?: EstudoTagsOrderByWithRelationInput | EstudoTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstudoTags.
     */
    cursor?: EstudoTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstudoTags.
     */
    distinct?: EstudoTagsScalarFieldEnum | EstudoTagsScalarFieldEnum[]
  }

  /**
   * EstudoTags findMany
   */
  export type EstudoTagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    /**
     * Filter, which EstudoTags to fetch.
     */
    where?: EstudoTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstudoTags to fetch.
     */
    orderBy?: EstudoTagsOrderByWithRelationInput | EstudoTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstudoTags.
     */
    cursor?: EstudoTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstudoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstudoTags.
     */
    skip?: number
    distinct?: EstudoTagsScalarFieldEnum | EstudoTagsScalarFieldEnum[]
  }

  /**
   * EstudoTags create
   */
  export type EstudoTagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    /**
     * The data needed to create a EstudoTags.
     */
    data: XOR<EstudoTagsCreateInput, EstudoTagsUncheckedCreateInput>
  }

  /**
   * EstudoTags createMany
   */
  export type EstudoTagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstudoTags.
     */
    data: EstudoTagsCreateManyInput | EstudoTagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EstudoTags update
   */
  export type EstudoTagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    /**
     * The data needed to update a EstudoTags.
     */
    data: XOR<EstudoTagsUpdateInput, EstudoTagsUncheckedUpdateInput>
    /**
     * Choose, which EstudoTags to update.
     */
    where: EstudoTagsWhereUniqueInput
  }

  /**
   * EstudoTags updateMany
   */
  export type EstudoTagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstudoTags.
     */
    data: XOR<EstudoTagsUpdateManyMutationInput, EstudoTagsUncheckedUpdateManyInput>
    /**
     * Filter which EstudoTags to update
     */
    where?: EstudoTagsWhereInput
    /**
     * Limit how many EstudoTags to update.
     */
    limit?: number
  }

  /**
   * EstudoTags upsert
   */
  export type EstudoTagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    /**
     * The filter to search for the EstudoTags to update in case it exists.
     */
    where: EstudoTagsWhereUniqueInput
    /**
     * In case the EstudoTags found by the `where` argument doesn't exist, create a new EstudoTags with this data.
     */
    create: XOR<EstudoTagsCreateInput, EstudoTagsUncheckedCreateInput>
    /**
     * In case the EstudoTags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudoTagsUpdateInput, EstudoTagsUncheckedUpdateInput>
  }

  /**
   * EstudoTags delete
   */
  export type EstudoTagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    /**
     * Filter which EstudoTags to delete.
     */
    where: EstudoTagsWhereUniqueInput
  }

  /**
   * EstudoTags deleteMany
   */
  export type EstudoTagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstudoTags to delete
     */
    where?: EstudoTagsWhereInput
    /**
     * Limit how many EstudoTags to delete.
     */
    limit?: number
  }

  /**
   * EstudoTags without action
   */
  export type EstudoTagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
  }


  /**
   * Model Estudo
   */

  export type AggregateEstudo = {
    _count: EstudoCountAggregateOutputType | null
    _avg: EstudoAvgAggregateOutputType | null
    _sum: EstudoSumAggregateOutputType | null
    _min: EstudoMinAggregateOutputType | null
    _max: EstudoMaxAggregateOutputType | null
  }

  export type EstudoAvgAggregateOutputType = {
    id: number | null
  }

  export type EstudoSumAggregateOutputType = {
    id: number | null
  }

  export type EstudoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    corpo: string | null
  }

  export type EstudoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    corpo: string | null
  }

  export type EstudoCountAggregateOutputType = {
    id: number
    titulo: number
    corpo: number
    _all: number
  }


  export type EstudoAvgAggregateInputType = {
    id?: true
  }

  export type EstudoSumAggregateInputType = {
    id?: true
  }

  export type EstudoMinAggregateInputType = {
    id?: true
    titulo?: true
    corpo?: true
  }

  export type EstudoMaxAggregateInputType = {
    id?: true
    titulo?: true
    corpo?: true
  }

  export type EstudoCountAggregateInputType = {
    id?: true
    titulo?: true
    corpo?: true
    _all?: true
  }

  export type EstudoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudo to aggregate.
     */
    where?: EstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudos to fetch.
     */
    orderBy?: EstudoOrderByWithRelationInput | EstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudos
    **/
    _count?: true | EstudoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudoMaxAggregateInputType
  }

  export type GetEstudoAggregateType<T extends EstudoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudo[P]>
      : GetScalarType<T[P], AggregateEstudo[P]>
  }




  export type EstudoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudoWhereInput
    orderBy?: EstudoOrderByWithAggregationInput | EstudoOrderByWithAggregationInput[]
    by: EstudoScalarFieldEnum[] | EstudoScalarFieldEnum
    having?: EstudoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudoCountAggregateInputType | true
    _avg?: EstudoAvgAggregateInputType
    _sum?: EstudoSumAggregateInputType
    _min?: EstudoMinAggregateInputType
    _max?: EstudoMaxAggregateInputType
  }

  export type EstudoGroupByOutputType = {
    id: number
    titulo: string
    corpo: string
    _count: EstudoCountAggregateOutputType | null
    _avg: EstudoAvgAggregateOutputType | null
    _sum: EstudoSumAggregateOutputType | null
    _min: EstudoMinAggregateOutputType | null
    _max: EstudoMaxAggregateOutputType | null
  }

  type GetEstudoGroupByPayload<T extends EstudoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudoGroupByOutputType[P]>
            : GetScalarType<T[P], EstudoGroupByOutputType[P]>
        }
      >
    >


  export type EstudoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    corpo?: boolean
    tags?: boolean | Estudo$tagsArgs<ExtArgs>
    videos?: boolean | Estudo$videosArgs<ExtArgs>
    fotos?: boolean | Estudo$fotosArgs<ExtArgs>
    _count?: boolean | EstudoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudo"]>



  export type EstudoSelectScalar = {
    id?: boolean
    titulo?: boolean
    corpo?: boolean
  }

  export type EstudoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "corpo", ExtArgs["result"]["estudo"]>
  export type EstudoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | Estudo$tagsArgs<ExtArgs>
    videos?: boolean | Estudo$videosArgs<ExtArgs>
    fotos?: boolean | Estudo$fotosArgs<ExtArgs>
    _count?: boolean | EstudoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EstudoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudo"
    objects: {
      tags: Prisma.$EstudoTagsPayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
      fotos: Prisma.$FotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      corpo: string
    }, ExtArgs["result"]["estudo"]>
    composites: {}
  }

  type EstudoGetPayload<S extends boolean | null | undefined | EstudoDefaultArgs> = $Result.GetResult<Prisma.$EstudoPayload, S>

  type EstudoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstudoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstudoCountAggregateInputType | true
    }

  export interface EstudoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudo'], meta: { name: 'Estudo' } }
    /**
     * Find zero or one Estudo that matches the filter.
     * @param {EstudoFindUniqueArgs} args - Arguments to find a Estudo
     * @example
     * // Get one Estudo
     * const estudo = await prisma.estudo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudoFindUniqueArgs>(args: SelectSubset<T, EstudoFindUniqueArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstudoFindUniqueOrThrowArgs} args - Arguments to find a Estudo
     * @example
     * // Get one Estudo
     * const estudo = await prisma.estudo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoFindFirstArgs} args - Arguments to find a Estudo
     * @example
     * // Get one Estudo
     * const estudo = await prisma.estudo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudoFindFirstArgs>(args?: SelectSubset<T, EstudoFindFirstArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoFindFirstOrThrowArgs} args - Arguments to find a Estudo
     * @example
     * // Get one Estudo
     * const estudo = await prisma.estudo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudos
     * const estudos = await prisma.estudo.findMany()
     * 
     * // Get first 10 Estudos
     * const estudos = await prisma.estudo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudoWithIdOnly = await prisma.estudo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudoFindManyArgs>(args?: SelectSubset<T, EstudoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudo.
     * @param {EstudoCreateArgs} args - Arguments to create a Estudo.
     * @example
     * // Create one Estudo
     * const Estudo = await prisma.estudo.create({
     *   data: {
     *     // ... data to create a Estudo
     *   }
     * })
     * 
     */
    create<T extends EstudoCreateArgs>(args: SelectSubset<T, EstudoCreateArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudos.
     * @param {EstudoCreateManyArgs} args - Arguments to create many Estudos.
     * @example
     * // Create many Estudos
     * const estudo = await prisma.estudo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudoCreateManyArgs>(args?: SelectSubset<T, EstudoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estudo.
     * @param {EstudoDeleteArgs} args - Arguments to delete one Estudo.
     * @example
     * // Delete one Estudo
     * const Estudo = await prisma.estudo.delete({
     *   where: {
     *     // ... filter to delete one Estudo
     *   }
     * })
     * 
     */
    delete<T extends EstudoDeleteArgs>(args: SelectSubset<T, EstudoDeleteArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudo.
     * @param {EstudoUpdateArgs} args - Arguments to update one Estudo.
     * @example
     * // Update one Estudo
     * const estudo = await prisma.estudo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudoUpdateArgs>(args: SelectSubset<T, EstudoUpdateArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudos.
     * @param {EstudoDeleteManyArgs} args - Arguments to filter Estudos to delete.
     * @example
     * // Delete a few Estudos
     * const { count } = await prisma.estudo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudoDeleteManyArgs>(args?: SelectSubset<T, EstudoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudos
     * const estudo = await prisma.estudo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudoUpdateManyArgs>(args: SelectSubset<T, EstudoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estudo.
     * @param {EstudoUpsertArgs} args - Arguments to update or create a Estudo.
     * @example
     * // Update or create a Estudo
     * const estudo = await prisma.estudo.upsert({
     *   create: {
     *     // ... data to create a Estudo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudo we want to update
     *   }
     * })
     */
    upsert<T extends EstudoUpsertArgs>(args: SelectSubset<T, EstudoUpsertArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoCountArgs} args - Arguments to filter Estudos to count.
     * @example
     * // Count the number of Estudos
     * const count = await prisma.estudo.count({
     *   where: {
     *     // ... the filter for the Estudos we want to count
     *   }
     * })
    **/
    count<T extends EstudoCountArgs>(
      args?: Subset<T, EstudoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudoAggregateArgs>(args: Subset<T, EstudoAggregateArgs>): Prisma.PrismaPromise<GetEstudoAggregateType<T>>

    /**
     * Group by Estudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudoGroupByArgs} args - Group by arguments.
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
      T extends EstudoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudoGroupByArgs['orderBy'] }
        : { orderBy?: EstudoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudo model
   */
  readonly fields: EstudoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends Estudo$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Estudo$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends Estudo$videosArgs<ExtArgs> = {}>(args?: Subset<T, Estudo$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fotos<T extends Estudo$fotosArgs<ExtArgs> = {}>(args?: Subset<T, Estudo$fotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Estudo model
   */
  interface EstudoFieldRefs {
    readonly id: FieldRef<"Estudo", 'Int'>
    readonly titulo: FieldRef<"Estudo", 'String'>
    readonly corpo: FieldRef<"Estudo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estudo findUnique
   */
  export type EstudoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
    /**
     * Filter, which Estudo to fetch.
     */
    where: EstudoWhereUniqueInput
  }

  /**
   * Estudo findUniqueOrThrow
   */
  export type EstudoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
    /**
     * Filter, which Estudo to fetch.
     */
    where: EstudoWhereUniqueInput
  }

  /**
   * Estudo findFirst
   */
  export type EstudoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
    /**
     * Filter, which Estudo to fetch.
     */
    where?: EstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudos to fetch.
     */
    orderBy?: EstudoOrderByWithRelationInput | EstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudos.
     */
    cursor?: EstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudos.
     */
    distinct?: EstudoScalarFieldEnum | EstudoScalarFieldEnum[]
  }

  /**
   * Estudo findFirstOrThrow
   */
  export type EstudoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
    /**
     * Filter, which Estudo to fetch.
     */
    where?: EstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudos to fetch.
     */
    orderBy?: EstudoOrderByWithRelationInput | EstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudos.
     */
    cursor?: EstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudos.
     */
    distinct?: EstudoScalarFieldEnum | EstudoScalarFieldEnum[]
  }

  /**
   * Estudo findMany
   */
  export type EstudoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
    /**
     * Filter, which Estudos to fetch.
     */
    where?: EstudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudos to fetch.
     */
    orderBy?: EstudoOrderByWithRelationInput | EstudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudos.
     */
    cursor?: EstudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudos.
     */
    skip?: number
    distinct?: EstudoScalarFieldEnum | EstudoScalarFieldEnum[]
  }

  /**
   * Estudo create
   */
  export type EstudoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudo.
     */
    data: XOR<EstudoCreateInput, EstudoUncheckedCreateInput>
  }

  /**
   * Estudo createMany
   */
  export type EstudoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudos.
     */
    data: EstudoCreateManyInput | EstudoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudo update
   */
  export type EstudoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudo.
     */
    data: XOR<EstudoUpdateInput, EstudoUncheckedUpdateInput>
    /**
     * Choose, which Estudo to update.
     */
    where: EstudoWhereUniqueInput
  }

  /**
   * Estudo updateMany
   */
  export type EstudoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudos.
     */
    data: XOR<EstudoUpdateManyMutationInput, EstudoUncheckedUpdateManyInput>
    /**
     * Filter which Estudos to update
     */
    where?: EstudoWhereInput
    /**
     * Limit how many Estudos to update.
     */
    limit?: number
  }

  /**
   * Estudo upsert
   */
  export type EstudoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudo to update in case it exists.
     */
    where: EstudoWhereUniqueInput
    /**
     * In case the Estudo found by the `where` argument doesn't exist, create a new Estudo with this data.
     */
    create: XOR<EstudoCreateInput, EstudoUncheckedCreateInput>
    /**
     * In case the Estudo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudoUpdateInput, EstudoUncheckedUpdateInput>
  }

  /**
   * Estudo delete
   */
  export type EstudoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
    /**
     * Filter which Estudo to delete.
     */
    where: EstudoWhereUniqueInput
  }

  /**
   * Estudo deleteMany
   */
  export type EstudoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudos to delete
     */
    where?: EstudoWhereInput
    /**
     * Limit how many Estudos to delete.
     */
    limit?: number
  }

  /**
   * Estudo.tags
   */
  export type Estudo$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    where?: EstudoTagsWhereInput
    orderBy?: EstudoTagsOrderByWithRelationInput | EstudoTagsOrderByWithRelationInput[]
    cursor?: EstudoTagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudoTagsScalarFieldEnum | EstudoTagsScalarFieldEnum[]
  }

  /**
   * Estudo.videos
   */
  export type Estudo$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Estudo.fotos
   */
  export type Estudo$fotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    cursor?: FotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Estudo without action
   */
  export type EstudoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudo
     */
    select?: EstudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estudo
     */
    omit?: EstudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    nome: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    estudo?: boolean | Tag$estudoArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudo?: boolean | Tag$estudoArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      estudo: Prisma.$EstudoTagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudo<T extends Tag$estudoArgs<ExtArgs> = {}>(args?: Subset<T, Tag$estudoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudoTagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly nome: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.estudo
   */
  export type Tag$estudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudoTags
     */
    select?: EstudoTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstudoTags
     */
    omit?: EstudoTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudoTagsInclude<ExtArgs> | null
    where?: EstudoTagsWhereInput
    orderBy?: EstudoTagsOrderByWithRelationInput | EstudoTagsOrderByWithRelationInput[]
    cursor?: EstudoTagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudoTagsScalarFieldEnum | EstudoTagsScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    estudoId: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    estudoId: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    url: string | null
    estudoId: number | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    estudoId: number | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    url: number
    estudoId: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    estudoId?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    estudoId?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    url?: true
    estudoId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    url?: true
    estudoId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    url?: true
    estudoId?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    url: string
    estudoId: number
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    estudoId?: boolean
    estudo?: boolean | EstudoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>



  export type VideoSelectScalar = {
    id?: boolean
    url?: boolean
    estudoId?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "estudoId", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudo?: boolean | EstudoDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      estudo: Prisma.$EstudoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      estudoId: number
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudo<T extends EstudoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudoDefaultArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly url: FieldRef<"Video", 'String'>
    readonly estudoId: FieldRef<"Video", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Foto
   */

  export type AggregateFoto = {
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  export type FotoAvgAggregateOutputType = {
    id: number | null
    estudoId: number | null
  }

  export type FotoSumAggregateOutputType = {
    id: number | null
    estudoId: number | null
  }

  export type FotoMinAggregateOutputType = {
    id: number | null
    url: string | null
    estudoId: number | null
  }

  export type FotoMaxAggregateOutputType = {
    id: number | null
    url: string | null
    estudoId: number | null
  }

  export type FotoCountAggregateOutputType = {
    id: number
    url: number
    estudoId: number
    _all: number
  }


  export type FotoAvgAggregateInputType = {
    id?: true
    estudoId?: true
  }

  export type FotoSumAggregateInputType = {
    id?: true
    estudoId?: true
  }

  export type FotoMinAggregateInputType = {
    id?: true
    url?: true
    estudoId?: true
  }

  export type FotoMaxAggregateInputType = {
    id?: true
    url?: true
    estudoId?: true
  }

  export type FotoCountAggregateInputType = {
    id?: true
    url?: true
    estudoId?: true
    _all?: true
  }

  export type FotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foto to aggregate.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fotos
    **/
    _count?: true | FotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FotoMaxAggregateInputType
  }

  export type GetFotoAggregateType<T extends FotoAggregateArgs> = {
        [P in keyof T & keyof AggregateFoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoto[P]>
      : GetScalarType<T[P], AggregateFoto[P]>
  }




  export type FotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FotoWhereInput
    orderBy?: FotoOrderByWithAggregationInput | FotoOrderByWithAggregationInput[]
    by: FotoScalarFieldEnum[] | FotoScalarFieldEnum
    having?: FotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FotoCountAggregateInputType | true
    _avg?: FotoAvgAggregateInputType
    _sum?: FotoSumAggregateInputType
    _min?: FotoMinAggregateInputType
    _max?: FotoMaxAggregateInputType
  }

  export type FotoGroupByOutputType = {
    id: number
    url: string
    estudoId: number
    _count: FotoCountAggregateOutputType | null
    _avg: FotoAvgAggregateOutputType | null
    _sum: FotoSumAggregateOutputType | null
    _min: FotoMinAggregateOutputType | null
    _max: FotoMaxAggregateOutputType | null
  }

  type GetFotoGroupByPayload<T extends FotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FotoGroupByOutputType[P]>
            : GetScalarType<T[P], FotoGroupByOutputType[P]>
        }
      >
    >


  export type FotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    estudoId?: boolean
    estudo?: boolean | EstudoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foto"]>



  export type FotoSelectScalar = {
    id?: boolean
    url?: boolean
    estudoId?: boolean
  }

  export type FotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "estudoId", ExtArgs["result"]["foto"]>
  export type FotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudo?: boolean | EstudoDefaultArgs<ExtArgs>
  }

  export type $FotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foto"
    objects: {
      estudo: Prisma.$EstudoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      estudoId: number
    }, ExtArgs["result"]["foto"]>
    composites: {}
  }

  type FotoGetPayload<S extends boolean | null | undefined | FotoDefaultArgs> = $Result.GetResult<Prisma.$FotoPayload, S>

  type FotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FotoCountAggregateInputType | true
    }

  export interface FotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foto'], meta: { name: 'Foto' } }
    /**
     * Find zero or one Foto that matches the filter.
     * @param {FotoFindUniqueArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FotoFindUniqueArgs>(args: SelectSubset<T, FotoFindUniqueArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FotoFindUniqueOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FotoFindUniqueOrThrowArgs>(args: SelectSubset<T, FotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FotoFindFirstArgs>(args?: SelectSubset<T, FotoFindFirstArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindFirstOrThrowArgs} args - Arguments to find a Foto
     * @example
     * // Get one Foto
     * const foto = await prisma.foto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FotoFindFirstOrThrowArgs>(args?: SelectSubset<T, FotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fotos
     * const fotos = await prisma.foto.findMany()
     * 
     * // Get first 10 Fotos
     * const fotos = await prisma.foto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fotoWithIdOnly = await prisma.foto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FotoFindManyArgs>(args?: SelectSubset<T, FotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foto.
     * @param {FotoCreateArgs} args - Arguments to create a Foto.
     * @example
     * // Create one Foto
     * const Foto = await prisma.foto.create({
     *   data: {
     *     // ... data to create a Foto
     *   }
     * })
     * 
     */
    create<T extends FotoCreateArgs>(args: SelectSubset<T, FotoCreateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fotos.
     * @param {FotoCreateManyArgs} args - Arguments to create many Fotos.
     * @example
     * // Create many Fotos
     * const foto = await prisma.foto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FotoCreateManyArgs>(args?: SelectSubset<T, FotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Foto.
     * @param {FotoDeleteArgs} args - Arguments to delete one Foto.
     * @example
     * // Delete one Foto
     * const Foto = await prisma.foto.delete({
     *   where: {
     *     // ... filter to delete one Foto
     *   }
     * })
     * 
     */
    delete<T extends FotoDeleteArgs>(args: SelectSubset<T, FotoDeleteArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foto.
     * @param {FotoUpdateArgs} args - Arguments to update one Foto.
     * @example
     * // Update one Foto
     * const foto = await prisma.foto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FotoUpdateArgs>(args: SelectSubset<T, FotoUpdateArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fotos.
     * @param {FotoDeleteManyArgs} args - Arguments to filter Fotos to delete.
     * @example
     * // Delete a few Fotos
     * const { count } = await prisma.foto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FotoDeleteManyArgs>(args?: SelectSubset<T, FotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fotos
     * const foto = await prisma.foto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FotoUpdateManyArgs>(args: SelectSubset<T, FotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Foto.
     * @param {FotoUpsertArgs} args - Arguments to update or create a Foto.
     * @example
     * // Update or create a Foto
     * const foto = await prisma.foto.upsert({
     *   create: {
     *     // ... data to create a Foto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foto we want to update
     *   }
     * })
     */
    upsert<T extends FotoUpsertArgs>(args: SelectSubset<T, FotoUpsertArgs<ExtArgs>>): Prisma__FotoClient<$Result.GetResult<Prisma.$FotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoCountArgs} args - Arguments to filter Fotos to count.
     * @example
     * // Count the number of Fotos
     * const count = await prisma.foto.count({
     *   where: {
     *     // ... the filter for the Fotos we want to count
     *   }
     * })
    **/
    count<T extends FotoCountArgs>(
      args?: Subset<T, FotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FotoAggregateArgs>(args: Subset<T, FotoAggregateArgs>): Prisma.PrismaPromise<GetFotoAggregateType<T>>

    /**
     * Group by Foto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FotoGroupByArgs} args - Group by arguments.
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
      T extends FotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FotoGroupByArgs['orderBy'] }
        : { orderBy?: FotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foto model
   */
  readonly fields: FotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudo<T extends EstudoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudoDefaultArgs<ExtArgs>>): Prisma__EstudoClient<$Result.GetResult<Prisma.$EstudoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Foto model
   */
  interface FotoFieldRefs {
    readonly id: FieldRef<"Foto", 'Int'>
    readonly url: FieldRef<"Foto", 'String'>
    readonly estudoId: FieldRef<"Foto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Foto findUnique
   */
  export type FotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findUniqueOrThrow
   */
  export type FotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto findFirst
   */
  export type FotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findFirstOrThrow
   */
  export type FotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Foto to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fotos.
     */
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto findMany
   */
  export type FotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter, which Fotos to fetch.
     */
    where?: FotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fotos to fetch.
     */
    orderBy?: FotoOrderByWithRelationInput | FotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fotos.
     */
    cursor?: FotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fotos.
     */
    skip?: number
    distinct?: FotoScalarFieldEnum | FotoScalarFieldEnum[]
  }

  /**
   * Foto create
   */
  export type FotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Foto.
     */
    data: XOR<FotoCreateInput, FotoUncheckedCreateInput>
  }

  /**
   * Foto createMany
   */
  export type FotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fotos.
     */
    data: FotoCreateManyInput | FotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foto update
   */
  export type FotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Foto.
     */
    data: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
    /**
     * Choose, which Foto to update.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto updateMany
   */
  export type FotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fotos.
     */
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyInput>
    /**
     * Filter which Fotos to update
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to update.
     */
    limit?: number
  }

  /**
   * Foto upsert
   */
  export type FotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Foto to update in case it exists.
     */
    where: FotoWhereUniqueInput
    /**
     * In case the Foto found by the `where` argument doesn't exist, create a new Foto with this data.
     */
    create: XOR<FotoCreateInput, FotoUncheckedCreateInput>
    /**
     * In case the Foto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FotoUpdateInput, FotoUncheckedUpdateInput>
  }

  /**
   * Foto delete
   */
  export type FotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
    /**
     * Filter which Foto to delete.
     */
    where: FotoWhereUniqueInput
  }

  /**
   * Foto deleteMany
   */
  export type FotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fotos to delete
     */
    where?: FotoWhereInput
    /**
     * Limit how many Fotos to delete.
     */
    limit?: number
  }

  /**
   * Foto without action
   */
  export type FotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foto
     */
    select?: FotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foto
     */
    omit?: FotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FotoInclude<ExtArgs> | null
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


  export const EstudoTagsScalarFieldEnum: {
    estudoId: 'estudoId',
    tagId: 'tagId'
  };

  export type EstudoTagsScalarFieldEnum = (typeof EstudoTagsScalarFieldEnum)[keyof typeof EstudoTagsScalarFieldEnum]


  export const EstudoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    corpo: 'corpo'
  };

  export type EstudoScalarFieldEnum = (typeof EstudoScalarFieldEnum)[keyof typeof EstudoScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    estudoId: 'estudoId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const FotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    estudoId: 'estudoId'
  };

  export type FotoScalarFieldEnum = (typeof FotoScalarFieldEnum)[keyof typeof FotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const EstudoOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    corpo: 'corpo'
  };

  export type EstudoOrderByRelevanceFieldEnum = (typeof EstudoOrderByRelevanceFieldEnum)[keyof typeof EstudoOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


  export const VideoOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type VideoOrderByRelevanceFieldEnum = (typeof VideoOrderByRelevanceFieldEnum)[keyof typeof VideoOrderByRelevanceFieldEnum]


  export const FotoOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type FotoOrderByRelevanceFieldEnum = (typeof FotoOrderByRelevanceFieldEnum)[keyof typeof FotoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EstudoTagsWhereInput = {
    AND?: EstudoTagsWhereInput | EstudoTagsWhereInput[]
    OR?: EstudoTagsWhereInput[]
    NOT?: EstudoTagsWhereInput | EstudoTagsWhereInput[]
    estudoId?: IntFilter<"EstudoTags"> | number
    tagId?: IntFilter<"EstudoTags"> | number
    estudo?: XOR<EstudoScalarRelationFilter, EstudoWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type EstudoTagsOrderByWithRelationInput = {
    estudoId?: SortOrder
    tagId?: SortOrder
    estudo?: EstudoOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type EstudoTagsWhereUniqueInput = Prisma.AtLeast<{
    estudoId_tagId?: EstudoTagsEstudoIdTagIdCompoundUniqueInput
    AND?: EstudoTagsWhereInput | EstudoTagsWhereInput[]
    OR?: EstudoTagsWhereInput[]
    NOT?: EstudoTagsWhereInput | EstudoTagsWhereInput[]
    estudoId?: IntFilter<"EstudoTags"> | number
    tagId?: IntFilter<"EstudoTags"> | number
    estudo?: XOR<EstudoScalarRelationFilter, EstudoWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "estudoId_tagId">

  export type EstudoTagsOrderByWithAggregationInput = {
    estudoId?: SortOrder
    tagId?: SortOrder
    _count?: EstudoTagsCountOrderByAggregateInput
    _avg?: EstudoTagsAvgOrderByAggregateInput
    _max?: EstudoTagsMaxOrderByAggregateInput
    _min?: EstudoTagsMinOrderByAggregateInput
    _sum?: EstudoTagsSumOrderByAggregateInput
  }

  export type EstudoTagsScalarWhereWithAggregatesInput = {
    AND?: EstudoTagsScalarWhereWithAggregatesInput | EstudoTagsScalarWhereWithAggregatesInput[]
    OR?: EstudoTagsScalarWhereWithAggregatesInput[]
    NOT?: EstudoTagsScalarWhereWithAggregatesInput | EstudoTagsScalarWhereWithAggregatesInput[]
    estudoId?: IntWithAggregatesFilter<"EstudoTags"> | number
    tagId?: IntWithAggregatesFilter<"EstudoTags"> | number
  }

  export type EstudoWhereInput = {
    AND?: EstudoWhereInput | EstudoWhereInput[]
    OR?: EstudoWhereInput[]
    NOT?: EstudoWhereInput | EstudoWhereInput[]
    id?: IntFilter<"Estudo"> | number
    titulo?: StringFilter<"Estudo"> | string
    corpo?: StringFilter<"Estudo"> | string
    tags?: EstudoTagsListRelationFilter
    videos?: VideoListRelationFilter
    fotos?: FotoListRelationFilter
  }

  export type EstudoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    corpo?: SortOrder
    tags?: EstudoTagsOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    fotos?: FotoOrderByRelationAggregateInput
    _relevance?: EstudoOrderByRelevanceInput
  }

  export type EstudoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstudoWhereInput | EstudoWhereInput[]
    OR?: EstudoWhereInput[]
    NOT?: EstudoWhereInput | EstudoWhereInput[]
    titulo?: StringFilter<"Estudo"> | string
    corpo?: StringFilter<"Estudo"> | string
    tags?: EstudoTagsListRelationFilter
    videos?: VideoListRelationFilter
    fotos?: FotoListRelationFilter
  }, "id">

  export type EstudoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    corpo?: SortOrder
    _count?: EstudoCountOrderByAggregateInput
    _avg?: EstudoAvgOrderByAggregateInput
    _max?: EstudoMaxOrderByAggregateInput
    _min?: EstudoMinOrderByAggregateInput
    _sum?: EstudoSumOrderByAggregateInput
  }

  export type EstudoScalarWhereWithAggregatesInput = {
    AND?: EstudoScalarWhereWithAggregatesInput | EstudoScalarWhereWithAggregatesInput[]
    OR?: EstudoScalarWhereWithAggregatesInput[]
    NOT?: EstudoScalarWhereWithAggregatesInput | EstudoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estudo"> | number
    titulo?: StringWithAggregatesFilter<"Estudo"> | string
    corpo?: StringWithAggregatesFilter<"Estudo"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    nome?: StringFilter<"Tag"> | string
    estudo?: EstudoTagsListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    estudo?: EstudoTagsOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    estudo?: EstudoTagsListRelationFilter
  }, "id" | "nome">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    nome?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    url?: StringFilter<"Video"> | string
    estudoId?: IntFilter<"Video"> | number
    estudo?: XOR<EstudoScalarRelationFilter, EstudoWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
    estudo?: EstudoOrderByWithRelationInput
    _relevance?: VideoOrderByRelevanceInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    url?: StringFilter<"Video"> | string
    estudoId?: IntFilter<"Video"> | number
    estudo?: XOR<EstudoScalarRelationFilter, EstudoWhereInput>
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    url?: StringWithAggregatesFilter<"Video"> | string
    estudoId?: IntWithAggregatesFilter<"Video"> | number
  }

  export type FotoWhereInput = {
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    id?: IntFilter<"Foto"> | number
    url?: StringFilter<"Foto"> | string
    estudoId?: IntFilter<"Foto"> | number
    estudo?: XOR<EstudoScalarRelationFilter, EstudoWhereInput>
  }

  export type FotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
    estudo?: EstudoOrderByWithRelationInput
    _relevance?: FotoOrderByRelevanceInput
  }

  export type FotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FotoWhereInput | FotoWhereInput[]
    OR?: FotoWhereInput[]
    NOT?: FotoWhereInput | FotoWhereInput[]
    url?: StringFilter<"Foto"> | string
    estudoId?: IntFilter<"Foto"> | number
    estudo?: XOR<EstudoScalarRelationFilter, EstudoWhereInput>
  }, "id">

  export type FotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
    _count?: FotoCountOrderByAggregateInput
    _avg?: FotoAvgOrderByAggregateInput
    _max?: FotoMaxOrderByAggregateInput
    _min?: FotoMinOrderByAggregateInput
    _sum?: FotoSumOrderByAggregateInput
  }

  export type FotoScalarWhereWithAggregatesInput = {
    AND?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    OR?: FotoScalarWhereWithAggregatesInput[]
    NOT?: FotoScalarWhereWithAggregatesInput | FotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Foto"> | number
    url?: StringWithAggregatesFilter<"Foto"> | string
    estudoId?: IntWithAggregatesFilter<"Foto"> | number
  }

  export type EstudoTagsCreateInput = {
    estudo: EstudoCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutEstudoInput
  }

  export type EstudoTagsUncheckedCreateInput = {
    estudoId: number
    tagId: number
  }

  export type EstudoTagsUpdateInput = {
    estudo?: EstudoUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutEstudoNestedInput
  }

  export type EstudoTagsUncheckedUpdateInput = {
    estudoId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudoTagsCreateManyInput = {
    estudoId: number
    tagId: number
  }

  export type EstudoTagsUpdateManyMutationInput = {

  }

  export type EstudoTagsUncheckedUpdateManyInput = {
    estudoId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudoCreateInput = {
    titulo: string
    corpo: string
    tags?: EstudoTagsCreateNestedManyWithoutEstudoInput
    videos?: VideoCreateNestedManyWithoutEstudoInput
    fotos?: FotoCreateNestedManyWithoutEstudoInput
  }

  export type EstudoUncheckedCreateInput = {
    id?: number
    titulo: string
    corpo: string
    tags?: EstudoTagsUncheckedCreateNestedManyWithoutEstudoInput
    videos?: VideoUncheckedCreateNestedManyWithoutEstudoInput
    fotos?: FotoUncheckedCreateNestedManyWithoutEstudoInput
  }

  export type EstudoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
    tags?: EstudoTagsUpdateManyWithoutEstudoNestedInput
    videos?: VideoUpdateManyWithoutEstudoNestedInput
    fotos?: FotoUpdateManyWithoutEstudoNestedInput
  }

  export type EstudoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
    tags?: EstudoTagsUncheckedUpdateManyWithoutEstudoNestedInput
    videos?: VideoUncheckedUpdateManyWithoutEstudoNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutEstudoNestedInput
  }

  export type EstudoCreateManyInput = {
    id?: number
    titulo: string
    corpo: string
  }

  export type EstudoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
  }

  export type EstudoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    nome: string
    estudo?: EstudoTagsCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    nome: string
    estudo?: EstudoTagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    estudo?: EstudoTagsUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    estudo?: EstudoTagsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    nome: string
  }

  export type TagUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateInput = {
    url: string
    estudo: EstudoCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    url: string
    estudoId: number
  }

  export type VideoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    estudo?: EstudoUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    estudoId?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateManyInput = {
    id?: number
    url: string
    estudoId: number
  }

  export type VideoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    estudoId?: IntFieldUpdateOperationsInput | number
  }

  export type FotoCreateInput = {
    url: string
    estudo: EstudoCreateNestedOneWithoutFotosInput
  }

  export type FotoUncheckedCreateInput = {
    id?: number
    url: string
    estudoId: number
  }

  export type FotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    estudo?: EstudoUpdateOneRequiredWithoutFotosNestedInput
  }

  export type FotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    estudoId?: IntFieldUpdateOperationsInput | number
  }

  export type FotoCreateManyInput = {
    id?: number
    url: string
    estudoId: number
  }

  export type FotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    estudoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EstudoScalarRelationFilter = {
    is?: EstudoWhereInput
    isNot?: EstudoWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type EstudoTagsEstudoIdTagIdCompoundUniqueInput = {
    estudoId: number
    tagId: number
  }

  export type EstudoTagsCountOrderByAggregateInput = {
    estudoId?: SortOrder
    tagId?: SortOrder
  }

  export type EstudoTagsAvgOrderByAggregateInput = {
    estudoId?: SortOrder
    tagId?: SortOrder
  }

  export type EstudoTagsMaxOrderByAggregateInput = {
    estudoId?: SortOrder
    tagId?: SortOrder
  }

  export type EstudoTagsMinOrderByAggregateInput = {
    estudoId?: SortOrder
    tagId?: SortOrder
  }

  export type EstudoTagsSumOrderByAggregateInput = {
    estudoId?: SortOrder
    tagId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EstudoTagsListRelationFilter = {
    every?: EstudoTagsWhereInput
    some?: EstudoTagsWhereInput
    none?: EstudoTagsWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type FotoListRelationFilter = {
    every?: FotoWhereInput
    some?: FotoWhereInput
    none?: FotoWhereInput
  }

  export type EstudoTagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstudoOrderByRelevanceInput = {
    fields: EstudoOrderByRelevanceFieldEnum | EstudoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EstudoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    corpo?: SortOrder
  }

  export type EstudoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstudoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    corpo?: SortOrder
  }

  export type EstudoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    corpo?: SortOrder
  }

  export type EstudoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TagOrderByRelevanceInput = {
    fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VideoOrderByRelevanceInput = {
    fields: VideoOrderByRelevanceFieldEnum | VideoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    estudoId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    estudoId?: SortOrder
  }

  export type FotoOrderByRelevanceInput = {
    fields: FotoOrderByRelevanceFieldEnum | FotoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
  }

  export type FotoAvgOrderByAggregateInput = {
    id?: SortOrder
    estudoId?: SortOrder
  }

  export type FotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
  }

  export type FotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    estudoId?: SortOrder
  }

  export type FotoSumOrderByAggregateInput = {
    id?: SortOrder
    estudoId?: SortOrder
  }

  export type EstudoCreateNestedOneWithoutTagsInput = {
    create?: XOR<EstudoCreateWithoutTagsInput, EstudoUncheckedCreateWithoutTagsInput>
    connectOrCreate?: EstudoCreateOrConnectWithoutTagsInput
    connect?: EstudoWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutEstudoInput = {
    create?: XOR<TagCreateWithoutEstudoInput, TagUncheckedCreateWithoutEstudoInput>
    connectOrCreate?: TagCreateOrConnectWithoutEstudoInput
    connect?: TagWhereUniqueInput
  }

  export type EstudoUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<EstudoCreateWithoutTagsInput, EstudoUncheckedCreateWithoutTagsInput>
    connectOrCreate?: EstudoCreateOrConnectWithoutTagsInput
    upsert?: EstudoUpsertWithoutTagsInput
    connect?: EstudoWhereUniqueInput
    update?: XOR<XOR<EstudoUpdateToOneWithWhereWithoutTagsInput, EstudoUpdateWithoutTagsInput>, EstudoUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutEstudoNestedInput = {
    create?: XOR<TagCreateWithoutEstudoInput, TagUncheckedCreateWithoutEstudoInput>
    connectOrCreate?: TagCreateOrConnectWithoutEstudoInput
    upsert?: TagUpsertWithoutEstudoInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutEstudoInput, TagUpdateWithoutEstudoInput>, TagUncheckedUpdateWithoutEstudoInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstudoTagsCreateNestedManyWithoutEstudoInput = {
    create?: XOR<EstudoTagsCreateWithoutEstudoInput, EstudoTagsUncheckedCreateWithoutEstudoInput> | EstudoTagsCreateWithoutEstudoInput[] | EstudoTagsUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: EstudoTagsCreateOrConnectWithoutEstudoInput | EstudoTagsCreateOrConnectWithoutEstudoInput[]
    createMany?: EstudoTagsCreateManyEstudoInputEnvelope
    connect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutEstudoInput = {
    create?: XOR<VideoCreateWithoutEstudoInput, VideoUncheckedCreateWithoutEstudoInput> | VideoCreateWithoutEstudoInput[] | VideoUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutEstudoInput | VideoCreateOrConnectWithoutEstudoInput[]
    createMany?: VideoCreateManyEstudoInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type FotoCreateNestedManyWithoutEstudoInput = {
    create?: XOR<FotoCreateWithoutEstudoInput, FotoUncheckedCreateWithoutEstudoInput> | FotoCreateWithoutEstudoInput[] | FotoUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutEstudoInput | FotoCreateOrConnectWithoutEstudoInput[]
    createMany?: FotoCreateManyEstudoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type EstudoTagsUncheckedCreateNestedManyWithoutEstudoInput = {
    create?: XOR<EstudoTagsCreateWithoutEstudoInput, EstudoTagsUncheckedCreateWithoutEstudoInput> | EstudoTagsCreateWithoutEstudoInput[] | EstudoTagsUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: EstudoTagsCreateOrConnectWithoutEstudoInput | EstudoTagsCreateOrConnectWithoutEstudoInput[]
    createMany?: EstudoTagsCreateManyEstudoInputEnvelope
    connect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutEstudoInput = {
    create?: XOR<VideoCreateWithoutEstudoInput, VideoUncheckedCreateWithoutEstudoInput> | VideoCreateWithoutEstudoInput[] | VideoUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutEstudoInput | VideoCreateOrConnectWithoutEstudoInput[]
    createMany?: VideoCreateManyEstudoInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type FotoUncheckedCreateNestedManyWithoutEstudoInput = {
    create?: XOR<FotoCreateWithoutEstudoInput, FotoUncheckedCreateWithoutEstudoInput> | FotoCreateWithoutEstudoInput[] | FotoUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutEstudoInput | FotoCreateOrConnectWithoutEstudoInput[]
    createMany?: FotoCreateManyEstudoInputEnvelope
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EstudoTagsUpdateManyWithoutEstudoNestedInput = {
    create?: XOR<EstudoTagsCreateWithoutEstudoInput, EstudoTagsUncheckedCreateWithoutEstudoInput> | EstudoTagsCreateWithoutEstudoInput[] | EstudoTagsUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: EstudoTagsCreateOrConnectWithoutEstudoInput | EstudoTagsCreateOrConnectWithoutEstudoInput[]
    upsert?: EstudoTagsUpsertWithWhereUniqueWithoutEstudoInput | EstudoTagsUpsertWithWhereUniqueWithoutEstudoInput[]
    createMany?: EstudoTagsCreateManyEstudoInputEnvelope
    set?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    disconnect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    delete?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    connect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    update?: EstudoTagsUpdateWithWhereUniqueWithoutEstudoInput | EstudoTagsUpdateWithWhereUniqueWithoutEstudoInput[]
    updateMany?: EstudoTagsUpdateManyWithWhereWithoutEstudoInput | EstudoTagsUpdateManyWithWhereWithoutEstudoInput[]
    deleteMany?: EstudoTagsScalarWhereInput | EstudoTagsScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutEstudoNestedInput = {
    create?: XOR<VideoCreateWithoutEstudoInput, VideoUncheckedCreateWithoutEstudoInput> | VideoCreateWithoutEstudoInput[] | VideoUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutEstudoInput | VideoCreateOrConnectWithoutEstudoInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutEstudoInput | VideoUpsertWithWhereUniqueWithoutEstudoInput[]
    createMany?: VideoCreateManyEstudoInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutEstudoInput | VideoUpdateWithWhereUniqueWithoutEstudoInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutEstudoInput | VideoUpdateManyWithWhereWithoutEstudoInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type FotoUpdateManyWithoutEstudoNestedInput = {
    create?: XOR<FotoCreateWithoutEstudoInput, FotoUncheckedCreateWithoutEstudoInput> | FotoCreateWithoutEstudoInput[] | FotoUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutEstudoInput | FotoCreateOrConnectWithoutEstudoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutEstudoInput | FotoUpsertWithWhereUniqueWithoutEstudoInput[]
    createMany?: FotoCreateManyEstudoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutEstudoInput | FotoUpdateWithWhereUniqueWithoutEstudoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutEstudoInput | FotoUpdateManyWithWhereWithoutEstudoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type EstudoTagsUncheckedUpdateManyWithoutEstudoNestedInput = {
    create?: XOR<EstudoTagsCreateWithoutEstudoInput, EstudoTagsUncheckedCreateWithoutEstudoInput> | EstudoTagsCreateWithoutEstudoInput[] | EstudoTagsUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: EstudoTagsCreateOrConnectWithoutEstudoInput | EstudoTagsCreateOrConnectWithoutEstudoInput[]
    upsert?: EstudoTagsUpsertWithWhereUniqueWithoutEstudoInput | EstudoTagsUpsertWithWhereUniqueWithoutEstudoInput[]
    createMany?: EstudoTagsCreateManyEstudoInputEnvelope
    set?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    disconnect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    delete?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    connect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    update?: EstudoTagsUpdateWithWhereUniqueWithoutEstudoInput | EstudoTagsUpdateWithWhereUniqueWithoutEstudoInput[]
    updateMany?: EstudoTagsUpdateManyWithWhereWithoutEstudoInput | EstudoTagsUpdateManyWithWhereWithoutEstudoInput[]
    deleteMany?: EstudoTagsScalarWhereInput | EstudoTagsScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutEstudoNestedInput = {
    create?: XOR<VideoCreateWithoutEstudoInput, VideoUncheckedCreateWithoutEstudoInput> | VideoCreateWithoutEstudoInput[] | VideoUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutEstudoInput | VideoCreateOrConnectWithoutEstudoInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutEstudoInput | VideoUpsertWithWhereUniqueWithoutEstudoInput[]
    createMany?: VideoCreateManyEstudoInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutEstudoInput | VideoUpdateWithWhereUniqueWithoutEstudoInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutEstudoInput | VideoUpdateManyWithWhereWithoutEstudoInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type FotoUncheckedUpdateManyWithoutEstudoNestedInput = {
    create?: XOR<FotoCreateWithoutEstudoInput, FotoUncheckedCreateWithoutEstudoInput> | FotoCreateWithoutEstudoInput[] | FotoUncheckedCreateWithoutEstudoInput[]
    connectOrCreate?: FotoCreateOrConnectWithoutEstudoInput | FotoCreateOrConnectWithoutEstudoInput[]
    upsert?: FotoUpsertWithWhereUniqueWithoutEstudoInput | FotoUpsertWithWhereUniqueWithoutEstudoInput[]
    createMany?: FotoCreateManyEstudoInputEnvelope
    set?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    disconnect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    delete?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    connect?: FotoWhereUniqueInput | FotoWhereUniqueInput[]
    update?: FotoUpdateWithWhereUniqueWithoutEstudoInput | FotoUpdateWithWhereUniqueWithoutEstudoInput[]
    updateMany?: FotoUpdateManyWithWhereWithoutEstudoInput | FotoUpdateManyWithWhereWithoutEstudoInput[]
    deleteMany?: FotoScalarWhereInput | FotoScalarWhereInput[]
  }

  export type EstudoTagsCreateNestedManyWithoutTagInput = {
    create?: XOR<EstudoTagsCreateWithoutTagInput, EstudoTagsUncheckedCreateWithoutTagInput> | EstudoTagsCreateWithoutTagInput[] | EstudoTagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: EstudoTagsCreateOrConnectWithoutTagInput | EstudoTagsCreateOrConnectWithoutTagInput[]
    createMany?: EstudoTagsCreateManyTagInputEnvelope
    connect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
  }

  export type EstudoTagsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<EstudoTagsCreateWithoutTagInput, EstudoTagsUncheckedCreateWithoutTagInput> | EstudoTagsCreateWithoutTagInput[] | EstudoTagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: EstudoTagsCreateOrConnectWithoutTagInput | EstudoTagsCreateOrConnectWithoutTagInput[]
    createMany?: EstudoTagsCreateManyTagInputEnvelope
    connect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
  }

  export type EstudoTagsUpdateManyWithoutTagNestedInput = {
    create?: XOR<EstudoTagsCreateWithoutTagInput, EstudoTagsUncheckedCreateWithoutTagInput> | EstudoTagsCreateWithoutTagInput[] | EstudoTagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: EstudoTagsCreateOrConnectWithoutTagInput | EstudoTagsCreateOrConnectWithoutTagInput[]
    upsert?: EstudoTagsUpsertWithWhereUniqueWithoutTagInput | EstudoTagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: EstudoTagsCreateManyTagInputEnvelope
    set?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    disconnect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    delete?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    connect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    update?: EstudoTagsUpdateWithWhereUniqueWithoutTagInput | EstudoTagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: EstudoTagsUpdateManyWithWhereWithoutTagInput | EstudoTagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: EstudoTagsScalarWhereInput | EstudoTagsScalarWhereInput[]
  }

  export type EstudoTagsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<EstudoTagsCreateWithoutTagInput, EstudoTagsUncheckedCreateWithoutTagInput> | EstudoTagsCreateWithoutTagInput[] | EstudoTagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: EstudoTagsCreateOrConnectWithoutTagInput | EstudoTagsCreateOrConnectWithoutTagInput[]
    upsert?: EstudoTagsUpsertWithWhereUniqueWithoutTagInput | EstudoTagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: EstudoTagsCreateManyTagInputEnvelope
    set?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    disconnect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    delete?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    connect?: EstudoTagsWhereUniqueInput | EstudoTagsWhereUniqueInput[]
    update?: EstudoTagsUpdateWithWhereUniqueWithoutTagInput | EstudoTagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: EstudoTagsUpdateManyWithWhereWithoutTagInput | EstudoTagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: EstudoTagsScalarWhereInput | EstudoTagsScalarWhereInput[]
  }

  export type EstudoCreateNestedOneWithoutVideosInput = {
    create?: XOR<EstudoCreateWithoutVideosInput, EstudoUncheckedCreateWithoutVideosInput>
    connectOrCreate?: EstudoCreateOrConnectWithoutVideosInput
    connect?: EstudoWhereUniqueInput
  }

  export type EstudoUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<EstudoCreateWithoutVideosInput, EstudoUncheckedCreateWithoutVideosInput>
    connectOrCreate?: EstudoCreateOrConnectWithoutVideosInput
    upsert?: EstudoUpsertWithoutVideosInput
    connect?: EstudoWhereUniqueInput
    update?: XOR<XOR<EstudoUpdateToOneWithWhereWithoutVideosInput, EstudoUpdateWithoutVideosInput>, EstudoUncheckedUpdateWithoutVideosInput>
  }

  export type EstudoCreateNestedOneWithoutFotosInput = {
    create?: XOR<EstudoCreateWithoutFotosInput, EstudoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: EstudoCreateOrConnectWithoutFotosInput
    connect?: EstudoWhereUniqueInput
  }

  export type EstudoUpdateOneRequiredWithoutFotosNestedInput = {
    create?: XOR<EstudoCreateWithoutFotosInput, EstudoUncheckedCreateWithoutFotosInput>
    connectOrCreate?: EstudoCreateOrConnectWithoutFotosInput
    upsert?: EstudoUpsertWithoutFotosInput
    connect?: EstudoWhereUniqueInput
    update?: XOR<XOR<EstudoUpdateToOneWithWhereWithoutFotosInput, EstudoUpdateWithoutFotosInput>, EstudoUncheckedUpdateWithoutFotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EstudoCreateWithoutTagsInput = {
    titulo: string
    corpo: string
    videos?: VideoCreateNestedManyWithoutEstudoInput
    fotos?: FotoCreateNestedManyWithoutEstudoInput
  }

  export type EstudoUncheckedCreateWithoutTagsInput = {
    id?: number
    titulo: string
    corpo: string
    videos?: VideoUncheckedCreateNestedManyWithoutEstudoInput
    fotos?: FotoUncheckedCreateNestedManyWithoutEstudoInput
  }

  export type EstudoCreateOrConnectWithoutTagsInput = {
    where: EstudoWhereUniqueInput
    create: XOR<EstudoCreateWithoutTagsInput, EstudoUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutEstudoInput = {
    nome: string
  }

  export type TagUncheckedCreateWithoutEstudoInput = {
    id?: number
    nome: string
  }

  export type TagCreateOrConnectWithoutEstudoInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutEstudoInput, TagUncheckedCreateWithoutEstudoInput>
  }

  export type EstudoUpsertWithoutTagsInput = {
    update: XOR<EstudoUpdateWithoutTagsInput, EstudoUncheckedUpdateWithoutTagsInput>
    create: XOR<EstudoCreateWithoutTagsInput, EstudoUncheckedCreateWithoutTagsInput>
    where?: EstudoWhereInput
  }

  export type EstudoUpdateToOneWithWhereWithoutTagsInput = {
    where?: EstudoWhereInput
    data: XOR<EstudoUpdateWithoutTagsInput, EstudoUncheckedUpdateWithoutTagsInput>
  }

  export type EstudoUpdateWithoutTagsInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
    videos?: VideoUpdateManyWithoutEstudoNestedInput
    fotos?: FotoUpdateManyWithoutEstudoNestedInput
  }

  export type EstudoUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutEstudoNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutEstudoNestedInput
  }

  export type TagUpsertWithoutEstudoInput = {
    update: XOR<TagUpdateWithoutEstudoInput, TagUncheckedUpdateWithoutEstudoInput>
    create: XOR<TagCreateWithoutEstudoInput, TagUncheckedCreateWithoutEstudoInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutEstudoInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutEstudoInput, TagUncheckedUpdateWithoutEstudoInput>
  }

  export type TagUpdateWithoutEstudoInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutEstudoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EstudoTagsCreateWithoutEstudoInput = {
    tag: TagCreateNestedOneWithoutEstudoInput
  }

  export type EstudoTagsUncheckedCreateWithoutEstudoInput = {
    tagId: number
  }

  export type EstudoTagsCreateOrConnectWithoutEstudoInput = {
    where: EstudoTagsWhereUniqueInput
    create: XOR<EstudoTagsCreateWithoutEstudoInput, EstudoTagsUncheckedCreateWithoutEstudoInput>
  }

  export type EstudoTagsCreateManyEstudoInputEnvelope = {
    data: EstudoTagsCreateManyEstudoInput | EstudoTagsCreateManyEstudoInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutEstudoInput = {
    url: string
  }

  export type VideoUncheckedCreateWithoutEstudoInput = {
    id?: number
    url: string
  }

  export type VideoCreateOrConnectWithoutEstudoInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutEstudoInput, VideoUncheckedCreateWithoutEstudoInput>
  }

  export type VideoCreateManyEstudoInputEnvelope = {
    data: VideoCreateManyEstudoInput | VideoCreateManyEstudoInput[]
    skipDuplicates?: boolean
  }

  export type FotoCreateWithoutEstudoInput = {
    url: string
  }

  export type FotoUncheckedCreateWithoutEstudoInput = {
    id?: number
    url: string
  }

  export type FotoCreateOrConnectWithoutEstudoInput = {
    where: FotoWhereUniqueInput
    create: XOR<FotoCreateWithoutEstudoInput, FotoUncheckedCreateWithoutEstudoInput>
  }

  export type FotoCreateManyEstudoInputEnvelope = {
    data: FotoCreateManyEstudoInput | FotoCreateManyEstudoInput[]
    skipDuplicates?: boolean
  }

  export type EstudoTagsUpsertWithWhereUniqueWithoutEstudoInput = {
    where: EstudoTagsWhereUniqueInput
    update: XOR<EstudoTagsUpdateWithoutEstudoInput, EstudoTagsUncheckedUpdateWithoutEstudoInput>
    create: XOR<EstudoTagsCreateWithoutEstudoInput, EstudoTagsUncheckedCreateWithoutEstudoInput>
  }

  export type EstudoTagsUpdateWithWhereUniqueWithoutEstudoInput = {
    where: EstudoTagsWhereUniqueInput
    data: XOR<EstudoTagsUpdateWithoutEstudoInput, EstudoTagsUncheckedUpdateWithoutEstudoInput>
  }

  export type EstudoTagsUpdateManyWithWhereWithoutEstudoInput = {
    where: EstudoTagsScalarWhereInput
    data: XOR<EstudoTagsUpdateManyMutationInput, EstudoTagsUncheckedUpdateManyWithoutEstudoInput>
  }

  export type EstudoTagsScalarWhereInput = {
    AND?: EstudoTagsScalarWhereInput | EstudoTagsScalarWhereInput[]
    OR?: EstudoTagsScalarWhereInput[]
    NOT?: EstudoTagsScalarWhereInput | EstudoTagsScalarWhereInput[]
    estudoId?: IntFilter<"EstudoTags"> | number
    tagId?: IntFilter<"EstudoTags"> | number
  }

  export type VideoUpsertWithWhereUniqueWithoutEstudoInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutEstudoInput, VideoUncheckedUpdateWithoutEstudoInput>
    create: XOR<VideoCreateWithoutEstudoInput, VideoUncheckedCreateWithoutEstudoInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutEstudoInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutEstudoInput, VideoUncheckedUpdateWithoutEstudoInput>
  }

  export type VideoUpdateManyWithWhereWithoutEstudoInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutEstudoInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: IntFilter<"Video"> | number
    url?: StringFilter<"Video"> | string
    estudoId?: IntFilter<"Video"> | number
  }

  export type FotoUpsertWithWhereUniqueWithoutEstudoInput = {
    where: FotoWhereUniqueInput
    update: XOR<FotoUpdateWithoutEstudoInput, FotoUncheckedUpdateWithoutEstudoInput>
    create: XOR<FotoCreateWithoutEstudoInput, FotoUncheckedCreateWithoutEstudoInput>
  }

  export type FotoUpdateWithWhereUniqueWithoutEstudoInput = {
    where: FotoWhereUniqueInput
    data: XOR<FotoUpdateWithoutEstudoInput, FotoUncheckedUpdateWithoutEstudoInput>
  }

  export type FotoUpdateManyWithWhereWithoutEstudoInput = {
    where: FotoScalarWhereInput
    data: XOR<FotoUpdateManyMutationInput, FotoUncheckedUpdateManyWithoutEstudoInput>
  }

  export type FotoScalarWhereInput = {
    AND?: FotoScalarWhereInput | FotoScalarWhereInput[]
    OR?: FotoScalarWhereInput[]
    NOT?: FotoScalarWhereInput | FotoScalarWhereInput[]
    id?: IntFilter<"Foto"> | number
    url?: StringFilter<"Foto"> | string
    estudoId?: IntFilter<"Foto"> | number
  }

  export type EstudoTagsCreateWithoutTagInput = {
    estudo: EstudoCreateNestedOneWithoutTagsInput
  }

  export type EstudoTagsUncheckedCreateWithoutTagInput = {
    estudoId: number
  }

  export type EstudoTagsCreateOrConnectWithoutTagInput = {
    where: EstudoTagsWhereUniqueInput
    create: XOR<EstudoTagsCreateWithoutTagInput, EstudoTagsUncheckedCreateWithoutTagInput>
  }

  export type EstudoTagsCreateManyTagInputEnvelope = {
    data: EstudoTagsCreateManyTagInput | EstudoTagsCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type EstudoTagsUpsertWithWhereUniqueWithoutTagInput = {
    where: EstudoTagsWhereUniqueInput
    update: XOR<EstudoTagsUpdateWithoutTagInput, EstudoTagsUncheckedUpdateWithoutTagInput>
    create: XOR<EstudoTagsCreateWithoutTagInput, EstudoTagsUncheckedCreateWithoutTagInput>
  }

  export type EstudoTagsUpdateWithWhereUniqueWithoutTagInput = {
    where: EstudoTagsWhereUniqueInput
    data: XOR<EstudoTagsUpdateWithoutTagInput, EstudoTagsUncheckedUpdateWithoutTagInput>
  }

  export type EstudoTagsUpdateManyWithWhereWithoutTagInput = {
    where: EstudoTagsScalarWhereInput
    data: XOR<EstudoTagsUpdateManyMutationInput, EstudoTagsUncheckedUpdateManyWithoutTagInput>
  }

  export type EstudoCreateWithoutVideosInput = {
    titulo: string
    corpo: string
    tags?: EstudoTagsCreateNestedManyWithoutEstudoInput
    fotos?: FotoCreateNestedManyWithoutEstudoInput
  }

  export type EstudoUncheckedCreateWithoutVideosInput = {
    id?: number
    titulo: string
    corpo: string
    tags?: EstudoTagsUncheckedCreateNestedManyWithoutEstudoInput
    fotos?: FotoUncheckedCreateNestedManyWithoutEstudoInput
  }

  export type EstudoCreateOrConnectWithoutVideosInput = {
    where: EstudoWhereUniqueInput
    create: XOR<EstudoCreateWithoutVideosInput, EstudoUncheckedCreateWithoutVideosInput>
  }

  export type EstudoUpsertWithoutVideosInput = {
    update: XOR<EstudoUpdateWithoutVideosInput, EstudoUncheckedUpdateWithoutVideosInput>
    create: XOR<EstudoCreateWithoutVideosInput, EstudoUncheckedCreateWithoutVideosInput>
    where?: EstudoWhereInput
  }

  export type EstudoUpdateToOneWithWhereWithoutVideosInput = {
    where?: EstudoWhereInput
    data: XOR<EstudoUpdateWithoutVideosInput, EstudoUncheckedUpdateWithoutVideosInput>
  }

  export type EstudoUpdateWithoutVideosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
    tags?: EstudoTagsUpdateManyWithoutEstudoNestedInput
    fotos?: FotoUpdateManyWithoutEstudoNestedInput
  }

  export type EstudoUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
    tags?: EstudoTagsUncheckedUpdateManyWithoutEstudoNestedInput
    fotos?: FotoUncheckedUpdateManyWithoutEstudoNestedInput
  }

  export type EstudoCreateWithoutFotosInput = {
    titulo: string
    corpo: string
    tags?: EstudoTagsCreateNestedManyWithoutEstudoInput
    videos?: VideoCreateNestedManyWithoutEstudoInput
  }

  export type EstudoUncheckedCreateWithoutFotosInput = {
    id?: number
    titulo: string
    corpo: string
    tags?: EstudoTagsUncheckedCreateNestedManyWithoutEstudoInput
    videos?: VideoUncheckedCreateNestedManyWithoutEstudoInput
  }

  export type EstudoCreateOrConnectWithoutFotosInput = {
    where: EstudoWhereUniqueInput
    create: XOR<EstudoCreateWithoutFotosInput, EstudoUncheckedCreateWithoutFotosInput>
  }

  export type EstudoUpsertWithoutFotosInput = {
    update: XOR<EstudoUpdateWithoutFotosInput, EstudoUncheckedUpdateWithoutFotosInput>
    create: XOR<EstudoCreateWithoutFotosInput, EstudoUncheckedCreateWithoutFotosInput>
    where?: EstudoWhereInput
  }

  export type EstudoUpdateToOneWithWhereWithoutFotosInput = {
    where?: EstudoWhereInput
    data: XOR<EstudoUpdateWithoutFotosInput, EstudoUncheckedUpdateWithoutFotosInput>
  }

  export type EstudoUpdateWithoutFotosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
    tags?: EstudoTagsUpdateManyWithoutEstudoNestedInput
    videos?: VideoUpdateManyWithoutEstudoNestedInput
  }

  export type EstudoUncheckedUpdateWithoutFotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    corpo?: StringFieldUpdateOperationsInput | string
    tags?: EstudoTagsUncheckedUpdateManyWithoutEstudoNestedInput
    videos?: VideoUncheckedUpdateManyWithoutEstudoNestedInput
  }

  export type EstudoTagsCreateManyEstudoInput = {
    tagId: number
  }

  export type VideoCreateManyEstudoInput = {
    id?: number
    url: string
  }

  export type FotoCreateManyEstudoInput = {
    id?: number
    url: string
  }

  export type EstudoTagsUpdateWithoutEstudoInput = {
    tag?: TagUpdateOneRequiredWithoutEstudoNestedInput
  }

  export type EstudoTagsUncheckedUpdateWithoutEstudoInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudoTagsUncheckedUpdateManyWithoutEstudoInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUpdateWithoutEstudoInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateWithoutEstudoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateManyWithoutEstudoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUpdateWithoutEstudoInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUncheckedUpdateWithoutEstudoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FotoUncheckedUpdateManyWithoutEstudoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type EstudoTagsCreateManyTagInput = {
    estudoId: number
  }

  export type EstudoTagsUpdateWithoutTagInput = {
    estudo?: EstudoUpdateOneRequiredWithoutTagsNestedInput
  }

  export type EstudoTagsUncheckedUpdateWithoutTagInput = {
    estudoId?: IntFieldUpdateOperationsInput | number
  }

  export type EstudoTagsUncheckedUpdateManyWithoutTagInput = {
    estudoId?: IntFieldUpdateOperationsInput | number
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