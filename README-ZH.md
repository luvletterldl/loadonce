# Loadonce

[English](./README.md)

缓存你的任何资源，只加载一次！

# 安装
```bash
pnpm install loadonce
```


# 使用方法


## 缓存单个资源

```ts
import loadonce from 'loadonce'

const resourceUrl = '你的资源URL，可以是fetch请求的URL'
const resource = await loadonce(resourceUrl)
// 如果再次加载，将会很快，因为已经缓存了
const resource1 = await loadonce(resourceUrl)
```

## 缓存多个资源

```ts
import loadonce from 'loadonce'

const resourceUrls = ['https://one', 'https://two']
const resource = await loadonce(resourceUrls)
// 如果再次加载，将会很快，因为已经缓存了
const resource1 = await loadonce(resourceUrls)
```

## 何时清除缓存？


### 限制键的数量

```ts
import loadonce, { setMaxKeyCount } from 'loadonce'

setMaxKeyCount(100) // 限制最大键的数量为100个

// 如果 loadonce 缓存超过100个键，将清除所有缓存。
const resource = await loadonce('...')
```

### 限制缓存的大小

```ts
import loadonce, { setMaxCacheSize } from 'loadonce'

setMaxCacheSize(1024 * 1024 * 1024) // 限制最大缓存大小为1GB，即 1024 * 1024 * 1024 字节

// 如果 loadonce 缓存大小超过 1024 * 1024 * 1024 字节，将清除所有缓存。
const resource = await loadonce('...')
```
