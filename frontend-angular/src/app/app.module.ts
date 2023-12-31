import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlashcardManagementComponent } from './flashcard-management/flashcard-management.component';
import { LessonSearchPageComponent } from './lesson-search/lesson-search-page.component';
import { PdfUploadComponent } from './pdf-upload/pdf-upload.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    RegisterComponent,
    AppComponent,
    HomeComponent,
    FlashcardManagementComponent,
    PdfUploadComponent,
    LessonSearchPageComponent,
    LoginComponent

    // Any other components that belong to this module must be declared here.
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule // This should be last to ensure that it catches all routes.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
