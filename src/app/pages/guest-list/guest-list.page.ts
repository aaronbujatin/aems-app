import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonModal, LoadingController, ToastController } from '@ionic/angular';
import { Guest } from 'src/app/model/guest.model';
import { GuestService } from 'src/app/service/guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.page.html',
  styleUrls: ['./guest-list.page.scss'],
})
export class GuestListPage implements OnInit {

  constructor(private guestService: GuestService, 
    private alertController: AlertController, 
    private loadingController: LoadingController, 
    private formBuilder: FormBuilder,
    private toastController: ToastController) {
    
   }

  ngOnInit() {
    this.initForm();
    this.getAllGuestByEventName()
    console.log(this.guestService.eventNameReference);
    

  }

  isEnabled = true

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      name: 'confirmed',
      label: 'Confirmed',
      type: 'radio',
      value: 'confirmed',
    },
    {
      name: 'undecided',
      label: 'Undecided',
      type: 'radio',
      value: 'undecided',
    },
  ];


  guests: Guest[]
  currentFilter : string = "All"

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: "Filter guest",
      inputs: [
        {
          name: 'Confirmed',
          type: 'radio',
          label: 'Confirmed',
          value: 'confirmed',
        },
        {
          name: 'Undecided',
          type: 'radio',
          label: 'Undecided',
          value: 'undecided'
        },
        {
          name: 'All',
          type: 'radio',
          label: 'All',
          value: 'all'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            // this.loadGuestByStatus(data)
            if(data === 'all') {
              this.getAllGuestByEventName();
              this.currentFilter = "All"
            } else if( data === 'confirmed' || data === 'undecided') {
              this.guestService.getAllGuestByEventNameAndStatus(this.guestService.eventNameReference, data).subscribe(
                (response : Guest[]) => {
                  this.currentFilter = data
                  this.guests = response;
                  console.log(this.guests);
                }, (error) => {
                  console.log(error);
                }
              )
            }
            console.log(data);
          }
        }
      ]
    });
    await alert.present();
  }

  @ViewChild(IonModal) modal: IonModal;
 
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  guestForm: FormGroup

  public initForm() {
    this.guestForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      eventNameReference: [this.guestService.eventNameReference, Validators.required],
      relatedness: ['', Validators.required],
    })
  }


  async onSubmit() {
    const loading = await this.loadingController.create({
      message: 'Processing...',
      spinner: 'crescent', // You can change the spinner type here
    });
    await loading.present();

    const guest = this.guestForm.value
  
    if (this.guestForm.valid) {
      this.guestService.saveGuest(guest).subscribe(
        (response) => {
          this.ngOnInit()
          this.guestForm.reset()
          this.presentToast('bottom')
          this.cancel()
          loading.dismiss();
          console.log(response);
        }
      ), (error) => {
        console.log(error);
        loading.dismiss();
      }
    } else {
      loading.dismiss();
      this.errorInputToast('bottom');
    }
  }

  get errorControl() {
    return this.guestForm.controls;
  }

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Guest successfully added',
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

  async showSuccessLoading() {
    const loading = await this.loadingController.create({
      message: 'Adding...',
      duration: 2000,
    });

    loading.present();
  }

  searchQuery : string = ""

  searchGuests(){
    this.guestService.getSearchByEventNameAndFirstNameOrLastName(this.guestService.eventNameReference, this.searchQuery).subscribe(
      (response : Guest[]) => {
        this.guests = response
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
    
  }


  public getAllGuestByEventName(){
    this.guestService.getAllGuestByEventName(this.guestService.eventNameReference).subscribe(
      (response : Guest[]) => {
        this.guests = response
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
