import { Component, Input } from '@angular/core';


@Component({
    selector: 'right-blog-link',
    templateUrl: './right.blog.link.component.html'
})
export class RightBlogLinkComponent{
    @Input() postIndex
    @Input() posts
}
