var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(f_name, l_name, _age, _loc) {
        this.fname = f_name;
        this.lname = l_name;
        this._age = _age;
        this.loc = _loc;
    }
    Human.prototype.fullname = function () {
        return this.fname + " " + this.lname;
    };
    Object.defineProperty(Human.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newage) {
            if (newage < 100 && newage > 0) {
                this._age = newage;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
var h1 = new Human("Virat", "Kholi", 50, "mumbai");
console.log(h1.fullname());
h1.age = 70; //h1.age(500)
console.log(h1.age);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(f_name, l_name, _age, _loc, _eid, _sal, _exp) {
        var _this = _super.call(this, f_name, l_name, _age, _loc) || this;
        _this.eid = _eid;
        _this.salary = _sal;
        _this.exp = _exp;
        return _this;
    }
    return Employee;
}(Human));
var e1 = new Employee("Virat", "Kholi", 50, "mumbai", 123, 200000, 10);
console.log(e1);
