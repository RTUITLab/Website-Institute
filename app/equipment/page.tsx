import BuilderPages, { PropsBuilderPages } from '@/builderPages';
import getRequest from '@/apiLogic/getRequest';

export default async function PageEquipment() {
  const data: PropsBuilderPages = await getRequest('http://localhost:3000/equipment/api');

  return BuilderPages(data, 'equipment');
}
