import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { CommunicatorProvider } from '../../providers/communicator/communicator';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { DomSanitizer } from '@angular/platform-browser';
import { ContactusPage } from '../contactus/contactus';
import { ResourcesPage } from '../resources/resources';
import { DocumentlistPage } from '../documentlist/documentlist';
import { DocumentpreviewPage } from '../documentpreview/documentpreview';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * 
import { ContactusPage } from '../contactus/contactus';
 * Generated class for the NewshightlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newshightlight',
  templateUrl: 'newshightlight.html',
})
export class NewshightlightPage {
  private newsHiglight: any = [];
  private resourcesCategory: any = [];
  @ViewChild(Navbar) navBar: Navbar;
  constructor(private nativePageTransitions: NativePageTransitions, private sanitizer: DomSanitizer, private iab: InAppBrowser, private communicator: CommunicatorProvider, public navCtrl: NavController, public navParams: NavParams) {
console.log(Math.floor(Math.random() * (999999 - 100000)) + 100000);
  }

  ionViewDidLoad() {

    this.navBar.backButtonClick = (e: UIEvent) => {
      // todo something
      this.nativePageTransitions.fade(null);
      this.navCtrl.pop();
    }
    this.screenLoadData();

  }
  screenLoadData() {
    this.communicator.getDataNoAuthenticate("./assets/JSON/newhighlights.json").subscribe((res: any) => {
      console.log(res)
      this.newsHiglight = res;
    }, err => {
      console.log(err)
    }, () => {
      console.log("Data loaded!")
    })



    this.communicator.getDataNoAuthenticate("./assets/JSON/resources.json").subscribe((res: any) => {
      console.log(res)
      this.resourcesCategory = res;
    }, err => {
      console.log(err)
    }, () => {
      console.log("Data loaded!")
    })
  }
  contactus() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.push(ContactusPage)
  }
  gotoWebsite(link) {
    const browser = this.iab.create(link);
  }
  gotoResources() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };

    this.nativePageTransitions.flip(options);
    this.navCtrl.push(ResourcesPage)
  }


  gotodocListOrView(doc, resourceCategory) {
    console.log(doc);
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };

    this.nativePageTransitions.flip(options);
    if (doc.length > 1) {
      this.navCtrl.push(DocumentlistPage, { doc: doc, resourceCategory: resourceCategory })
    } else {
      this.navCtrl.push(DocumentpreviewPage, { doc: doc, resourceCategory: resourceCategory })
    }

  }



  flipPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    };

    this.nativePageTransitions.flip(options);
    this.navCtrl.push(ResourcesPage);
  }



}
