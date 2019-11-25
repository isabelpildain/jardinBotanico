import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileTransfer} from '@ionic-native/file-transfer/ngx';

import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {

  constructor(private platform:Platform, private file:File, private transfer:FileTransfer, 
    private fileOpener:FileOpener, private document:DocumentViewer, private iab: InAppBrowser) { 

    }

  ngOnInit() {
  }

  openLocalPdf(){

    let url=encodeURIComponent('http://www.posgrado.unam.mx/filosofiadelaciencia/media/uploaded_files/2012/04/guia_digit_conacyt.pdf');
    this.iab.create('https://docs.google.com/viewer?url='+url);

    
  }



  openUrl(){
   
    this.iab.create('https://yofasele.sirv.com/Images/jardinbotanico/Portafolios_digitales_JBM_2019_/politicas_Jardin_botanico2.pdf','_self')
  }



  

  // downloadAndOpenPdf(){

  //   let path=null;
  //   if (this.platform.is('android') || this.platform.is('ios')) {
  //     path=this.file.documentsDirectory;
  //   }else {
  //     path=this.file.dataDirectory;

  //   }

  //   const transfer=this.transfer.create();
  //   transfer.download('https://drive.google.com/open?id=1s9baxdtV0oWByFkKF33uDUtS5lTsa9wh',path+'myfile.pdf').then(entry=>{
  //     let url=entry.toURL();
  //     this.document.viewDocument(url,'application/pdf',{});

  //   });
    

  // }

}
