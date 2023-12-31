import BuilderPages, { PropsBuilderPages } from '@/builderPages';
import getRequest from '@/apiLogic/getRequest';

export default async function PageInstitute() {
  const data: PropsBuilderPages = await getRequest('http://localhost:3000/institute/api', 'route');

  return BuilderPages(data, 'institute');
}
