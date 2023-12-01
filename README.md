# Loadonce

[中文](./README-ZH.md)
Cache your any resource, load once!

# install
```bash
pnpm install loadonce
```

# usage

## cache one source
```ts
import loadonce from 'loadonce'

const resourceUrl = 'your-source-url, could be fetch'
const resource = await loadonce(resourceUrl)
// twice load will be fast, cached
const resource1 = await loadonce(resourceUrl)
```

## cache some source
```ts
import loadonce from 'loadonce'

const resourceUrls = ['https://one', 'https://two']
const resource = await loadonce(resourceUrls)
// twice load will be fast, cached
const resource1 = await loadonce(resourceUrls)
```

## when clear?

### limit key's count
```ts
import loadonce, { setMaxKeyCount } from 'loadonce'

setMaxKeyCount(100) // limit max key count: 100

// if loadonce cache over 100, will clear all cache.
const resource = await loadonce('...')
```

### limit cache's size
```ts
import loadonce, { setMaxCacheSize } from 'loadonce'

setMaxCacheSize(1024 * 1024 * 1024) // limit max size 1GB 1024 * 1024 * 1024 bytes

// if loadonce cache size over 1024 * 1024 * 1024 bytes, will clear all cache.
const resource = await loadonce('...')
```
