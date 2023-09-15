# jest-mock-express

[![Build Status](https://travis-ci.org/concrete-cc/jest-mock-express.svg?branch=master)](https://travis-ci.org/concrete-cc/jest-mock-express)

This library adds Express mocks for unit testing with Jest. It provides a real chained API as returned by Express.

Currently supports the Express.response
object with full API for Express 4

## Getting started

First, install jest-mock-express using npm:
```
    npm i jest-mock-express
```
Then, require the package and use it like so:
```js
    const mockRes = require('jest-mock-express').response
    
    test('Example test', () => {
      const res = mockRes()
      res.status(200).send()
      expect(res.status).toHaveBeenCalledWith(200)
      expect(res.send).toHaveBeenCalled()
    })
```

## API
### `.response()`
Returns a mocked Express.response. The methods in the returned object can be chained just like with the real thing. You can use any of the [Jest mock methods](https://facebook.github.io/jest/docs/mock-function-api.html).
### `response.reset()`
Will reset all information stored in the response mocks. This is a convenience method
which internally will call `.mockClear()` on all the `response` object properties.

## Contributing

To report bugs or request features, submit issues here on GitHub, [concrete-cc/jest-mock-express/issues](https://github.com/concrete-cc/jest-mock-express/issues). Pull requests are also welcome.

## License

MIT
