# beacon-test
Experiment with @airgap/beacon-sdk

## Install

```
npm install
```

## Serve

```
npm run serve
```

Then browse http://localhost:1234

## Notes

### Errors about "could not load source file"

The Parceljs server spews a lot of warnings when it starts up, of the form:

> Could not load source file "../../src/index.ts" in source map of "node_modules/@airgap/beacon-sdk/dist/esm/index.js".

I don't think this is a root cause of other problems;
I think it just means that the @airgap/beacon-sdk package includes a sourcemap without the referenced source files.

### Sodium "is not a function" errors

When I serve this as above in Chrome, the javascript console shows a fatal error:

> TypeError: sodium.crypto_generichash is not a function
    at crypto.ts:35
    at Generator.next (<anonymous>)
    at fulfilled (crypto.ts:2)
    
