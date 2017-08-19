import { Component, Input } from '@angular/core';


@Component({
    selector: 'left-blog-link',
    templateUrl: './left.blog.link.component.html'
})
export class LeftBlogLinkComponent{
    @Input() postIndex
    @Input() posts
}
