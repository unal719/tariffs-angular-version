import { Component, OnInit } from '@angular/core';
import { Tariff } from 'src/app/shared/models/tariff.model';
import { TariffService } from 'src/app/shared/services/component-services/tariff.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss'],
})
export class TariffListComponent implements OnInit {
  tariffList: Tariff[] = [];
  listSortValues: string[] = ['download', 'upload', 'price', 'popularity'];
  sortKey: string = '';
  sortType: string = '';
  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.tariffService.loadTariffs().subscribe((res: Tariff[]) => {
      this.tariffList = [...res];
    });
  }

  setSortCondisitons(conditions) {
    this.sortKey = conditions?.value;
    this.sortType = conditions?.type;
  }
}
