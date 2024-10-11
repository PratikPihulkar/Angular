import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import {  DataStoreService, BlogDetails} from '../../Service/data-store.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-blog2',
  templateUrl: './add-blog2.component.html',
  styleUrl: './add-blog2.component.css'
})
export class AddBlog2Component implements OnInit {
  addBlog!: FormGroup;

  constructor(  private fb: FormBuilder, private dataStoreService: DataStoreService) {}

  ngOnInit(): void {
    this.addBlog = this.fb.group({
      blogTitle: ['', Validators.required ] ,
      fullName: ['', Validators.required ,] ,//^[a-zA-Z]+(\s[a-zA-Z]+)?$    Validators.pattern('^[a-zA-Z]+$')
      articalDate: ['', [Validators.required, this.validDateRange()]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      image:['', Validators.required,  ],
      rate: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      comment:['']
    });
  }
   
  validDateRange(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const dateValue = new Date(control.value);
      const startDate = new Date('2000-01-01');
      const endDate = new Date();

      if (dateValue < startDate || dateValue > endDate) {
        return { dateOutOfRange: true };
      }

      return null;
    };
  }

   
  goBack() {
    window.history.back();
  }

  saveData(): void {
    console.log(this.addBlog);
    this.dataStoreService.addBlog(this.addBlog).subscribe(()=>{
      console.log('success');
      alert("Blog Added")
      this.goBack()
    })
    
  }
}
