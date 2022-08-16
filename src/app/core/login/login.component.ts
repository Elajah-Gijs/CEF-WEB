import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Form Validate 
  submitted = false;
  responseData: any;
  
  constructor(private service:AuthService, private route:Router)
  {
    localStorage.clear();
  }
  

  ProceedLogin() {

    if(this.loginForm.valid){
      this.service.proceedLogin(this.loginForm.value).subscribe(result=>{
        // if (result!=null){
        //   this.responseData = result;
        //   localStorage.setItem('token', this.responseData.jwtToken);
        //   this.route.navigate([''])
        // }
        
        // if(result.success){
        //   console.log(result)
        //   alert(result.message);
        // }
        // else {
        //   alert(result.message);
        // }

        console.log(result)
        localStorage.setItem('token', result.token)
        this.route.navigate(['/message'])
        alert(result.message)
      })
    }
  
    this.submitted = true;
    
    // //stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // //True if all the fields are filled
    // if(this.submitted)
    // {
    //   alert("Great!!");
    // }
  
  }
  


  ngOnInit():void {}

  loginForm =  new UntypedFormGroup({
    username: new UntypedFormControl ('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', Validators.required)
  });

  public get username() { return this.loginForm.get('username'); }
  public get password() { return this.loginForm.get('password'); }

}