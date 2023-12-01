import { get, set } from 'idb-keyval'
import { shouldClear } from './clear'

async function loadCore(url: string) {
  let cache = await get<Blob>(url)
  if (cache === undefined) {
    cache = await (await fetch(url)).blob()
    set(url, cache)
  }
  return cache
}

type ReturnType<T> = T extends string[] ? Blob[] : T extends string ? Blob : never;

export default async function loadonce<T extends string | string[]>(url: T): Promise<ReturnType<T>> {
  await shouldClear();
  if (Array.isArray(url)) {
    return Promise.all(url.map(loadCore)) as Promise<ReturnType<T>>;
  }
  return loadCore(url) as Promise<ReturnType<T>>;
}

export { setMaxCacheSize, setMaxKeyCount } from './clear'
