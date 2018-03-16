var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Stateless functional components
function Row(props) {
  return React.createElement(
    "div",
    { className: "row" },
    props.row.map(function (field, idx) {
      return React.createElement(
        "button",
        { key: idx, className: field === 0 ? "notyet" : "yet", onClick: function onClick() {
            props.getId(props.parentId, idx);
          } },
        field
      );
    })
  );
}

function Tracker(props) {
  return React.createElement(
    "ul",
    { className: "tracker" },
    React.createElement(
      "li",
      null,
      "Turn:",
      props.turn
    ),
    React.createElement(
      "li",
      null,
      "Tries left:",
      props.tries
    )
  );
}

var Canvas = function (_React$Component) {
  _inherits(Canvas, _React$Component);

  function Canvas() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Canvas);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call.apply(_ref, [this].concat(args))), _this), _this.getId = function (val1, val2) {
      _this.props.updateCanvas(val1, val2);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Canvas, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "canvas" },
        this.props.canvas.map(function (row, idx) {
          return React.createElement(Row, { row: row, parentId: idx, getId: _this2.getId, key: idx });
        })
      );
    }
  }]);

  return Canvas;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.checkDone = function () {
      done = true;
      _this3.state.canvas.forEach(function (rows) {
        if (rows.indexOf(0) !== -1) {
          done = false;
        }
      });
      return done;
    };

    _this3.updateCanvas = function (row, cell) {
      var arr = _this3.state.canvas;
      if (arr[row][cell] === 0) {
        arr[row][cell] = _this3.state.turn;
        _this3.setState({ canvas: arr, turn: _this3.state.turn === "X" ? "O" : "X", done: _this3.checkDone(), tries: _this3.state.tries - 1 });
      }
    };

    _this3.state = { canvas: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      done: false, turn: "X", tries: 9 };
    return _this3;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "app" },
        React.createElement(Canvas, { canvas: this.state.canvas, updateCanvas: this.updateCanvas }),
        " ",
        React.createElement(Tracker, { tries: this.state.tries, turn: this.state.turn })
      );
    }
  }]);

  return App;
}(React.Component);

App.defaultProps = { player1: "X", player2: "O" };

ReactDOM.render(React.createElement(App, null), document.getElementById("container"));