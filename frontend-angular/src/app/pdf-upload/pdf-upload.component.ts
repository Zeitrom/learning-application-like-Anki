import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.scss']
})
export class PdfUploadComponent {
  
  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      // Vous pouvez ici traiter le fichier PDF
      // Par exemple, l'envoyer à un serveur ou le lire localement
      console.log('PDF file selected:', file.name);
    } else {
      alert('Veuillez sélectionner un fichier PDF.');
    }
  }
  lancerCreationFiches(): void {
    // Implement your logic here
    console.log('Launching flashcard creation...');
    // You would typically handle the file upload here and then call a service to create flashcards
  }

  // Method to translate the PDF
  traduirePDF(): void {
    // Implement your logic here
    console.log('Translating PDF...');
    // You would handle the file upload here and then call a service to translate the PDF
  }
}
