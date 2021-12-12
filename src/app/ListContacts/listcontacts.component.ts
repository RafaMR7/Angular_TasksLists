import {Component, Input} from '@angular/core'

type ContactType = {
    name: String,
    phone: String,
    street: String,
    additionalAdress: String,
    neighborhood: String,
    city: String,
    zipCode: String
}



@Component({
    selector: 'listcontacts',
    templateUrl: './listcontacts.component.html',
    styleUrls: ['./listcontacts.component.scss']
})

class ListContacts {
    @Input() titleList = 'Contatos';
    @Input() dataList: Array<ContactType> = [];
}
export {ListContacts}