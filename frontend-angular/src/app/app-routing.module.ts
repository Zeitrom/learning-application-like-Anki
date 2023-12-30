import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileSettingsComponent } from './user-profile-settings/user-profile-settings.component';
import { StudyViewComponent } from './study-view/study-view.component';
import { FlashcardManagementComponent } from './flashcard-management/flashcard-management.component';
import { PdfUploadComponent } from './pdf-upload/pdf-upload.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile-settings', component: UserProfileSettingsComponent },
  { path: 'study', component: StudyViewComponent },
  { path: 'manage-flashcards', component: FlashcardManagementComponent },
  { path: 'upload', component: PdfUploadComponent },
  // Other routes can be added here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
