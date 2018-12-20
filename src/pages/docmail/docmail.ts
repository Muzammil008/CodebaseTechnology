import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { CommunicatorProvider } from '../../providers/communicator/communicator';

/**
 * Generated class for the DocmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docmail',
  templateUrl: 'docmail.html',
})
export class DocmailPage {
public document:any=[];
  constructor(private toastCtrl: ToastController,private communicator:CommunicatorProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data.doc)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocmailPage');
  }
  mailDoc(formData) {
    this.document=this.navParams.data.doc;
    console.log(formData.value);
    console.log( this.document);
    formData.form.reset();
    let toast = this.toastCtrl.create({
      message: 'Your document has been sent to your mail!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
  
      console.log('Dismissed toast');
    });
  
    toast.present();


  }

}
