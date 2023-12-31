import BuilderPages, { PropsBuilderPages } from '@/builderPages';
import getRequest from '@/apiLogic/getRequest';

export default async function PageEquipment() {
  const data: PropsBuilderPages = await getRequest('http://localhost:3000/equipment/api', 'route');

  return BuilderPages(data, 'equipment');
}
