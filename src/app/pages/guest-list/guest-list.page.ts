import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Guest } from 'src/app/model/guest.model';
import { GuestService } from 'src/app/service/guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.page.html',
  styleUrls: ['./guest-list.page.scss'],
})
export class GuestListPage implements OnInit {

  constructor(private guestService: GuestService, private alertController: AlertController, private loadingController: LoadingController) { }

  ngOnInit() {
   
    this.getAllGuest()

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


  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Filter guest',
  //     buttons: this.alertButtons,
  //     inputs: this.alertInputs,
  //   });

  //   await alert.present();

  //   alert.onDidDismiss().then((data) => {
  //     if (data.role === 'ok') {
  //       console.log('Selected Value:', data.data.values);
  //       // 'data.data.values' will contain the value of the selected radio option
  //     }
  //   });
  // }

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
            this.loadGuestByStatus(data)


          }
        }
      ]
    });
    await alert.present();
  }

  async loadGuestByStatus(status: string) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'crescent', // You can change the spinner type here
    });
    await loading.present();

    loading.onDidDismiss().then((data) => {
      if (data.role === 'ok') {
        const selectedValue = data.data.values

        if (selectedValue === 'all') {
          this.guestService.getAllGuest().subscribe(
            (response: Guest[]) => {
              this.guests = response
              console.log(this.guests);
            }, (error) => {
              console.log(error);
              loading.dismiss();
            }
          )
        } else if(selectedValue === 'confirmed' || selectedValue === 'undecided') {
          this.guestService.getGuestsByStatus(status).subscribe(
            (response: Guest[]) => {
              this.guests = response;
              console.log(this.guests);
              loading.dismiss();
            }, (error) => {
              console.log(error);
              loading.dismiss();
            }
          )
        }
      }
    })
  }


  public getAllGuest(){
    this.guestService.getAllGuest().subscribe(
      (response : Guest[]) => {
        this.guests = response
        console.log(response);
        
      }, (error) => {
        console.log(error);
      
      }
    )
  }
}
