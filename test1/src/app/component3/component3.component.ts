import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  
  public text3="";
  @Output() public grandchildEvent= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.grandchildEvent.emit(this.text3);
  }
}
