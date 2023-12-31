import dataGet090301 from './dataGet';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(await dataGet090301(), { status: 200 });
}
