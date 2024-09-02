import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email: string = '';

  shareAppLink() {
    if (this.validateEmail(this.email)) {
      console.log(`App link will be shared to: ${this.email}`);
      // هنا يمكنك تنفيذ المنطق لإرسال الرابط إلى البريد الإلكتروني
    } else {
      alert('Please enter a valid email address.');
    }
  }

  validateEmail(email: string): boolean {
    // تعبير منتظم للتحقق من صحة البريد الإلكتروني
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

}
