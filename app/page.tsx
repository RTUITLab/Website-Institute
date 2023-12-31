import BuilderPages, { PropsBuilderPages } from '@/builderPages';
import getRequest from '@/apiLogic/getRequest';

export default async function Home() {
  const data: PropsBuilderPages = await getRequest('http://localhost:3000/api', 'route');

  return BuilderPages(data, 'home');
}
