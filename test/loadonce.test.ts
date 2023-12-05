import { clear, keys } from 'idb-keyval'
import { describe, expect, it } from 'vitest'
import loadonce, { setMaxCacheSize, setMaxKeyCount } from '../src'

describe('cache', () => {
  it('cache', async () => {
    await clear()
    const cache = await loadonce('https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png')
    expect(cache.size).toBe(24774)
    expect(cache.type).toBe('image/png')
    const caches = await loadonce(['https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'])
    caches.forEach((c) => {
      expect(c.type).toBe('image/png')
    })
  })
})

describe('clear', () => {
  it('count clear', async () => {
    await clear()
    setMaxKeyCount(3)
    await loadonce('https://www.baidu.com/')
    let count = await keys()
    expect(count.length).toBe(1)
    await loadonce('https://www.bing.com/')
    count = await keys()
    expect(count.length).toBe(2)
    await loadonce('https://nodejs.org/en/')
    count = await keys()
    expect(count.length).toBe(3)
    await loadonce('https://stackoverflow.com/')
    count = await keys()
    expect(count.length).toBe(1)
  })
  it('size clear', async () => {
    await clear()
    await loadonce('https://github.com/')
    await setMaxCacheSize(100) // set max cache 100 bytes
    await loadonce('https://stackoverflow.com/')
    const count = await keys()
    expect(count.length).toBe(1) // github.com be cleared
  })
})
