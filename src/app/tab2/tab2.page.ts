import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonModal, LoadingController, NavController, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonDatetime } from '@ionic/angular';
import { PlannerService } from '../service/planner.service';
import { Planner } from '../model/planner.model';
import { CustomTimeFormatPipe } from '../custom-time-format.pipe';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private formBuilder: FormBuilder,
    private plannerService: PlannerService,
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router, private route: ActivatedRoute,
    private navCtrl: NavController,
    private loadingController: LoadingController) {

  }
  ngOnInit() {
    this.initForm();
    this.getPlannerApi()
    console.log(this.router.url);



  }


  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete?',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Task successfully added',
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

  date: string = ''
  time: string = ''

  async onSubmit() {
    const loading = await this.loadingController.create({
      message: 'Processing...',
      spinner: 'crescent', // You can change the spinner type here
    });
    await loading.present();

    const planner = this.plannerForm.value
    if (this.plannerForm.valid) {
      const organizerName = localStorage.getItem('loggedInUsername');
      planner.organizerName = organizerName
      this.plannerService.savePlanner(planner).subscribe(
        (response) => {
          this.ngOnInit()
          this.plannerForm.reset()
          this.presentToast('bottom')
          this.cancel()
          loading.dismiss();
          console.log(response);
        }
      ), (error) => {
        loading.dismiss();
        console.log(error);

      }
    } else {
      this.errorInputToast('bottom');
    }
  }
  // onSubmit() {
  //   const planner = this.plannerForm.value
  //   if (this.plannerForm.valid) {
  //     this.plannerService.savePlanner(planner).subscribe(
  //       (response) => {
  //         this.ngOnInit()
  //         this.plannerForm.reset()
  //         this.presentToast('bottom')
  //         this.cancel()
  //         console.log(response);
  //       }
  //     ), (error) => {
  //       console.log(error);
  //     }
  //   } else {
  //     this.errorInputToast('bottom');
  //   }
  // }


  plannerForm: FormGroup

  public initForm() {
    const organizerName = localStorage.getItem('loggedInUsername');
    this.plannerForm = this.formBuilder.group({
      message: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      organizerName: [organizerName, [Validators.required]],
    })
  }

  get errorControl() {
    return this.plannerForm.controls;
  }

  planners: Planner[]

  getPlannerApi() {
    const organizerName = localStorage.getItem('loggedInUsername');
    this.plannerService.getPlannerByOrganizerName(organizerName).subscribe(
      (response: Planner[]) => {
        this.planners = response
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
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

  timeChanged(value) {
    this.time = value.split('T')[1].substring(0, 5);
    this.plannerForm.get('time').setValue(this.time);
    console.log(this.time);

  }

  dateChanged(value) {
    this.date = value.split('T')[0];
    this.plannerForm.get('date').setValue(this.date);
    console.log(this.date);
  }


  plannerId: string

  ionViewWillEnter() {

  }

  reloadPage() {
    this.navCtrl.navigateForward('/tabs/planner');
  }

  reloadTab() {
    // Get the current route URL
    const currentRoute = this.router.url;

    // Navigate to the same route to reload the component
    this.router.navigateByUrl(currentRoute);
  }

  async deleteAlert(id: string) {
    const alert = await this.alertController.create({

      message: 'Are you sure you want to delete this planner?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel', // This role will dismiss the alert when clicked
          handler: () => {
            console.log('Cancel clicked, alert dismissed');
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.showLoading();
            this.reloadTab();
            this.deletePlannerById(id);
          },
        },
      ],
    });

    await alert.present();
  }



  deletePlannerById(id: string) {
    this.plannerService.deletePlannerById(id).subscribe(
      (response) => {
        this.ngOnInit()
        console.log(response);
      }, (error) => {
        this.ngOnInit()
        console.log(error);
      }
    )
  }

  public getPlannerId(id: string) {
    this.plannerId = id
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting...',
      duration: 3000,
    });

    loading.present();
  }


}
