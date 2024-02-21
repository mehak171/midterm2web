import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  employeeForm = new FormGroup({
    employeeName: new FormControl(''),
    employmentStatus: new FormControl(''),
    isCertified: new FormControl(false)
  });

  constructor(private dataService: DataService, private router: Router) {}

  async onSubmit() {
    // Update employee data in the DataService
    this.dataService.updateEmployeeData({
      name: this.employeeForm.value.employeeName || '',
      status: this.employeeForm.value.employmentStatus || '',
      certified: this.employeeForm.value.isCertified || false
    });

    // Navigate to the output component
    const navigationSuccessful = await this.router.navigate(['/output']);
    if (navigationSuccessful) {
      console.log('Navigation to output component successful');
    } else {
      console.error('Navigation to output component failed');
    }
  }
}
