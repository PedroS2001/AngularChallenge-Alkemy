import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public myForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  clickLogin() {

    let email = this.myForm.get('email')?.value;
    let password = this.myForm.get('password')?.value;

    console.info('email', email);
    console.info('password ', password);
    console.info('Valido', this.myForm.valid);

    if (this.myForm.valid) {
      this.spinner.show('mySpinner');

      this.auth.obtenerToken(email, password).subscribe((data: any) => {
        localStorage.setItem('token', data.token);
        console.log(data.token);
        this.spinner.hide('mySpinner');
        this.router.navigate(['']);
      }, (err: any) => {
        this.spinner.hide('mySpinner');
        Swal.fire({ 
          title: "Error",
          text: err.error.error,
          icon: 'error',
          timer: 2000,
          confirmButtonColor: '#d33'
        });
      })
    }
    else {
      Swal.fire({
        title: "Error",
        text: "Hay datos invalidos",
        icon: 'error',
        timer: 2000,
        confirmButtonColor: '#d33'
      });
    }

  }

}
