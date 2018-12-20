import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentpreviewPage } from '../documentpreview/documentpreview';


/**
 * Generated class for the DocumentlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documentlist',
  templateUrl: 'documentlist.html',
})
export class DocumentlistPage {
  private docList: any = [];
  private resoucesCategory:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.docList = this.navParams.data.doc;
    this.resoucesCategory=this.navParams.data.resourceCategory;
    console.log(this.docList)
   
  }

  ionViewDidLoad() {

  }
  gotodocView(doc){
    console.log([doc])
    this.navCtrl.push(DocumentpreviewPage, {doc:[doc],resourceCategory:  this.resoucesCategory})
  }

}
