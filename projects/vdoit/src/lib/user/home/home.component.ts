import { Component, OnInit } from '@angular/core';
import { AuthService  } from '../auth.service'
import * as firebase from 'firebase';
import {Router} from '@angular/router'
import { AngularFirestore} from '@angular/fire/firestore'




@Component({
  selector: 'enl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 user = firebase.auth().currentUser;
 url
 data;
  constructor(private auth : AuthService , private router: Router, private db: AngularFirestore) { 

  }

  ngOnInit() {
  
    this.url = this.router.url.slice(12)
    //this.data = this.db.collection('user')
    firebase.firestore().collection('user').onSnapshot((doc)=>{
      //console.log(doc)
      doc.forEach((docs) =>{
        console.log(docs)
        //console.log(doc);
        this.data = docs.data();
       // console.log(this.data())
       console.log(this.data.uploadImage);
        
      })
    

    })
    
    //console.log(firebase.database().app)
    // this.data.get().then(documentSnapshot => {
    //   if (documentSnapshot.exists) {
    //     console.log(documentSnapshot);
    //   }
    // });
    

  }
  onLogOut(){
    this.auth.logout();
    this.router.navigate[('/')]
  }

}
