"use strict";
var router_1 = require("@angular/router");
var room_component_1 = require("./room/room.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var body_component_1 = require("./components/body.component");
var addroom_component_1 = require("./service/addroom.component");
var register_component_1 = require("./service/register.component");
var login_component_1 = require("./service/login.component");
var allrooms_component_1 = require("./service/allrooms.component");
var allroomtypes_component_1 = require("./service/allroomtypes.component");
var addroomtype_component_1 = require("./service/addroomtype.component");
var rooms_component_1 = require("./room/rooms.component");
var update_component_1 = require("./room/update.component");
var appRoutes = [
    { path: '', component: body_component_1.BodyComponent },
    { path: 'room', component: room_component_1.RoomComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'allrooms', component: allrooms_component_1.AllRoomsComponent },
    { path: 'addroom', component: addroom_component_1.AddRoomComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'addroomtype', component: addroomtype_component_1.AddRoomTypeComponent },
    { path: 'allroomtypes', component: allroomtypes_component_1.AllRoomTypesComponent },
    { path: 'room/:id', component: rooms_component_1.RoomsComponent },
    { path: 'updateroom/:id', component: update_component_1.UpdateRoomComponent },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map