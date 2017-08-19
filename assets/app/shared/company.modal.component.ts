import { Component, Input } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
    selector: 'company-modal',
    templateUrl: './company.modal.component.html',
    styles: [`
        @media (min-height: 700px) and (min-width: 992px) {
            .modal-thumbnail {
                display:inline-block;
                width: 125px;
                height: 125px;
                overflow: hidden;
                cursor:pointer;
            }
            .thumbnailBackground {
                margin: 10px;
                height: 125px;
            }
            .thumbnailContainer {
                background-color: #373C42;
                text-align:center;
                width: 100%;
                height: 145px;
                margin-top: -145px;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;
            }
            .modal-top-div {
                width: 100%;
                height: 100%;
                padding-bottom: 145px;
            }
            .modal-picture-div {
                padding: 2%;
            }
        }
        @media (max-height: 699px), (max-width: 991px) {
            .modal-thumbnail {
                display:inline-block;
                width: 75px;
                height: 75px;
                overflow: hidden;
                cursor:pointer;
            }
            .thumbnailBackground {
                margin: 8px;
                height: 75px;
            }
            .thumbnailContainer {
                background-color: #373C42;
                text-align:center;
                width: 100%;
                height: 91px;
                margin-top: -91px;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;
            }
            .modal-top-div {
                width: 100%;
                height: 100%;
                padding-bottom: 91px;
            }
            .modal-picture-div {
                padding: 14px;
            }
        }
        @media (min-width: 992px){
            .close-icon {
                position: absolute;
                right: 0;
                margin: 10px;
                padding: 0 5px 2px;
                border: black solid 3px;
                border-radius: 10px;
                z-index: 100;
                background-color: white;
                cursor: pointer;
            }
            .close-icon:hover {
                opacity: 0.6;
            }
            .mobileClose {
                display: none;
            }
        }
        @media (max-width: 991px){
            .close-icon {
                display:none;
            }
            .mobileClose {
                display: block;
                background-color: black;
                color: white;
                height: 50px;
                text-align: center;
                line-height: 50px;
                cursor: pointer;
            }
            .modal-top-div {
                padding-bottom: 141px;
            }
            .thumbnailContainer {
                margin-top: -141px;
            }
        }
        @media screen and (min-aspect-ratio: 8/7){
            .modal-picture-div {
                width: 69%;
                height: 100%;
            }
            .modal-description-div {
                width: 30%;
                height: 100%;
                overflow-y: scroll;
            }
        }
        @media screen and (max-aspect-ratio: 8/7){
            .modal-picture-div {
                width: 100%;
                height: 50%;
            }
            .modal-description-div {
                width: 100%;
            }
            .modal-top-div {
                overflow-y: scroll;
            }
        }
        .thumbnailBackground {
            background-color: white;
            display: inline-block;
            width: auto;
        }
        .modal-thumbnail:hover {
            opacity: 0.6;
        }
        .modal-picture {
            height: 100%;
            width: 100%;
        }
        .modal-picture-div {
            margin: 0;
            display: inline-block;
        }
        .modal-description-div {
            margin: 0;
            display: inline-block;
            vertical-align: top;
            padding: 2%;
        }
        .modal-spacer-1 {
            height: 5%;
            min-height: 10px;
        }
        .modal-title {
            white-space: nowrap;
            overflow: hidden;
            font-size: 35px;
            height: 35px;
        }
        .modal-spacer-2 {
            min-height: 25px;
        }
        .modal-spacer-3 {
            min-height: 25px;
        }
        .modal-tech-title {
            font-size: 18px;
        }
        .modal-spacer-4 {
            min-height: 5px;
        }
        .modal-tech-list-item {
            display: inline-block;
            width: 50%;
            min-width: 150px;
        }
    `]
})
export class CompanyModalComponent{
    @Input() images
    @Input() folder
    @Input() selectedImage

    constructor( private modalService: ModalService ){}

    clickThumbnail(image) {
        console.log(image)
        this.selectedImage = image
    }
    closeModal(){
        this.modalService.close('company-modal');
    }

    modalText = {
        docusign: {
            Title: "Docusign",
            Text: "Docusign replaces printing, faxing, scanning and overnighting documents with the easiest and must trusted way to make every approval and decision digital. We worked on an integration with Docusign that would allow their clients to migrate to a paperless process saving them time and money.",
            Tech: ['Salesforce', 'Zapier', 'Typeform'],
        },
        EchoFine: {
            Title: "Echo Fine Properties",
            Text: "Echo Fine Properties is Illustrated properties' number one team in the northern Palm Beaches. We've helped them streamline their sales process by creating automations to save their agents time to help more families buy and sell their homes.",
            Tech: ['Salesforce', 'Zapier', 'Wordpress'],
        },
        Limelight: {
            Title: "Limelight",
            Text: "Limelight is a social app that allows users to source content from other users on a map. We were responsible for product management of their v1.0 and v2.0.",
            Tech: ['Objective-C', 'AWS', 'MySQL', 'Node.js'],
        },
        Veidt: {
            Title: "Legal and Compliance",
            Text: "Legal & Compliance, LLC is a comprehensive securities, reverse merger and corporate transactional law firm. We helped them create their website and affiliated sites to boost SEO rankings and help more clients.",
            Tech: ['Wordpress', 'AWS', 'MySQL'],
        },
        Evergreen: {
            Title: "Evergreen",
            Text: "Evergreen (renamed Anvyl) is a manufacturing platform that connects companies with the best suppliers in the world. We created their MVP and made the introductions to close their seed round.",
            Tech: ['MySQL', 'Express', 'Angular', 'Node.js'],
        },
        Techbridge: {
            Title: "Techbridge",
            Text: "Techbridge Girls is a non-profit that helps girls from low-income backgrounds pursue STEM-related careers. We helped them transition their operation to a paperless service allowing their operation to scale and reach more students.",
            Tech: ['Wordpress', 'Angular', 'Zapier', 'Salesforce'],
        },
        uVu: {
            Title: "uVu",
            Text: "The uVu is a web and mobile app that uses DMV information, biometrics, and facial recognition to provide the highest degree of onine identity verification. We helped them create their MVP for web and mobile.",
            Tech: ['React-Native', 'MySQL', 'Express', 'Angular2', 'Node.js'],
        },
        Catch: {
            Title: "Catch",
            Text: "Catch is a social app that allows you to create content around an event to be opened in the future like a digital time capsule.",
            Tech: ['React-Native', 'MySQL', 'Express', 'Node.js', 'Java', 'Swift']
        },
        Gucci: {
            Title: "Gucci",
            Text: "Gucci is the leader of the luxury market on a worldwide level. We worked with their charity arm Chime for Change to create a marketplace that allows employers to outsource work to refugee camps.",
            Tech: ['React-Native', 'MySQL', 'Express', 'Node.js']
        },
        Neutrino: {
            Title: "Neutrino",
            Text: "Neutrino is a web development agency that focuses on the luxury real estate market. We’ve developed luxury real-estate websites for their clients in the top US markets.",
            Tech: ['Angular2', 'Wordpress']
        },
        Teamsync: {
            Title: "TeamSync",
            Text: "Teamsync is a chrome extension that allows you to share bookmarks within a team so all of your resources are in one location. We developed a Slack integration that allows teams to add URLs to TeamSync from their Slack Channel.",
            Tech: ['Javascript', 'Firebase', 'Slack']
        },
        Foozool: {
            Title: "Foozool",
            Text: "Foozool is a cultural website that celebrates Iranian culture.",
            Tech: ['AMP', 'Angular4', 'MySQL']
        }
    }
}
