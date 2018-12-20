import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CommunicatorProvider } from '../../providers/communicator/communicator';
import { EmailComposer } from '@ionic-native/email-composer';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  public document: any = [];
  public documentLink: any;
  resoucesCategory: any;
  htmlString: string = "Hello<br/><br/>Html"
  currentImage: any;
  constructor(private camera: Camera, private emailComposer: EmailComposer, private toastCtrl: ToastController, private communicator: CommunicatorProvider, public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data.doc[0].docLink)
    console.log(this.navParams.data.resourceCategory)

  }
  ionViewWillEnter() {
    this.resoucesCategory = this.navParams.data.resourceCategory;

    this.documentLink = this.navParams.data.doc[0].docLink;
    console.log(this.documentLink)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DocmailPage');
  }
  captureImage() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = imageData;
    }, (err) => {
      // Handle error
      console.log('Image error: ', err);
    });
  }
  mailDoc(formData) {
    this.document = this.navParams.data.doc;
    console.log(formData.value);
    console.log(this.documentLink);
    console.log(this.resoucesCategory)

    // let email = {
    //   to: formData.value.email,
    //   app: 'gmail',
    //   cc: '',
    //   attachments: [
    //     this.currentImage
    //   ],

    //   isHtml: true,
    //   subject: this.resoucesCategory,
    //   body:"<h1>Hello World</h1>"
    //   // body: '<html><body><a href="' + this.documentLink + '">OPEN PDF FILE</a> </body></html>',

    // };
    var bodyText = "Hey "+  formData.value.username +"! I Shared  you Document Link : " + this.documentLink;
    let email = {
      to: formData.value.email,
     
      cc: '',
     
      subject: this.resoucesCategory,
      body: bodyText,
      isHtml: true
    };
    this.emailComposer.open(email);

    formData.form.reset();

    // let toast = this.toastCtrl.create({
    //   message: 'Your document has been sent to your mail!',
    //   duration: 3000,
    //   position: 'bottom'
    // });

    // toast.onDidDismiss(() => {

    //   console.log('Dismissed toast');
    // });

    // toast.present();
    //formData.form.reset();

  }

}
