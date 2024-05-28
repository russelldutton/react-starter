type Excepts = symbol | undefined | object;
export type Path<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? `${Exclude<K, Excepts>}.${Path<T[K]>}`
        : Exclude<K, Excepts>;
    }[keyof T]
  : never;
