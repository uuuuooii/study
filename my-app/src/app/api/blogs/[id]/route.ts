import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/db';
import Post from '@/lib/db/schema';

// eslint-disable-next-line import/prefer-default-export
export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  // 비록 함수 본문에서 명시적으로 사용되지 않을지라도 이는 함수 서명의 중요한 부분이며 Next.js API 라우트에서 필요한 부분입니다.
  const { id } = params;
  try {
    await connect();

    const blogs = await Post.findById(id);
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse('server error', { status: 500 });
  }
};
