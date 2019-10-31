import {Component, OnInit} from '@angular/core';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner/ngx';

@Component({
    selector: 'app-plantas-scanner',
    templateUrl: './plantas-scanner.page.html',
    styleUrls: ['./plantas-scanner.page.scss'],
})
export class PlantasScannerPage implements OnInit {

    public scanSubscription: any;

    constructor(private qrScanner: QRScanner) {
        this.scan();
    }

    ngOnInit() {
    }

    scan() {
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    this.qrScanner.show();
                    this.showCamera();
                    this.scanSubscription = this.qrScanner.scan().subscribe((text: string) => {
                        console.log(text);
                    });
                } else {
                    console.error('Permission Denied', status);
                }
            })
            .catch((e: any) => {
                console.error('Error', e);
            });
    }

    stopScanning() {
      // tslint:disable-next-line:no-unused-expression
        (this.scanSubscription) ? this.scanSubscription.unsubscribe() : null;
        this.scanSubscription = null;
        (window.document.querySelector('app-plantas-scanner') as HTMLElement).classList.remove('cameraView');
        this.qrScanner.hide();
        this.hideCamera();
        this.qrScanner.destroy();
    }

    ionViewWillEnter() {
        this.scan();
    }

    ionViewWillLeave() {
        this.stopScanning();
    }

    showCamera() {
        (window.document.querySelector('app-plantas-scanner') as HTMLElement).classList.add('cameraView');
        console.log((window.document.querySelector('app-plantas-scanner') as HTMLElement));
    }

    hideCamera() {
        (window.document.querySelector('app-plantas-scanner') as HTMLElement).classList.remove('cameraView');
        console.log((window.document.querySelector('app-plantas-scanner') as HTMLElement));
    }

}
