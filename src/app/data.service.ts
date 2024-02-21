import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface EmployeeData {
  name: string;
  status: string;
  certified: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public employeeData = new BehaviorSubject<EmployeeData | null>(null);
  currentEmployeeData = this.employeeData.asObservable();

  constructor() {}

  updateEmployeeData(data: EmployeeData) {
    this.employeeData.next(data);
  }
}
