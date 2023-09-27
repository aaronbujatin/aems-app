import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonDatetime } from '@ionic/angular';
import { PlannerService } from '../service/planner.service';
import { Planner } from '../model/planner.model';
import { CustomTimeFormatPipe } from '../custom-time-format.pipe';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private formBuilder: FormBuilder, private plannerService: PlannerService, private toastController: ToastController) {

  }
  ngOnInit() {
    this.initForm();
    this.getPlannerApi()


  }

  selectedTime = "14:30"


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

  // onSubmit() {
  //   const planner = this.plannerForm.value
  //   if(planner.date === null && planner.time === null){
  //     this.errorInputToast('bottom');
  //   }else {
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
  //   }
  // }

  onSubmit() {
    const planner = this.plannerForm.value
    if (this.plannerForm.valid) {
      this.plannerService.savePlanner(planner).subscribe(
        (response) => {
          this.ngOnInit()
          this.plannerForm.reset()
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


  plannerForm: FormGroup

  public initForm() {
    this.plannerForm = this.formBuilder.group({
      message: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    })
  }

  get errorControl() {
    return this.plannerForm.controls;
  }

  planners: Planner[]

  getPlannerApi() {
    this.plannerService.getAllPlanner().subscribe(
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


}
