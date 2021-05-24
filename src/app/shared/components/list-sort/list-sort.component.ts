import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-list-sort',
  templateUrl: './list-sort.component.html',
  styleUrls: ['./list-sort.component.scss'],
})
export class ListSortComponent implements OnInit {
  @Input()
  sortListItems: string[] = [];
  @Output()
  getSortConditions = new EventEmitter();
  sortType: string[] = ['asc', 'desc'];
  showSortConditions: boolean = false;
  selectedCondition: string = '';
  selectedSortType: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.sortListItems.length > 0) {
      this.showSortConditions = true;
    }
  }

  setSortCondition(condition: string) {
    if (this.selectedCondition !== condition) {
      this.selectedCondition = condition;
      this.selectedSortType = 'asc';
    } else {
      if (this.selectedSortType === 'asc') {
        this.selectedSortType = 'desc';
      } else {
        this.selectedSortType = 'asc';
      }
    }

    this.getSortConditions.emit({
      value: this.selectedCondition,
      type: this.selectedSortType,
    });
  }
}
