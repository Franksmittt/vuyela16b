import { NextResponse } from 'next/server';

// Mock data - replace with your own data source
const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: 'Learn how to build modern web applications with Next.js...',
    excerpt: 'A comprehensive guide to getting started with Next.js',
    authorId: '1',
    author: {
      name: 'John Doe',
      image: null,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    coverImage: '/images/og.png',
    category: 'Technology',
    tags: ['nextjs', 'react', 'webdev'],
    readTime: 5,
    viewCount: 100,
    commentCount: 5,
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';
    const category = searchParams.get('category') || undefined;
    const sortBy = searchParams.get('sortBy') || 'newest';

    let filteredPosts = [...mockPosts];

    // Filter by query
    if (query) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category) {
      filteredPosts = filteredPosts.filter((post) => post.category === category);
    }

    // Sort
    if (sortBy === 'oldest') {
      filteredPosts.sort((a, b) => 
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    } else if (sortBy === 'popular') {
      filteredPosts.sort((a, b) => b.viewCount - a.viewCount);
    } else {
      // newest (default)
      filteredPosts.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return NextResponse.json(filteredPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

