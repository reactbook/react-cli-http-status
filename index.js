"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactCliRenderer = require("react-cli-renderer");

var _reactCliRenderer2 = _interopRequireDefault(_reactCliRenderer);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var axios = require('axios');

var MyReactCLIApp = function (_React$Component) {
  _inherits(MyReactCLIApp, _React$Component);

  function MyReactCLIApp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyReactCLIApp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyReactCLIApp.__proto__ || Object.getPrototypeOf(MyReactCLIApp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      status: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyReactCLIApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        axios.get('http://localhost:3000').then(function (response) {
          // console.log(response);
          _this2.setState({ status: response.status });
        }).catch(function (error) {
          if (error.response) {
            _this2.setState({ status: error.response.status });
          } else {
            _this2.setState({ status: -1 });
          }
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactCliRenderer.Section,
        { border: { horizontal: "-", vertical: "|" }, align: "center" },
        "\u7F51\u7AD9\u72B6\u6001\u76D1\u63A7",
        _react2.default.createElement(
          _reactCliRenderer.Section,
          { horizontal: true },
          _react2.default.createElement(
            _reactCliRenderer.Section,
            { align: "center" },
            this.state.status == 0 ? _chalk2.default.blue("●") : "○",
            " \u6B63\u5728\u68C0\u6D4B",
            _react2.default.createElement("br", null),
            this.state.status == 200 ? _chalk2.default.green("●") : "○",
            " 200 \u6B63\u5E38",
            _react2.default.createElement("br", null),
            this.state.status == 500 ? _chalk2.default.red("●") : "○",
            " 500 \u9519\u8BEF",
            _react2.default.createElement("br", null),
            this.state.status == -1 ? _chalk2.default.red("●") : "○",
            " \u8FDE\u63A5\u8D85\u65F6"
          )
        )
      );
    }
  }]);

  return MyReactCLIApp;
}(_react2.default.Component);

(0, _reactCliRenderer2.default)(_react2.default.createElement(MyReactCLIApp, null));