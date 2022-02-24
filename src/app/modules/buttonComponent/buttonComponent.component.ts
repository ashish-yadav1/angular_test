import { Component, Input, OnInit } from '@angular/core';
import { PincodeService } from 'src/app/services/pincode.service';


declare var $: any;

@Component({
  selector: 'app-buttonComponent',
  templateUrl: './buttonComponent.component.html',
  styleUrls: ['./buttonComponent.component.scss']
})
export class ButtonComponent implements OnInit {

  pincodedata: any;
  pincode: any = '421501';
  @Input() InputBoxData: any = [];
  constructor(private pincodeService: PincodeService) { }

  ngOnInit(): void {
    //this.retrievePincode();
  }

  retrievePincode() {
    console.log('this.InputBoxData ',this.InputBoxData )
    this.pincodeService.post({ pincode: this.InputBoxData })
      .subscribe(
        data => {
          this.pincodedata =JSON.stringify( data);
          console.log(data);
          
        },
        error => {
          console.log(error);
        });
  }

}
