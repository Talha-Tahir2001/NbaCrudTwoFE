import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../../components/footer/footer";
import { LucideAngularModule, ZapIcon } from 'lucide-angular';
@Component({
  selector: 'app-home',
  imports: [RouterLink, Footer, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',  
})
export class Home {
  readonly ZapIcon = ZapIcon;
}
