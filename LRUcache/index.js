// implement browser caching functionality with LRU approch
function LRU(cacheSize) {
    let lastCacheTime = Date.now();
    let map = new Map();
    const cacheSizeLimit = cacheSize;

    function setCache(key, value) {
        if (map.size === cacheSizeLimit) {
            // get the key with the smallest time value
            let removeableCacheKey = null;
            let minTime = Infinity;

            for (let [k, v] of map.entries()) {
                if (v.time < minTime) {
                    minTime = v.time;
                    removeableCacheKey = k;
                }
            }

            if (removeableCacheKey !== null) {
                map.delete(removeableCacheKey);
                console.log("After delete", map);
            }
        }
        
        map.set(key, { value: value, time: lastCacheTime++ });
    }
    
    function getCache(key) {
        if (map.has(key)) {
            let cacheEntry = map.get(key);
            cacheEntry.time = lastCacheTime++;
            return cacheEntry;
        } else {
            return null;
        }
    }

    return {
        setCache,
        getCache,
        getMap: () => map  // Utility function to get the current state of the map for testing
    };
}

const lru = LRU(3);

lru.setCache(1, 2);
lru.setCache(4, 5);
lru.setCache(2, 3);
console.log(lru.getCache(1));  // Access key 1, should update its time
lru.setCache(3, 4);  // Key 4 should be deleted as key 1 was accessed
console.log(lru.getMap());
lru.setCache(5, 6);  // Key 2 should be deleted
console.log(lru.getMap());




