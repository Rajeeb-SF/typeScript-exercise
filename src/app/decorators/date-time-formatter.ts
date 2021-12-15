import * as moment from 'moment';

export function DateFormatter(target: string) {
  return moment(target).format('YYYY-MM-DD') as typeof target;
}
