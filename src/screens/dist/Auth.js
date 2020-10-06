"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_paper_1 = require("react-native-paper");
var Data_1 = require("../Data");
var Styles_1 = require("../Styles");
var Auth = function () {
    var _a = react_1.useState({
        email: '',
        pass: ''
    }), user = _a[0], setUser = _a[1];
    var navigation = native_1.useNavigation();
    function onChangeEmail(e) {
        setUser(__assign(__assign({}, user), { email: e }));
    }
    function onChangePass(e) {
        setUser(__assign(__assign({}, user), { pass: e }));
    }
    function checkLogin() {
        var check = 'fail';
        if (user.email == '' || user.pass == '') {
            check = 'lost';
        }
        else {
            for (var _i = 0, ACC_1 = Data_1["default"]; _i < ACC_1.length; _i++) {
                var i = ACC_1[_i];
                if (user.email == i.email && user.pass == i.pass) {
                    check = 'pass';
                    break;
                }
                else {
                    check = 'fail';
                }
            }
        }
        if (check === 'pass') {
            navigation.navigate('ListUser');
        }
        else if (check === 'lost') {
            react_native_1.Alert.alert('Hãy điền đủ thông tin');
        }
        else {
            react_native_1.Alert.alert('Tài khoản sai');
        }
        setUser({ email: '', pass: '' });
    }
    return (react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: react_native_1.Keyboard.dismiss },
        react_1["default"].createElement(react_native_1.View, { style: Styles_1.styles.loginForm },
            react_1["default"].createElement(react_native_1.Text, { style: Styles_1.styles.text1 }, "LOGIN"),
            react_1["default"].createElement(react_native_paper_1.TextInput, { label: "Your email address", placeholder: "email@address.com", 
                // leftIcon={<Icon name="mail" size={24} color="gray" />}
                value: user.email, onChangeText: function (e) { return onChangeEmail(e); }, autoFocus: true, keyboardType: "email-address", autoCapitalize: "none", style: { marginBottom: 32 } }),
            react_1["default"].createElement(react_native_paper_1.TextInput, { label: "Passwork", placeholder: "passwork", 
                // leftIcon={<Icon name="md-lock-closed" size={24} color="gray" />}
                secureTextEntry: true, value: user.pass, onChangeText: function (e) { return onChangePass(e); }, keyboardType: "number-pad", style: { marginBottom: 32 } }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: Styles_1.styles.button1, onPress: function () { return checkLogin(); } },
                react_1["default"].createElement(react_native_1.Text, { style: { fontSize: 16 } }, "Login")))));
};
exports["default"] = Auth;
