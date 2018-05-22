import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './components/body.component';
import { AddRoomComponent } from './service/addroom.component';
import { RegisterComponent } from './service/register.component';
import { LoginComponent } from './service/login.component';
import { AllRoomsComponent } from './service/allrooms.component';
import { AllRoomTypesComponent } from './service/allroomtypes.component';
import { AddRoomTypeComponent } from './service/addroomtype.component';
import { RoomsComponent } from './room/rooms.component';
import { UpdateRoomComponent } from './room/update.component';

const appRoutes: Routes = [
{ path: '', component: BodyComponent },
{ path: 'room', component: RoomComponent },
{ path: 'about', component: AboutComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'allrooms', component: AllRoomsComponent},
{ path: 'addroom', component: AddRoomComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'login', component: LoginComponent},
{ path: 'addroomtype', component: AddRoomTypeComponent},
{ path: 'allroomtypes', component: AllRoomTypesComponent},
{ path: 'room/:id', component: RoomsComponent},
{ path: 'updateroom/:id', component: UpdateRoomComponent},
//{ path: 'update', component: UpdateRoomComponent}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
