import { NextResponse } from 'next/server';
import dataGetLIT from '@/app/infrastructure/api/laboratory_immersive_technologies/dataGet';

export async function GET(request: Request) {
  return NextResponse.json(await dataGetLIT(), { status: 200 });
}
