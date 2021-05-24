import { ListAscDescSortFilterPipe } from './pipes/list-columns-sort-filter.pipe';
import { TariffService } from './services/component-services/tariff.service';
import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSortComponent } from './components/list-sort/list-sort.component';

@NgModule({
  declarations: [ListSortComponent, ListAscDescSortFilterPipe],
  imports: [CommonModule],
  exports: [ListSortComponent, ListAscDescSortFilterPipe],
  providers: [DataService, TariffService],
})
export class SharedModule {}
