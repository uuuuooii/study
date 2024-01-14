import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/db';
import Post from '@/lib/db/schema';

export const GET = async () => {
  try {
    await connect();

    const blogs = await Post.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse('server error', { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const newPost = new Post(body);
  try {
    await connect();

    await newPost.save();

    return new NextResponse('post has been created', {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error(err);
    return new NextResponse('Database Error', { status: 500 });
  }
};
