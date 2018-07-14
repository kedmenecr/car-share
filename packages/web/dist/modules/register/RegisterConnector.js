var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import { RegisterController } from "@car-share/controller";
import { RegisterView } from "./ui/RegisterView";
// container -> view
// container -> connector -> view
// controller -> connector -> view
var RegisterConnector = /** @class */ (function (_super) {
    __extends(RegisterConnector, _super);
    function RegisterConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegisterConnector.prototype.render = function () {
        return (React.createElement(RegisterController, null, function (_a) {
            var submit = _a.submit;
            return React.createElement(RegisterView, { submit: submit });
        }));
    };
    return RegisterConnector;
}(React.PureComponent));
export { RegisterConnector };
//# sourceMappingURL=RegisterConnector.js.map