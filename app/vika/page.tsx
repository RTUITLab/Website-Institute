import BuilderPages, { PropsBuilderPages } from '@/builderPages';
import getRequest from '@/apiLogic/getRequest';

export default async function PageVika() {
  const data: PropsBuilderPages = await getRequest('http://localhost:3000/vika/api', 'route');
  return BuilderPages(data, 'vika');
}
