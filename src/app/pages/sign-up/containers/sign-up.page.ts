import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../../shared/sdk";
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public segment:string = "identity";
  registerForm: FormGroup;
  dateValue2: any;
  error: string;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              protected userService: UsersService,) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&+-]{8,25}$')]],
      confirmPassword: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_@./#&+-]{8,25}$')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      birthDay: ['', [Validators.required,]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      state: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      });
  }

  ngOnInit() {
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  reFormatDate(value: string) {
    const date = new Date(value);
    return date.toISOString();
  }

  segmentChanged($event: any) {
    this.segment = $event.detail.value;
  }

  onSubmit() {
    this.error = "";
    if(!this.registerForm.invalid){
      console.log(this.registerForm.value);
      const values = this.registerForm.value;
      if(values.password !== values.confirmPassword){
        this.error = "Las contraseñas deben ser iguales";
        return;
      }
      this.registerForm.value.birthDay = this.reFormatDate(this.registerForm.value.birthDay);
      this.userService.apiUsersPost(this.registerForm.value).subscribe(()=>{
        this.router.navigate(['']);
      }, (error) => {
        console.log(error);
        this.error = error.error.esMessage ?? error.errors.title ?? error.message;

      });
    }
  }
}
