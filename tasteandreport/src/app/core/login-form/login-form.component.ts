import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(),
    email: new FormControl()
  });
  // public password: AbstractControl;

  constructor(private fb: FormBuilder, private us: UserService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required ],
      email: ['', Validators.required ]
    });
  }

  login(): void {
    this.us.login(this.form.get('username').value, this.form.get('email').value);
  }

  ngOnInit() {
  }

}
