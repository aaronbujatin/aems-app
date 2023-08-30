import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
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

  constructor(private formBuilder: FormBuilder, private plannerService: PlannerService) {

  }
  ngOnInit() {

    this.getPlannerApi()


  }

  date: string = ''
  time: string = ''

  formData = this.formBuilder.group({
    todo: ['', Validators.required],
    location: ['', Validators.required],
    date: [''],
    time: [''],
  })

  onSubmit() {
    console.log(this.formData.value);

    const selectedDate = this.formData.get('date').value;
    const selectedTime = this.formData.get('time').value;

    console.log(selectedDate + " " + selectedTime);

  }
  buttonClick() {
    console.log("Button clicked");

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
    this.formData.get('time').setValue(this.time);
    console.log(this.time);

  }

  dateChanged(value) {
    this.date = value.split('T')[0];
    this.formData.get('date').setValue(this.date);
    console.log(this.date);
  }

  staticTime = "14:30"




}
