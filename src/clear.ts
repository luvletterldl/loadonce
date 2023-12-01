import { clear, keys, values } from "idb-keyval";

let maxKeyCount = 100
let maxCacheSize = 1024 * 1024 * 1024 // 1GB

export async function setMaxKeyCount(count: number) {
  maxKeyCount = count
}

export async function setMaxCacheSize(size: number) {
  maxCacheSize = size
}

export async function shouldClear() {
  if (maxKeyCount <= (await keys()).length) {
    clear()
  }
  if ((await values()).reduce((p, c) => p + c.size, 0) >= maxCacheSize) {
    clear()
  }
}
