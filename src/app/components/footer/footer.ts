import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GithubIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [DatePipe, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear: Date = new Date();

  readonly GithubIcon = GithubIcon;
}
