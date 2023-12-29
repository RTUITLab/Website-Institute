import getRequest from '@/apiLogic/getRequest';
import BuilderPages, { PropsBuilderPages } from '@/builderPages';

export default async function Directions() {
  const data: PropsBuilderPages = await getRequest('http://localhost:3000/directions/api');

  return BuilderPages(data, 'directions');
}
