import { Component } from '@angular/core';

import { ModalService } from './modal.service';
import { CompanyModalService } from './company.modal.service';


@Component({
    selector: 'companies-served-component',
    templateUrl: './companies.served.component.html',
    styles: [`
        .company_logos {
            margin: 15%;
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
            cursor: pointer;
        }
        .align-center{
            text-align: center;
        }
    `]
})
export class CompaniesServedComponent {
    images;
    selectedImage
    folder;

    constructor( private modalService: ModalService, private companyModalService: CompanyModalService ){}

    openModal(fileName){
        this.folder = fileName
        this.companyModalService.getImages(fileName)
            .subscribe(
                (images) => {
                    this.images = images
                    this.selectedImage = this.images[0]
                    this.modalService.open('company-modal');
                }
            )
    }

    closeModal(){
        this.modalService.close('company-modal');
    }
}
