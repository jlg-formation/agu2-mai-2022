import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  transform(value: unknown, maxLength = 10): string {
    if (typeof value !== 'string') {
      throw new Error('value must be a string.');
    }
    return value.length > maxLength
      ? value.substring(0, maxLength) + '...'
      : value;
  }
}
