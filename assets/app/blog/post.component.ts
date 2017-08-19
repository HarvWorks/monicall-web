import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { BlogService } from "./blog.service"
import { LeftBlogLinkComponent } from "./left.blog.link.component"
import { RightBlogLinkComponent } from "./right.blog.link.component"

@Component({
    selector: 'post-page',
    templateUrl: './post.component.html',
    providers: [BlogService]
})
export class PostComponent implements OnInit{
    posts
    postIndex
    constructor( private route: ActivatedRoute, private blogService: BlogService ) {
        this.route.params.subscribe( params => this.postIndex = parseInt(params.id) );
    }

    ngOnInit() {
        this.blogService.getPosts()
            .subscribe(
                    (posts) => {
                        this.posts = posts
                    }
                )
    }
}
