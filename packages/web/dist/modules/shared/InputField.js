var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { Form, Input } from 'antd';
var FormItem = Form.Item;
// <div>
//   <input type="text" {...field} {...props} />
//   {touched[field.name] &&
//     errors[field.name] && <div className="error">{errors[field.name]}</div>}
// </div>
export var InputField = function (_a) {
    var field = _a.field, // { name, value, onChange, onBlur }
    _b = _a.form, touched = _b.touched, errors = _b.errors, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    props = __rest(_a, ["field", "form"]);
    var errorMsg = touched[field.name] && errors[field.name];
    return (React.createElement(FormItem, { help: errorMsg, validateStatus: errorMsg ? "error" : undefined },
        React.createElement(Input, __assign({}, field, props))));
};
//# sourceMappingURL=InputField.js.map