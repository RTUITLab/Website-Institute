import { NextResponse } from 'next/server';
import dataGetInfrastructure from '@/app/infrastructure/api/dataGet';

export async function GET(request: Request) {
  return NextResponse.json(await dataGetInfrastructure(), { status: 200 });
}
