import { NextResponse } from 'next/server';
import dataGetApp from '@/app/api/dataGet';
export async function GET(request: Request) {
  return NextResponse.json(await dataGetApp(), { status: 200 });
}
