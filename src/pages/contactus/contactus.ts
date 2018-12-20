import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { CommunicatorProvider } from '../../providers/communicator/communicator';
import { ContactreachedPage } from '../contactreached/contactreached';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  constructor(private emailComposer: EmailComposer, private toastCtrl: ToastController, private communicator: CommunicatorProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }
  submitContactForm(formData) {

   
    let email = {
      to: formData.value.email,

      cc: 'muzammilahmed973@gmail.com',

      subject: formData.value.subject,
      body: formData.value.message,
      isHtml: true
    };
    this.emailComposer.open(email);

    console.log(formData.value)


    //UnComment when Api is Ready for this method.
    /* this.communicator.PostDataNoAuthenticate("", "", formData).subscribe((res: any) => {
       console.log(res);
       
     }, err => {
       console.log(err);
     }, () => {
       console.log("Data Post Success!");
     })*/

    formData.form.reset();
    //  let toast = this.toastCtrl.create({
    //   message: 'Thank you for reaching out for us!',
    //   duration: 3000,
    //   position: 'bottom'
    // });

    // toast.onDidDismiss(() => {
    //   console.log('Dismissed toast');
    //   this.navCtrl.push(ContactreachedPage);
    // });

    // toast.present();



  }



}
