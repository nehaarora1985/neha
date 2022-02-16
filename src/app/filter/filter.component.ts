import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() male: any ;
  @Input() female:any;
  @Input() all: any;


  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onChange(input: any){
    
    this.onClick.emit(input);
  }

}
