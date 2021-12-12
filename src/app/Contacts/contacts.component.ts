import { Component} from '@angular/core'
import {FormGroup, FormControl, Validators } from '@angular/forms'

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
    selector: 'contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})

class Contacts {

    titleButton = "Save";
    titleButtonContacts = "Reset";

    formContacts = new FormGroup({
        name: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        additionalAdress: new FormControl('', [Validators.required]),
        neighborhood: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required]),
    })

    allContacts: Array<ContactType> = [];

    get contact() {
        return this.formContacts.get('contact');
    }
  
    save () {

        if (!this.formContacts.invalid) {
            let obj = {
                name: "Name: " + this.formContacts.value.name + ";",
                phone: "Phone: " + this.formContacts.value.phone + ";",
                street: "Street: " + this.formContacts.value.street + ";",
                additionalAdress: "Additional Adress: " + this.formContacts.value.additionalAdress + ";",
                neighborhood: "Neighborhood: " + this.formContacts.value.neighborhood + ";",
                city: "City: " + this.formContacts.value.city + ";",
                zipCode: "Zip Code: " + this.formContacts.value.zipCode + ".",
            }
            this.allContacts.push(obj);
        }
    }

    clear () {
        this.allContacts = []
    }
}

export { Contacts }