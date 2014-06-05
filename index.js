var util = require('util'),
    stream = require('stream');

var Writable = stream.Writable;

exports = module.exports = IgnoreWritable;

function IgnoreWritable() {
  Writable.call(this);
  var _this = this;
  this.on('finish', function() {
    _this.emit('close');
  });
}
util.inherits(IgnoreWritable, Writable);

IgnoreWritable.prototype._write = function(chunk, enc, cb) {
  cb();
};
