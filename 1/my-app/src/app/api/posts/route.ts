import { NextResponse } from 'next/server';
import connect from '@/lib/db';
import Post from '@/lib/db/schema';

export const GET = async () => {
  try {
    await connect();

    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('database error', { status: 500 });
  }
};

export const POST = async () => {};
