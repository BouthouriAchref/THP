import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { User } from '../models/User';
import {AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: any;
  userListRef : AngularFireList<any>;

  constructor(//public afStore:AngularFirestore,
    //public ngFireAuth: AngularFireAuth,
    //public router:Router,
    //private db:AngularFireDatabase
    ) { 
    //   this.ngFireAuth.authState.subscribe(user =>{
    //     if (user) {
    //       this.userData = user
    //       localStorage.setItem('user',JSON.stringify(this.userData))
    //       JSON.parse(localStorage.getItem('user'))
    //     } else {
    //       localStorage.setItem('user',null)
    //       JSON.parse(localStorage.getItem('user'))
    //     }
    //   })
  
  
    //   this.userListRef = this.db.list('/users')
    }

    // signIn(email:string,password:string){
    //   return this.ngFireAuth.signInWithEmailAndPassword(email,password)
    // }
    
    // registerUser(email:string,password:string){
    //   return this.ngFireAuth.createUserWithEmailAndPassword(email,password)
    // }
    
    
    // get isLoggedIn() : boolean{
    //   const user =  JSON.parse(localStorage.getItem('user'))
    //   return (user !== null ) ? true:false
    // }
    
    
    // setUserData(user:any){
    
    //   const userRef : AngularFirestoreDocument<any> = this.afStore.doc(`users/${user._id}`)
    
    //   const userData : User = {
    //     _id: user._id,
    //     Email: user.Email,
    //     Nom: user.Nom,
    //     Username: user.Username,
    //     Mdp: user.Mdp,
    //     Nationalite: user.Nationalite,
    //   }
    
    
    //   return userRef.set(userData,{
    //     merge: true
    //   })
    // }
    
    
    
    // signOut(){
    //   return this.ngFireAuth.signOut().then(()=>{
    //      localStorage.removeItem('user') 
    //      this.router.navigate(['login'])
         
    //   })
    // }
}

