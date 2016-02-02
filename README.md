ignore-writable
===============

A 'passthrough' writable stream, which simply ignores its input. (for mocking)

## Example

```javascript
var sinon = require('sinon'),
    Canoe = require('canoe'),
    IgnoreWritable = require('ignore-writable');

var canoe = new Canoe(/* s3 instance, somehow */)

var canoeStub = sinon.stub(canoe, 'createWriteStream', function() {
  return new IgnoreWritable();
});
```

## License
Copyright (c) 2014 Pedro Tacla Yamada. Licensed under the MIT license.
Please refer to the [LICENSE](LICENSE) file for more info.

## Donations
Would you like to buy me a beer? Send bitcoin to 3JjxJydvoJjTrhLL86LGMc8cNB16pTAF3y
