import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { UserProvider } from '../../providers/user.provider'
//import { AngularFire, FirebaseListObservable } from 'angular2'


@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {


  private userdb = this.userpro.getUsers()
  private users : any[]
  constructor(public navCtrl: NavController, public navParams: NavParams,
                  private userpro: UserProvider,) {}





  ionViewDidLoad() {
    this.users=[]
    console.log('ionViewDidLoad UsersPage');
    //this.getAddedUsers()
    this.getAddedUsers()

  }
  userSelected(user){

  }

  //
  // getData (){
  //
  //   this.userdb.on('child_added', (snapshot)=>{
  //       console.log(snapshot.val())
  //       this.users.push(snapshot.val())
  //   })
  // }

  getAddedUsers(){
      this.userpro.getAddedUsers()
            .subscribe(user=> {
              console.log(user)
              this.users.push(user)
            },
            err =>{
               console.error("Unable to add user - ", err)
            })
  }
}
