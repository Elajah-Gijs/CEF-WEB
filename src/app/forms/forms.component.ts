import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UntypedFormControl,UntypedFormBuilder, UntypedFormGroup, UntypedFormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  title = 'FORM'

  profileForm = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
    tel: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    address: new UntypedFormGroup({
      street: new UntypedFormControl(''),
      city: new UntypedFormControl(''),
      state: new UntypedFormControl(''),
      zip: new UntypedFormControl('')
    })
  });


  public churchForm: UntypedFormGroup;

  constructor(private _fb: UntypedFormBuilder) {
    this.churchForm = this._fb.group({
      churches: this._fb.array([this.addChurchGroup()])
    });
  }

  //Append Fields Set
  private addChurchGroup(): UntypedFormGroup {
    return this._fb.group({
      churchName: [],
      street: [],
      city: [],
      state: [],
      zip: [],
      pastorName: [],
      courtesy: [],
    });
  }


    //Add Fields
    addChurch(): void {
      this.churchArray.push(this.addChurchGroup());

    }
   
    //Remove Fields
    removeChurch(index: number): void {
      this.churchArray.removeAt(index);
    } 

    //Fields Array
    get churchArray(): UntypedFormArray {
      return <UntypedFormArray>this.churchForm.get('churches');
    }    

  ngOnInit() {
    this.profileForm = new UntypedFormGroup({

    });


  }
  
  onSubmit(): void{
    console.log(this.profileForm);
  }
}
