import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event.provider'
/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
    private eventdb = this.eventPro.getEvents()
    private events : any[]
    constructor(public navCtrl: NavController, public navParams: NavParams,
                    private eventPro: EventProvider,) {}
    ionViewDidLoad() {
      this.events=[]
      console.log('ionViewDidLoad UsersPage');
      //this.getAddedUsers()
      this.getAddedEvents()

    }
    eventSelected(event){

    }

    //
    // getData (){
    //
    //   this.userdb.on('child_added', (snapshot)=>{
    //       console.log(snapshot.val())
    //       this.users.push(snapshot.val())
    //   })
    // }

    getAddedEvents(){
        this.eventPro.getAddedEvents()
              .subscribe(event=> {
                console.log(event)
                this.events.push(event)
              },
              err =>{
                 console.error("Unable to add event - ", err)
              })
    }

}
