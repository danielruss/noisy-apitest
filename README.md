This is a test API that randomly throws errors.

To run just run `node index.js <probability>`  where 
probabililty is a real number between 0 and 1 (exclusively)

There is a an echo API

curl 'localhost:3000/echo?ding=1&dong=3'
or
curl -G -d key1=value1 -d key2=value2 localhost:3000/echo

if you use the -d option you must add the -G else curl will assume that you want to use POST instead of GET.
