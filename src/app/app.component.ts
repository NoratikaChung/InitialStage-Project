import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';

  selectedSite: any;

  onSiteSelected(site: any): void {
    this.selectedSite = site;
  }
}
