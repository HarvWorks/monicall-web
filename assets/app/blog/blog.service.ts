import { Http } from "@angular/http"
import { Injectable } from "@angular/core"
import "rxjs/Rx"

@Injectable()
export class BlogService {
    posts

    constructor(private http: Http) {}

    getPosts() {
        return this.http.get('http://52.53.214.124/posts')
            .map((response) => {
                const tempData = response.json().data;
                let transformedPosts = []; //Adding the type Post made this work for some reason and stopped giving me Uncaught Error: Module build failed: Error: Final loader didn't return a Buffer or String
                for (let post of tempData ) {
                    if (!post.splash_img || post.splash_img.split(".").length < 2) {
                        post.splash_img = "/img/blog/sjstock.jpg";
                    }
                    transformedPosts.push(post);
                }
                this.posts = transformedPosts
                return transformedPosts;
            })
    }
}
