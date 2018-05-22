"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var RoomComponent = (function () {
    function RoomComponent(http) {
        var _this = this;
        this.http = http;
        this.rooms = 'http://localhost/hotel_exercise/rooms.php';
        this.name = "";
        //   var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.get(this.rooms).subscribe(function (data) {
            _this.data = JSON.parse(data["_body"]);
            //console.log(this.data);
        }, function (err) { return console.log(err.text()); }, function () {
        });
    }
    return RoomComponent;
}());
RoomComponent = __decorate([
    core_1.Component({
        selector: 'RoomPage',
        templateUrl: 'app/room/room.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], RoomComponent);
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=room.component.js.map