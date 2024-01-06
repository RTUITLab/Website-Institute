import { NextResponse } from 'next/server';
import dataGetVika from '@/app/vika/api/dataGet';

export async function GET(request: Request) {
  return NextResponse.json(await dataGetVika(), { status: 200 });
}
