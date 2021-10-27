import dayjs from 'dayjs';

require('dayjs/locale/pl');

export const formatDate = date => {
  return dayjs(date).locale('pl').format('D MMMM YYYY');
};
