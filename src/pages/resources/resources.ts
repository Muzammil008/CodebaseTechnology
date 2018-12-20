import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams ,Navbar } from 'ionic-angular';
import { CommunicatorProvider } from '../../providers/communicator/communicator';
import { DocumentlistPage } from '../documentlist/documentlist';
import { DocumentpreviewPage } from '../documentpreview/documentpreview';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


/**
 * Generated class for the ResourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html',
})
export class ResourcesPage {
  private resourcesCategory: any = []
  @ViewChild(Navbar) navBar: Navbar;
  constructor(private nativePageTransitions: NativePageTransitions,private communicator: CommunicatorProvider, public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {

    this.navBar.backButtonClick = (e:UIEvent)=>{
      // todo something
      this.nativePageTransitions.fade(null);
      this.navCtrl.pop();
     }
    this.screenLoadData();
  }

  screenLoadData() {
    this.communicator.getDataNoAuthenticate("./assets/JSON/resources.json").subscribe((res: any) => {
      console.log(res)
      this.resourcesCategory = res;
    }, err => {
      console.log(err)
    }, () => {
      console.log("Data loaded!")
    })
  }
  gotodocListOrView(doc,resourceCategory) {
    console.log(doc);
    if (doc.length > 1) {
      this.navCtrl.push(DocumentlistPage, {doc:doc,resourceCategory:resourceCategory})
    } else {
     this.navCtrl.push(DocumentpreviewPage, {doc:doc,resourceCategory:resourceCategory})
    }

  }

}
