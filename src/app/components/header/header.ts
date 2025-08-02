import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  CirclePlusIcon, GithubIcon, LinkedinIcon, LogIn, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  readonly CirclePlusIcon = CirclePlusIcon;
  readonly GithubIcon = GithubIcon;
  readonly LinkedinIcon = LinkedinIcon;
  readonly LoginIcon = LogIn // Assuming you have a Linkedin icon, replace with actual icon if available
}
