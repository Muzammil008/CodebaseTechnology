import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { DocmailPage } from '../docmail/docmail';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

declare var cordova: any;
/**
 * Generated class for the DocumentpreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documentpreview',
  templateUrl: 'documentpreview.html',
})
export class DocumentpreviewPage {
  public doclink: string;
  ScriptUrl: any;
  url: string;
  zoom_to: any = 0.5;
  categoryName: string;
  resoucesCategory: any;
  constructor(private nativePageTransitions: NativePageTransitions, private alertCtrl: AlertController, private trf: Transfer, private androidPermissions: AndroidPermissions, private platform: Platform, private file: File, private transfer: FileTransfer, private sanitizer: DomSanitizer, private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {

    this.resoucesCategory = this.navParams.data.resourceCategory;
    console.log(this.resoucesCategory)
  }
  zoom_in() {
    this.zoom_to = this.zoom_to + 0.25;
  }

  zoom_out() {
    console.log(this.zoom_to)
    if (this.zoom_to > 0.5) {
      this.zoom_to = this.zoom_to - 0.25;
    }
  }

  ionViewDidLoad() {

    this.categoryName = this.navParams.data.resourceCategory
    this.doclink = this.navParams.data.doc[0].docLink;
    console.log(this.doclink)
    console.log(this.navParams.data.resourceCategory)
    this.ScriptUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://4gaccounts.com/software/phpcode/index-ios.html")
    console.log('ionViewDidLoad DocumentpreviewPage');
  }
  email() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };
    this.nativePageTransitions.curl(options);
    this.navCtrl.push(DocmailPage, { doc: this.navParams.data.doc, resourceCategory:this.navParams.data.resourceCategory })
  }

  openinAppBrowser() {
    const browser = this.iab.create('https://docs.google.com/viewer?url=' + this.doclink);
    browser.show();
  }


  downloadPdf() {
    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    }
    // let blobs = this.base64toBlob("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==", "image/png")
    // this.file.writeFile(this.file.dataDirectory, "my_downloaded_image", blobs, { replace: true });

    const fileTransfer: FileTransferObject = this.transfer.create();

    fileTransfer.download(this.doclink, this.file.externalDataDirectory + Math.floor(Math.random() * (999999 - 100000)) + 100000 + '-' + this.categoryName + ".pdf").then((entry) => {
      console.log('download complete: ' + entry.toURL());
      let alert = this.alertCtrl.create({
        title: 'Download PDF',
        subTitle: 'Your file has been downloaded!',
        buttons: ['OK']
      });
      alert.present();

    }, (error) => {

      // handle error
    });



  }






}
