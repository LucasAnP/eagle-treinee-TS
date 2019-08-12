"use strict";
exports.__esModule = true;
var spaceCraft = /** @class */ (function () {
    function spaceCraft(propulsor) {
        this.propulsor = propulsor;
    }
    spaceCraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return spaceCraft;
}());
exports.spaceCraft = spaceCraft;
