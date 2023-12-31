import getMegalaboratory from '@/apiLogic/getMegalaboratory';
import BuilderPages, { PropsBuilderPages } from '@/builderPages';

export default async function Megalaboratory({ params }: { params: { megalaboratory: string } }) {
  const data: PropsBuilderPages = await getMegalaboratory(params.megalaboratory, 'route');

  return BuilderPages(data, params.megalaboratory);
}
