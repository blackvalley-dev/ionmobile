import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { UserProvider } from '../../providers/user.provider'
//import { AngularFire, FirebaseListObservable } from 'angular2'


@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,
                  private userpro: UserProvider,) {}


      public userdb = this.userpro.getUsers()
      private users : any[]


  ionViewDidLoad() {
    this.users=[]
    console.log('ionViewDidLoad UsersPage');
    //this.getAddedUsers()
    this.getData()

  }
  get Users(){
    return this.users
  }

  getData (){

    this.userdb.on('child_added', (snapshot)=>{
        console.log(snapshot.val())
        this.users.push(snapshot.val())
    })
  }

  // getAddedUsers(){
  //
  //     this.users.getAddedUsers()
  //           .subscribe(user=> {
  //             alert(user)
  //           },
  //           err =>{
  //              console.error("Unable to add user - ", err)
  //           })
  //
  //
  // }
}
