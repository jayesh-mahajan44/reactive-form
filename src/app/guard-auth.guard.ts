import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobelServiceService } from './globel-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {

  constructor(private service:GlobelServiceService,private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      let user = this.service.getLocalStorage('activeUser')
      if(user && user.username && user.password){
        return true
      }
      else{
   this.router.navigate(['login'])
        return false;
      }
     }

  }
  

