import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';




import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewshightlightPage } from '../pages/newshightlight/newshightlight';
import { CommunicatorProvider } from '../providers/communicator/communicator';
import { SafePipe } from '../pipes/safe/safe';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ContactusPage } from '../pages/contactus/contactus';
import { ContactreachedPage } from '../pages/contactreached/contactreached';
import { FormsModule }   from '@angular/forms';
import { ResourcesPage } from '../pages/resources/resources';
import { DocumentlistPage } from '../pages/documentlist/documentlist';
import { DocumentpreviewPage } from '../pages/documentpreview/documentpreview';
import { DocmailPage } from '../pages/docmail/docmail';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewshightlightPage,
    ContactusPage,
    ContactreachedPage,
    ResourcesPage,
    DocumentlistPage,
    DocumentpreviewPage,
    DocmailPage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,HttpClientModule,
    FormsModule,
    PdfViewerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewshightlightPage,
    ContactusPage,
    ContactreachedPage,
    ResourcesPage,
    DocumentlistPage,
    DocumentpreviewPage,
    DocmailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Transfer, TransferObject ,
    File,FileTransfer,DocumentViewer,
    AndroidPermissions,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommunicatorProvider
  ]
})
export class AppModule {}
