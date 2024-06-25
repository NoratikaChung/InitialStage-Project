import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})

export class MainDashboardComponent {
  @Input() selectedSite: any;
  toolStatus: { [key: string]: boolean } = {};

  descriptionDropdownOpen = false;
  descriptionData = [
    { col1: 'Data 1', col2: 'Data A' },
    { col1: 'Data 2', col2: 'Data B' },
    { col1: 'Data 3', col2: 'Data C' },
    { col1: 'Data 4', col2: 'Data D' },
    { col1: 'Data 5', col2: 'Data E' },
    { col1: 'Data 6', col2: 'Data F' },
    { col1: 'Data 7', col2: 'Data G' },
    { col1: 'Data 8', col2: 'Data H' },
    { col1: 'Data 9', col2: 'Data I' },
    { col1: 'Data 10', col2: 'Data J' },
    { col1: 'Data 11', col2: 'Data K' },
    { col1: 'Data 12', col2: 'Data L' }
  ];

  toggleDescriptionDropdown(): void {
    this.descriptionDropdownOpen = !this.descriptionDropdownOpen;
  }

  toggleLine(line: any): void {
    line.isOpen = !line.isOpen;
  }

  startTool(tool: string): void {
    this.toolStatus[tool] = true;
    console.log(`${tool} started`);
  }

  stopTool(tool: string): void {
    this.toolStatus[tool] = false;
    console.log(`${tool} stopped`);
  }

  restartTool(tool: string): void {
    this.toolStatus[tool] = false;
    console.log(`${tool} restarted (stopped)`);
    setTimeout(() => {
      this.toolStatus[tool] = true;
      console.log(`${tool} restarted (started)`);
    }, 1000); // Simulate restart delay
  }
}
