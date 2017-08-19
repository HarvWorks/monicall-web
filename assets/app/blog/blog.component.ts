import { Component, OnInit } from '@angular/core';

import { BlogService } from "./blog.service"
import { SummaryComponent } from "./summary.component"

@Component({
    selector: 'blog-page',
    templateUrl: './blog.component.html',
    providers: [BlogService]
})

export class BlogComponent implements OnInit{
    posts;
    constructor( private blogService: BlogService ) {}

    ngOnInit() {
        this.blogService.getPosts()
            .subscribe(
                (posts) => {
                    this.posts = posts
                }
            )
    }
}
