import dataGetDirections from './dataGet';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(await dataGetDirections(), { status: 200 });
}
