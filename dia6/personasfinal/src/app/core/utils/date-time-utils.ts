import {MatDateFormats} from '@angular/material/core/typings/datetime/date-formats';

export class DateTimeUtils {
  public static readonly MAT_CUSTOM_DATE_FORMATS: MatDateFormats = {
    parse: {
      dateInput: 'YYYY-MM-DD',
    },
    display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };
}