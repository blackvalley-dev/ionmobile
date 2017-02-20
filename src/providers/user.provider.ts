import { Injectable } from '@angular/core'

import { FirebaseConfigService } from '../core/service/firebase-config.service'

import { Observable } from 'rxjs/Observable'
@Injectable()
export class UserProvider{

    private userdb = this.fire.getDatabase().ref('/students')
    
    constructor (private fire: FirebaseConfigService){}
    //create listener for users in the database
    getAddedUsers():Observable<any>{
      return Observable.create(obs=>{
        this.userdb.on('child_added', user =>{
          obs.next(user.val())//gets data from user and converts to json
        },
        err =>{

        })
      })
    }

    getUsers() {
      return this.userdb
    }
}
