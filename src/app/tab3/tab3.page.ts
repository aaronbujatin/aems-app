import { Component, ViewChild } from '@angular/core';
import { VendorService } from '../service/vendor.service';
import { Vendor } from '../model/vendor.model';
import { IonModal, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { BookingService } from '../service/booking.service';
import { Booking } from '../model/booking.model';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private vendorService: VendorService,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private authenticationService: AuthenticationServiceService,
    private toastController: ToastController) { }


  vendorForm: FormGroup;
  vendors: Vendor[];
  bookings: Booking[];

  ngOnInit() {
    this.getAllVendors();
    this.initForm();
    this.getAllBookingsByOrganizerName();

  }
  
  public initForm() {
    this.vendorForm = this.formBuilder.group({
      eventNameReference: ['', [Validators.required]],
      vendorType: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),],],
      regionCityZip: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern("(09)[0-9 ]{9}"),
      ]],
      website: ['', [Validators.required]],
      contractSigned: [''],
      contractExpired: [''],
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

  public getAllBookingsByOrganizerName() {
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    this.bookingService.getAllBookingByOrganizerName(loggedInUsername).subscribe(
      (response: Booking[]) => {
        this.bookings = response
        console.log(response);
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

  onSubmit() {
    const vendor = this.vendorForm.value
    if (this.vendorForm.valid) {
      this.vendorService.saveVendor(vendor).subscribe(
        (response) => {
          this.ngOnInit()
          this.vendorForm.reset()
          this.presentToast('bottom')
          this.cancel()
          console.log(response);
        }
      ), (error) => {
        console.log(error);
      }
    } else {
      this.errorInputToast('bottom');
    }
  }

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Vendor successfully added',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  async errorInputToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Please provide proper input',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  contractExpiredDate: string
  contractSignedDate: string

  contractSignedDateChanged(value) {
    this.contractSignedDate = value.split('T')[0];
    this.vendorForm.get('contractSigned').setValue(this.contractSignedDate);
    console.log("signed date : " + this.contractSignedDate);
  }
  contractExpiredDateChanged(value) {
    this.contractExpiredDate = value.split('T')[0];
    this.vendorForm.get('contractExpired').setValue(this.contractExpiredDate);
    console.log("expired date : " + this.contractExpiredDate);
  }






}
