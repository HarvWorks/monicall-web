import { Http } from "@angular/http"
import { Injectable } from "@angular/core"
import "rxjs/Rx"

@Injectable()
export class CompanyModalService {
    images
    constructor(private http: Http) {}

    getImages(folderName) {
        return this.http.get('http://52.53.214.124/clients/' + folderName)
            .map((response) => {
                const tempData = response.json().data;
                let transformedImages = []; //Adding the type Post made this work for some reason and stopped giving me Uncaught Error: Module build failed: Error: Final loader didn't return a Buffer or String
                for ( let image of tempData ){
                    if( image.match(/\.(jpe?g|png|gif)$/) ) {
                        transformedImages.push(image)
                    }
                }
                this.images = transformedImages
                return transformedImages;
            })
    }
}
