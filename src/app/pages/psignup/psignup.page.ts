import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-psignup',
  templateUrl: './psignup.page.html',
  styleUrls: ['./psignup.page.scss'],
})
export class PsignupPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public auth: AngularFireAuth, 
    private router: Router, 
    public afstore: AngularFirestore, 
    public user: UserService) { }

  ngOnInit() {
  }

  goToTabs() {
    this.router.navigate(['']);
  }
  gosignin() {
    this.router.navigate(['/psignin']);
  }
  async registre() {
    const { username, password, cpassword } = this
    if(password !== cpassword){
      console.log("password not matched")
    }
    try {
      const res = await this.auth.createUserWithEmailAndPassword(username, password)

      console.log(res)
      console.log("user created")

    } catch(err) {
      console.dir(err)
      console.log("user not created")
    }
  }

}
