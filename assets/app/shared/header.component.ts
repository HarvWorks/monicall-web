import { Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
        @media (min-width: 992px){
            .nav-icon {
                margin: 5px 15px;
                width: 70px;
            }
        }
        @media (max-width: 991px){
            .nav-icon {
                margin: 2px 10px;
                width: 40px;
            }
        }
        @media (max-width: 991px){
            .black {
                background: black;
            }
        }
    `]
})
export class HeaderComponent implements OnInit {
    collapse = "collapse"
    background = ""

    ngOnInit() {
        this.resized()
    }

    menuClick() {
        if ( this.collapse == "collapse" ){
            this.collapse = "in"
            this.background = "black"
        } else {
            this.collapse = "collapse"
            this.background = ""
        }
    }

    resized() {
        window.addEventListener("resize", function() {
            if ( this.collapse != "collapse" ){
                if ( window.innerWidth > 991 ){
                    this.collapse = "collapse"
                    this.background = ""
                }
            }
        }.bind(this))
    }
}
