import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTimeFormat'
})
export class CustomTimeFormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value: string): string {
    const today = new Date();
    const timeParts = value.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    today.setHours(hours, minutes);

    return this.datePipe.transform(today, 'h:mm a');
  }
}
