import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { MatSelectModule } from '@angular/material/select';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatSlideToggle } from '@angular/material/slide-toggle';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { FlexLayoutServerModule } from '@angular/flex-layout/server';

import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatSortModule} from '@angular/material/sort';
import { AddBlog2Component } from './add-blog2/add-blog2.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DateFormatPipe } from './Pipe/date-format.pipe';
import { FormatTextPipe } from './Pipe/format-text.pipe';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';



@NgModule({
  declarations: [
    AppComponent,
    AddBlog2Component,
    BlogListComponent,
    FormatTextPipe,
    DateFormatPipe,
    AddCommentsComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatError,
    MatDialogModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTableModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatStepperModule,
    MatChipsModule,
    MatSortModule,
    MatAutocompleteModule,
    MatSlideToggle,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
