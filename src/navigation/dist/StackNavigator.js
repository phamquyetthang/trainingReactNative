"use strict";
exports.__esModule = true;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var ListUser_1 = require("../screens/ListUser");
var UserDetail_1 = require("../screens/UserDetail");
var Stack = stack_1.createStackNavigator();
var StackNavigator = function () {
    return (react_1["default"].createElement(Stack.Navigator, { screenOptions: {
            header: function () { return false; }
        } },
        react_1["default"].createElement(Stack.Screen, { name: "ListUser", component: ListUser_1["default"] }),
        react_1["default"].createElement(Stack.Screen, { name: "UserDetail", component: UserDetail_1["default"] })));
};
exports["default"] = StackNavigator;
