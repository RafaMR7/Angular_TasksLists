import { Component} from '@angular/core'
import {FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})

class Tasks {

    titleButton = "Save";
    titleButtonList = "Reset";

    formTasks = new FormGroup({
        task: new FormControl('', [Validators.required]),
    })

    allTasks: Array<string> = [];

    get task() {
        return this.formTasks.get('task');
    }
  
    save () {

        if (!this.formTasks.invalid) {
            this.allTasks.push(this.formTasks.value.task);
        }
    }

    clear () {
        this.allTasks = []
    }
}

export { Tasks }