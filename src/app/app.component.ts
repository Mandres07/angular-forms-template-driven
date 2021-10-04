import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   defaultQuestion = 'pet';
   answer = '';
   genders = ['male', 'female'];
   name = '';
   user = {
      username: '',
      email: '',
      secretQuestion: '',
      secretAnswer: '',
      gender: ''
   };
   submitted = false;

   suggestUserName() {
      const suggestedName = 'Superuser';
      this.name = suggestedName;
   }

   onSubmit(form: NgForm) {
      this.user.username = form.value.userData.username;
      this.user.email = form.value.userData.email;
      this.user.secretQuestion = form.value.secret;
      this.user.secretAnswer = form.value.questionAnswer;
      this.user.gender = form.value.gender;
      this.submitted = true;
   }
}
