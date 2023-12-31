import BuilderPages, { PropsBuilderPages } from '@/builderPages';
import getDirection from '@/apiLogic/getDirection';

export default async function Direction({ params }: { params: { direction: string } }) {
  const data: PropsBuilderPages = await getDirection(params.direction, 'route');

  return BuilderPages(data, params.direction);
}
