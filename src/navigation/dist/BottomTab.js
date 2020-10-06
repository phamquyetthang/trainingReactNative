"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_bottom_tabs_1 = require("@react-navigation/material-bottom-tabs");
var stack_1 = require("@react-navigation/stack");
var native_1 = require("@react-navigation/native");
var Ionicons_1 = require("react-native-vector-icons/Ionicons");
var FontAwesome5_1 = require("react-native-vector-icons/FontAwesome5");
var MaterialIcons_1 = require("react-native-vector-icons/MaterialIcons");
var ListUser_1 = require("../screens/ListUser");
var react_native_1 = require("react-native");
var UserDetail_1 = require("../screens/UserDetail");
var Auth_1 = require("../screens/Auth");
var Tab = material_bottom_tabs_1.createMaterialBottomTabNavigator();
function Menu() {
    return (react_1["default"].createElement(Tab.Navigator, { initialRouteName: "Screen1" },
        react_1["default"].createElement(Tab.Screen, { name: "Screen1", component: ListUser_1["default"], options: {
                tabBarIcon: function (_a) {
                    var color = _a.color;
                    return (react_1["default"].createElement(Ionicons_1["default"], { name: "md-planet", style: { fontSize: 28, color: color, width: 30 } }));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Screen2", component: Sample1, options: {
                tabBarIcon: function (_a) {
                    var color = _a.color;
                    return (react_1["default"].createElement(MaterialIcons_1["default"], { name: "library-music", style: { fontSize: 28, color: color, width: 30 } }));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Screen3", component: Sample2, options: {
                tabBarIcon: function (_a) {
                    var color = _a.color;
                    return (react_1["default"].createElement(FontAwesome5_1["default"], { name: "cloud-download-alt", style: { fontSize: 22, color: color, width: 30 } }));
                }
            } })));
}
var Stack = stack_1.createStackNavigator();
function BottomTab() {
    return (react_1["default"].createElement(native_1.NavigationContainer, null,
        react_1["default"].createElement(Stack.Navigator, { screenOptions: {
            //   header: () => null,
            } },
            react_1["default"].createElement(Stack.Screen, { name: "Auth", component: Auth_1["default"], options: { header: function () { return null; } } }),
            react_1["default"].createElement(Stack.Screen, { name: "Main", component: Menu, options: { header: function () { return null; } } }),
            react_1["default"].createElement(Stack.Screen, { name: "ListUser", component: ListUser_1["default"] }),
            react_1["default"].createElement(Stack.Screen, { name: "UserDetail", component: UserDetail_1["default"] }))));
}
exports["default"] = BottomTab;
var Sample1 = function () {
    return react_1["default"].createElement(react_native_1.Text, null, "hello1");
};
var Sample2 = function () {
    return react_1["default"].createElement(react_native_1.Text, null, "hello3");
};
