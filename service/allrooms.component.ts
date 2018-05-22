import { Component, Directive } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';


@Component({
  selector: 'AllRoomsComponent',
  templateUrl: 'app/service/allrooms.component.html'
})

export class AllRoomsComponent{

  private data : Object[];
  private router: Router;

  constructor(private http: Http, router: Router) {
    this.router = router;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
  http.get('http://localhost/hotel_exercise/getRooms.php', {headers: headers})
  .map(res => res.json()).share()
  .subscribe(data => {
  this.data = data.rooms;

  },
  err => {

  this.router.navigate(['./']);
  }
  );
  }



  public removeRoom(event: Event, item: Number) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this.http.get('http://localhost/hotel_exercise/deleteroom.php?id='+item,{headers:headers}) .subscribe( data => {
      event.srcElement.parentElement.parentElement.remove();
    });
  }

  public viewRoom(item: Number){
    this.router.navigate(['/room', item]);
  }


  public updateRoom(item: Number){
    this.router.navigate(['/updateroom', item]);
  }



}
