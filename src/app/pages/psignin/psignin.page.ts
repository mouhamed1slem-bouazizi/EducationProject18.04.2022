import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-psignin',
  templateUrl: './psignin.page.html',
  styleUrls: ['./psignin.page.scss'],
})
export class PsigninPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(public auth: AngularFireAuth, private router: Router, public user: UserService) { }

  ngOnInit() {
  }

  goToTabs() {
    this.router.navigate(['']);
  }
  gosignup() {
    this.router.navigate(['/psignup']);
  }
  async login() {
    const { username, password} = this
    try {
      const res = await this.auth.signInWithEmailAndPassword(username ,password)
      if(res.user){
        this.user.setUser({
          username,
          uid: res.user.uid
        })
      }
      console.log(res.user.uid)
      console.log("you are loggid in now")
      this.router.navigate([''])
    } catch(err) {
      console.dir(err)
      if(err.code == "auth/user-not-found"){
        console.log("User not foundddd")
      }
    }
  }

}
