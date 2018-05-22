"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header.component");
var footer_component_1 = require("./components/footer.component");
var body_component_1 = require("./components/body.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var room_component_1 = require("./room/room.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var addroom_component_1 = require("./service/addroom.component");
var register_component_1 = require("./service/register.component");
var login_component_1 = require("./service/login.component");
var search_1 = require("./pipes/search");
var rooms_component_1 = require("./room/rooms.component");
var allroomtypes_component_1 = require("./service/allroomtypes.component");
var addroomtype_component_1 = require("./service/addroomtype.component");
var allrooms_component_1 = require("./service/allrooms.component");
var update_component_1 = require("./room/update.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, body_component_1.BodyComponent,
            room_component_1.RoomComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, addroom_component_1.AddRoomComponent, register_component_1.RegisterComponent, login_component_1.LoginComponent,
            allroomtypes_component_1.AllRoomTypesComponent, rooms_component_1.RoomsComponent, addroomtype_component_1.AddRoomTypeComponent, allrooms_component_1.AllRoomsComponent, update_component_1.UpdateRoomComponent, search_1.SearchPipe],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map