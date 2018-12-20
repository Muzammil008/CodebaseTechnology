import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the SafePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(url) {
    console.log(this.sanitizer.bypassSecurityTrustResourceUrl(url))
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
