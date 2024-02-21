import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { EmployeeData } from '../data.service'; // Adjust this import according to your actual EmployeeData model location

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, OnDestroy {
  employeeData?: EmployeeData | null; // Allow for null and undefined
  private dataSubscription?: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataSubscription = this.dataService.currentEmployeeData.subscribe(data => {
      this.employeeData = data;
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
}
