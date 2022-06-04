import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth/auth.service";
import {UsersService} from "../../../shared/sdk";
import {StorageService} from "../../../shared/services/storage/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  users: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              protected authService:AuthService,
              protected userService: UsersService,
              protected storageService:StorageService) {

    this.form = this.formBuilder.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });

  }


  ngOnInit(): void {

  }

  login() {
    if (!this.form.invalid){
      this.authService.login(this.form.value,(resp: any)=>{
        console.log(resp)
        if(resp){
          this.userService.apiUsersIdGet(resp.id).subscribe(resp=>{
            console.log(resp);
            this.storageService.setItem("userId",resp.userId);
            this.storageService.setItem("User",resp.firstName);
            this.storageService.setItem("userEmail",resp.email);
          });
        }
        this.router.navigate(['']);
      },(err: { error: { esMessage: any; }; message: any; })=>{
        const errorMessage = err.error.esMessage ?? err.message ;
        this.form.reset();
      });
    }
  }

  goSignUp() {
    this.router.navigate(['sign-up']);
  }

}
