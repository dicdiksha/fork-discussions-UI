import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeFilterPipe } from './pipe-filter/pipe-filter.pipe';
import { SortByPipe } from './sort-by/sort-by.pipe';
import { PipeRelativeTimePipe } from './pipe-relative-time/pipe-relative-time.pipe';
import { SplitInitialsPipe } from './split-initials/split-initials.pipe';



@NgModule({
  declarations: [PipeFilterPipe, SortByPipe, PipeRelativeTimePipe, SplitInitialsPipe],
  imports: [
    CommonModule
  ],
  exports: [PipeFilterPipe, SortByPipe, PipeRelativeTimePipe, SplitInitialsPipe]
})
export class PipesModule { }
