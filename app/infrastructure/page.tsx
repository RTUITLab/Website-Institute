import BuilderPages, { PropsBuilderPages } from '@/builderPages';
import getRequest from '@/apiLogic/getRequest';

export default async function Infrastructure() {
  const data: PropsBuilderPages = await getRequest('http://localhost:3000/infrastructure/api', 'route');

  return BuilderPages(data, 'infrastructure');
}
