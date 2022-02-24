import { Component, OnInit } from "@angular/core";


declare var $: any;

@Component({
  selector: 'app-inputBox',
  templateUrl: './inputBox.component.html',
  styleUrls: ['./inputBox.component.scss']
})
export class InputBoxComponent implements OnInit {

  pincode: any;
  ngOnInit(): void {

  }


}
