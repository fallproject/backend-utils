'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var mongo = require("mongodb").MongoClient;

var Mongo =
/*#__PURE__*/
function () {
  function Mongo(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? "default" : _ref$name,
        _ref$hostname = _ref.hostname,
        hostname = _ref$hostname === void 0 ? "localhost" : _ref$hostname,
        _ref$port = _ref.port,
        port = _ref$port === void 0 ? "27017" : _ref$port,
        _ref$auth = _ref.auth,
        auth = _ref$auth === void 0 ? {} : _ref$auth,
        _ref$suffix = _ref.suffix,
        suffix = _ref$suffix === void 0 ? "" : _ref$suffix;

    _classCallCheck(this, Mongo);

    this._createDB(hostname, port, suffix, auth);

    for (var _len = arguments.length, collections = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      collections[_key - 1] = arguments[_key];
    }

    this._collections = [name].concat(collections);
    this.collections = {};

    for (var _collection in collections) {
      this.collections[_collection] = this.db.collection(_collection);
    }
  }

  _createClass(Mongo, [{
    key: "_createDB",
    value: function _createDB(hostname, port, suffix, _ref2) {
      var username = _ref2.username,
          password = _ref2.password;
      var baseurl = "".concat(hostname, ":").concat(port);
      var prefix = this._validateAuth(username, password) ? "" : "".concat(username, ":").concat(password, "@");
      var url = "mongodb://".concat(prefix).concat(baseurl, "/").concat(suffix);
      this.db = new mongo(url);
    }
  }, {
    key: "_validateAuth",
    value: function _validateAuth(username, password) {
      return new Boolean(username) && new Boolean(password);
    }
  }, {
    key: "addItem",
    value: function addItem(data) {
      var collection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._collections[0];
      this.collections[collection].addOne(data);
    }
  }]);

  return Mongo;
}();

var MongoDB_class = /*#__PURE__*/Object.freeze({
  default: Mongo
});

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

var mongo$1 = getCjsExportFromNamespace(MongoDB_class);

var db = {
  mongo: mongo$1
};
var db_1 = db.mongo;

exports.default = db;
exports.mongo = db_1;
