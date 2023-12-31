import dataGet090304 from './dataGet';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(await dataGet090304(), { status: 200 });
}
