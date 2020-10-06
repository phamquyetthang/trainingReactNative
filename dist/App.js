"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const reducer_1 = require("./src/state/reducer");
const DrawerTab_1 = __importDefault(require("./src/navigation/DrawerTab"));
const native_1 = require("@react-navigation/native");
const store = redux_1.createStore(reducer_1.reducer);
const App = () => {
    return (<react_redux_1.Provider store={store}>
      <native_1.NavigationContainer>
        <DrawerTab_1.default />
      </native_1.NavigationContainer>
    </react_redux_1.Provider>);
};
exports.default = App;