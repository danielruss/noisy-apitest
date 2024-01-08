This is a test API that randomly throws errors.

To run just run `node index.js <probability>`  where 
probabililty is a real number between 0 and 1 (exclusively)

There is a an echo API

```
curl 'localhost:3000/echo?key1=value1&key2=value2'
or
curl -G -d key1=value1 -d key2=value2 localhost:3000/echo
```

if you use the -d option you must add the -G else curl will assume that you want to use POST instead of GET.

try [https://danielruss.github.io.](https://danielruss.github.io/apiclienttest/) to see how you can use [localforage](https://localforage.github.io/localForage/) to cache values when the server returns a 500 error.  
