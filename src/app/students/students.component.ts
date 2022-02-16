import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
filter = 'All'
  constructor() { }

  ngOnInit(): void {}
    students = [
      { name: 's1', age: 11, dob: '1/20/1985', gender: 'F' },
      { name: 's2', age: 12, dob: '1/20/1989', gender: 'F' },
      { name: 's3', age: 13, dob: '1/20/1988', gender: 'M' },
      { name: 's4', age: 14, dob: '1/20/1987', gender: 'M' },
      { name: 's5', age: 9, dob: '1/20/1986', gender: 'M' }
    ];
  tableHeads = Object.keys(this.students[0]);

  getAllCount(){
    return this.students.length;
  }
getMaleCount(){
  return (this.students.filter(s => s.gender == 'M')).length;
}
getFemaleCount(){
  return (this.students.filter(s => s.gender == 'F')).length;
}
outputFun(e: any){
  console.log(e , "++++++++");
  this.filter = e;

}

}
