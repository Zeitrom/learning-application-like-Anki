import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// CommonModule import might not be necessary if BrowserModule is imported.
// Import specific Angular Material modules here if you use them.

import { AppRoutingModule } from './app-routing.module'; // Ensure this file defines and exports a 'routes' array.
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudyViewComponent } from './study-view/study-view.component';
import { FlashcardManagementComponent } from './flashcard-management/flashcard-management.component';
import { UserProfileSettingsComponent } from './user-profile-settings/user-profile-settings.component';
import { PdfUploadComponent } from './pdf-upload/pdf-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    StudyViewComponent,
    FlashcardManagementComponent,
    UserProfileSettingsComponent,
    PdfUploadComponent
    // Any other components that belong to this module must be declared here.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // This should be last to ensure that it catches all routes.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
