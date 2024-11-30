import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phone: string): string {
    const phoneWithoutOtherSymbol  = ('' + phone).replace(/\D/g, '');
    const result = phoneWithoutOtherSymbol.match(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/);
    return result ? `+${result[1]} (${result[2]}) ${result[3]}-${result[4]}-${result[5]}`: phone;
    }
}
