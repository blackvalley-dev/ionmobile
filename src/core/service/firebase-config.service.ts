import {Injectable} from '@angular/core'

import * as firebase from 'firebase'
//import the config
import { FIREBASE_CONFIG } from "../constant/constant"

@Injectable()
export class FirebaseConfigService {

    private database : firebase.database.Database

    constructor(){
      this.configureApp()
      this.configureDatabase()
    }
    //configure app with our specific db config
    configureApp(){
      firebase.initializeApp(FIREBASE_CONFIG)
    }
    //create a database reference object
    configureDatabase(){
      this.database = firebase.database()
    }
    //encapsulate object
    getDatabase() : firebase.database.Database{
      return this.database
    }
}
