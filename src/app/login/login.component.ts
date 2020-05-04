import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authservice: AuthServiceService) {  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
      this.formGroup = new FormGroup(
        {
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        }
      );
  }

  validateLogin(){
    if (this.formGroup.valid){
      this.authservice.login(this.formGroup.value).subscribe(result => {
        console.log('result', result);
        if (result.success){
          const res = JSON.parse(result);
          console.log(res);
        }
        else{
        }
      });
    }
  }

}
