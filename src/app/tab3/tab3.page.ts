import { Component, ViewChild } from '@angular/core';
import { VendorService } from '../service/vendor.service';
import { Vendor } from '../model/vendor.model';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 
  constructor(private vendorService: VendorService, private formBuilder: FormBuilder) { }


  vendorForm: FormGroup; 
  vendors: Vendor[];

  ngOnInit() {
    this.getAllVendors();
    this.initForm();
  }

  public initForm() {
    this.vendorForm = this.formBuilder.group({
      eventNameReference: ['', [Validators.required]],
      vendorType: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),],],
      regionCityZip: ['', [Validators.required]],
      contact: ['', [Validators.required], this.asyncPatternValidator],
      website: ['', [Validators.required]],
      contractSigned: ['', [Validators.required]],
      contractExpired: ['', [Validators.required]],
      emailAddressLine: ['', [Validators.required]],
      paymentStatus: ['', [Validators.required]],
      finalCost: ['', [Validators.required]],
      contractDescription: ['', [Validators.required]],
    })
  }

  asyncPatternValidator(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    const pattern = /^[0-9]+$/;
    if (control.value && !pattern.test(control.value)) {
      return Promise.resolve({ patternInvalid: true });
    }
    return Promise.resolve(null);
  }

  get errorControl() {
    return this.vendorForm.controls;
  }

  public getAllVendors() {
    this.vendorService.getAllVendor().subscribe(
      (response: Vendor[]) => {
        this.vendors = response
        console.log(response);
      }, (error) => {
        console.log(error);

      }
    )
  }

  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  events = [
    {
      "id": 1, "name": "Black clover"
    },
    {
      "id": 2, "name": "Naruto Shippuden"
    },

  ]

  submitForm = () => {
    if (this.vendorForm.valid) {
      console.log(this.vendorForm.value);
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };






}
