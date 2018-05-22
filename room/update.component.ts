

import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'UpdateRoomComponent',
  templateUrl: 'app/room/update.component.html',
})
export class UpdateRoomComponent {
  http: Http;
  router: Router;
  route: ActivatedRoute;
  data: Object[];
  postResponse: Response;


    addRoomForm = new FormGroup({
      roomname: new FormControl(),
      brojKvadrata: new FormControl(),
      brojKreveta: new FormControl(),
      cena: new FormControl(),
      sprat: new FormControl()
    });


  constructor(route: ActivatedRoute, http: Http, router: Router) {
    this.http = http;
    this.router = router;
    this.route = route;
}

ngOnInit() {
this.route.params.subscribe((params: Params) => {
  let id = params['id'];
  let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append("token",localStorage.getItem("token"));
  this.http.get('http://localhost/hotel_exercise/getroom.php?id='+id,{headers:headers}).map(res => res.json()).share()
  .subscribe(data => {
    this.data = data.data;
    console.log(data);
  },
  err => {
    this.router.navigate(['./']);
  });
  });
}


onAddRoom():void{
  var data = "roomname=" + this.addRoomForm.value.roomname +
             "&&broj_kvadrata=" + this.addRoomForm.value.brojKvadrata +
             "&&broj_kreveta=" + this.addRoomForm.value.brojKreveta +
             "&&cena=" + this.addRoomForm.value.cena +
             "&&sprat=" + this.addRoomForm.value.sprat +
             "&&id=" + this.data.id;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append("token",localStorage.getItem("token"));

  this.http.post('http://localhost/hotel_exercise/updateroom.php', data, {
             headers: headers })
             .map(res => res)
             .subscribe( data =>
               this.postResponse = data,
             err => alert(JSON.stringify(err)),
             () => {
             if(this.postResponse["_body"].indexOf("error") === -1){
             this.router.navigate(['./room']);
             }else{
              // console.log(this.postResponse);
             alert("Neuspesno dodavanje sobe");
             }
             }
             );


}





}
