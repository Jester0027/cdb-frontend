import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalAge'
})
export class AnimalAgePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const [ageNumber, ageUnit] = value.split(' ');
    let unit: string;
    switch (ageUnit) {
      case 'y':
        if (+ageNumber === 1) {
          unit = 'an';
        } else {
          unit = 'ans';
        }
        break;
      case 'm':
        unit = 'mois';
        break;
      default:
        unit = ageUnit;
    }
    return `${ageNumber} ${unit}`;
  }

}
