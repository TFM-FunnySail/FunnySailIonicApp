import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  languageForm: FormGroup;
  language: any;
  //private translateService: agregar TranslateService al constructor
  constructor(private formBuilder: FormBuilder, private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.languageForm = this.formBuilder.group({
      language: ['']
    });
    

    this.languageForm.get('language').valueChanges.subscribe(() => {
      console.log('algo');
      this.translateService.use(this.languageForm.get('language').value);
      this.translateService.setDefaultLang(this.languageForm.get('language').value);
    });

  }

}
