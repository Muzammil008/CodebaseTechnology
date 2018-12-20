import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocmailPage } from './docmail';

@NgModule({
  declarations: [
    DocmailPage,
  ],
  imports: [
    IonicPageModule.forChild(DocmailPage),
  ],
})
export class DocmailPageModule {}
