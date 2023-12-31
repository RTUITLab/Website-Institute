import dataGet010304 from '@/app/directions/api/01-03-04/dataGet';
import dataGet090301 from '@/app/directions/api/09-03-01/dataGet';
import dataGet090303 from '@/app/directions/api/09-03-03/dataGet';
import dataGet090304 from '@/app/directions/api/09-03-04/dataGet';
import dataGet010404 from '@/app/directions/api/01-04-04/dataGet';
import dataGet090401 from '@/app/directions/api/09-04-01/dataGet';
import dataGet090403 from '@/app/directions/api/09-04-03/dataGet';
import dataGet090404 from '@/app/directions/api/09-04-04/dataGet';

export default async function getDirection(title: string, mode: 'default' | 'route' = 'default') {
  try {
    const response = await fetch('http://localhost:3000/directions/api/' + title);
    return await response.json();
  } catch (e) {
    switch (mode) {
      case 'route':
        switch (title) {
          case '01-03-04':
            return await dataGet010304();
          case '09-03-01':
            return await dataGet090301();
          case '09-03-03':
            return await dataGet090303();
          case '09-03-04':
            return await dataGet090304();
          case '01-04-04':
            return await dataGet010404();
          case '09-04-01':
            return await dataGet090401();
          case '09-04-03':
            return await dataGet090403();
          case '09-04-04':
            return await dataGet090404();
          default:
            throw e;
        }
      case 'default':
      default:
        throw e;
    }
  }
}
