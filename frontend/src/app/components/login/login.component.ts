import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import Validation from '../../util/validation';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  users: any;
  id: any;

  isLogin:boolean = false;
  submitted: boolean = false;
    
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
       
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      }
    )
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    

    this.authService.login(this.form.value).subscribe(
      {
        next: (res: any) =>{
          this.router.navigate(['/todo'])

        },error: (err: any)=>{
          console.log(err.error.error)
        }
      }
    );
  }
 

}
