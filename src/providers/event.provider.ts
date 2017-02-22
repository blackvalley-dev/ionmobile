import { Injectable } from '@angular/core'

import { FirebaseConfigService } from '../core/service/firebase-config.service'

import { Observable } from 'rxjs/Observable'
@Injectable()
export class EventProvider{

    private eventdb = this.fire.getDatabase().ref('/events')

    constructor (private fire: FirebaseConfigService){}
    //create listener for users in the database
    getAddedEvents():Observable<any>{
      return Observable.create(obs=>{
        this.eventdb.on('child_added', event =>{
          obs.next(event.val())//gets data from user and converts to json
        },
        err =>{

        })
      })
    }

    getEvents() {
      return this.eventdb
    }
}
