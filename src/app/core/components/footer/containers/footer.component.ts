import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  languageForm: any;

  //private translateService: agregar TranslateService al constructor
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.languageForm = this.formBuilder.group({
      language: ['']
    });
    
    /*
    this.form.get('language').valueChanges.subscribe(() => {
      console.log('algo');
      this.translateService.use(this.form.get('language').value);
      this.translateService.setDefaultLang(this.form.get('language').value);
    });
    */
  }

}
