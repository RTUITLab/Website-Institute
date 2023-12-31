import dataGetDirections from '@/app/directions/api/dataGet';
import dataGetEquipment from '@/app/equipment/api/dataGet';
import dataGetInfrastructure from '@/app/infrastructure/api/dataGet';
import dataGetInstitute from '@/app/institute/api/dataGet';
import dataGetApp from '@/app/api/dataGet';

export default async function getRequest(url: string, mode: 'default' | 'route' = 'default') {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    switch (mode) {
      case 'route':
        switch (url) {
          case 'http://localhost:3000/directions/api':
            return await dataGetDirections();
          case 'http://localhost:3000/infrastructure/api':
            return await dataGetInfrastructure();
          case 'http://localhost:3000/equipment/api':
            return await dataGetEquipment();
          case 'http://localhost:3000/institute/api':
            return await dataGetInstitute();
          case 'http://localhost:3000/api':
            return await dataGetApp();
          default:
            throw e;
        }
      case 'default':
      default:
        throw e;
    }
  }
}
