import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from '@ngx-translate/core';
import {StorageService} from "../../../../shared/services/storage/storage.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  languageForm: FormGroup;
  language: any;
  languageKey: string = "language";
  constructor(private formBuilder: FormBuilder, private translateService: TranslateService,
              protected storageService:StorageService) {
  }

  ngOnInit(): void {
    const languageDefault = this.storageService.getItem(this.languageKey) ?? "es";
    this.changeLanguage(languageDefault);
    this.languageForm = this.formBuilder.group({
      language: [languageDefault]
    });


    this.languageForm.get('language').valueChanges.subscribe(() => {
      this.changeLanguage(this.languageForm.get('language').value);
      this.storageService.setItem(this.languageKey,this.languageForm.get('language').value);
    });

  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
    this.translateService.setDefaultLang(language);
  }
}
