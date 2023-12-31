import { NextResponse } from 'next/server';
import dataGetLISOIT from '@/app/infrastructure/api/laboratory_import_substitution_of_information_technologies/dataGet';

export async function GET(request: Request) {
  return NextResponse.json(await dataGetLISOIT(), { status: 200 });
}
