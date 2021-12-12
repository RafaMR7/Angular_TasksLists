import { Component } from "@angular/core";

@Component({
    selector: 'main-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

class Header {
    title:string ='Lists'
}

export {Header}