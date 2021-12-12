import {Component, Input} from '@angular/core'





@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

class List {
    @Input() titleList = 'Tasks';
    @Input() dataList = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4', 'Tarefa 5']
}
export {List}