import { Component } from '@angular/core';
import { Chore } from '../../interfaces/chore';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  chores: Chore[] = [
    { id:'1', name: 'Vacuum the living room', dueDate: new Date('2024-12-06') },
    { id:'2', name: 'Wash the dishes', dueDate: new Date('2024-12-07') },
    { id:'3', name: 'Laundry', dueDate: new Date('2024-12-08') },
    { id:'4', name: 'Take out the trash', dueDate: new Date('2024-12-09') },
    { id:'5', name: 'Water the plants', dueDate: new Date('2024-12-10') }
  ];

}
