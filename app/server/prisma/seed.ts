import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { username: 'alice' },
    update: {},
    create: {
      username: 'alice',
      password: '$2b$10$i2RvlG/PUh8Yvl37oeFb3udWVznoduXayYvW1YXyYTlP7ltAri1cK',
      avatar: 'http://localhost:3000/static/avatar-1.png',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: 'bob' },
    update: {},
    create: {
      username: 'bob',
      password: '$2b$10$i2RvlG/PUh8Yvl37oeFb3udWVznoduXayYvW1YXyYTlP7ltAri1cK',
      avatar: 'http://localhost:3000/static/avatar-2.png',
    },
  });

  const user3 = await prisma.user.upsert({
    where: { username: 'charlie' },
    update: {},
    create: {
      username: 'charlie',
      password: '$2b$10$i2RvlG/PUh8Yvl37oeFb3udWVznoduXayYvW1YXyYTlP7ltAri1cK',
      avatar: 'http://localhost:3000/static/avatar-3.png',
    },
  });

  const user4 = await prisma.user.upsert({
    where: { username: 'diana' },
    update: {},
    create: {
      username: 'diana',
      password: '$2b$10$i2RvlG/PUh8Yvl37oeFb3udWVznoduXayYvW1YXyYTlP7ltAri1cK',
      avatar: 'http://localhost:3000/static/avatar-4.png',
    },
  });

  const article1 = await prisma.article.create({
    data: {
      title: 'Alice Article #1',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: 'http://localhost:3000/static/cover-1.jpg',
      author: {
        connect: { id: user1.id },
      },
    },
  });

  const article1a = await prisma.article.create({
    data: {
      title: 'Alice Article #2',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: 'http://localhost:3000/static/cover-2.jpg',
      author: {
        connect: { id: user1.id },
      },
    },
  });

  const article2 = await prisma.article.create({
    data: {
      title: 'Bob Article #1',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: 'http://localhost:3000/static/cover-2.jpg',
      author: {
        connect: { id: user2.id },
      },
    },
  });

  const article2a = await prisma.article.create({
    data: {
      title: 'Bob Article #2',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: 'http://localhost:3000/static/cover-3.jpg',
      author: {
        connect: { id: user2.id },
      },
    },
  });

  const article3 = await prisma.article.create({
    data: {
      title: 'Charlie Article #1',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: 'http://localhost:3000/static/cover-3.jpg',
      author: {
        connect: { id: user3.id },
      },
    },
  });

  const article3a = await prisma.article.create({
    data: {
      title: 'Charlie Article #2',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: 'http://localhost:3000/static/cover-4.jpg',
      author: {
        connect: { id: user3.id },
      },
    },
  });

  const article4 = await prisma.article.create({
    data: {
      title: 'Diana Article #1',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: 'http://localhost:3000/static/cover-4.jpg',
      author: {
        connect: { id: user4.id },
      },
    },
  });

  const article4a = await prisma.article.create({
    data: {
      title: 'Diana Article #2',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      image: 'http://localhost:3000/static/cover-1.jpg',
      author: {
        connect: { id: user4.id },
      },
    },
  });

  await prisma.like.create({
    data: {
      user: {
        connect: { id: user1.id },
      },
      article: {
        connect: { id: article2.id },
      },
    },
  });

  await prisma.like.create({
    data: {
      user: {
        connect: { id: user1.id },
      },
      article: {
        connect: { id: article3.id },
      },
    },
  });

  await prisma.like.create({
    data: {
      user: {
        connect: { id: user2.id },
      },
      article: {
        connect: { id: article3.id },
      },
    },
  });

  await prisma.like.create({
    data: {
      user: {
        connect: { id: user2.id },
      },
      article: {
        connect: { id: article4.id },
      },
    },
  });

  await prisma.like.create({
    data: {
      user: {
        connect: { id: user3.id },
      },
      article: {
        connect: { id: article4.id },
      },
    },
  });

  await prisma.like.create({
    data: {
      user: {
        connect: { id: user4.id },
      },
      article: {
        connect: { id: article1.id },
      },
    },
  });

  await prisma.comment.create({
    data: {
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: {
        connect: { id: user1.id },
      },
      article: {
        connect: { id: article2.id },
      },
    },
  });

  await prisma.comment.create({
    data: {
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: {
        connect: { id: user1.id },
      },
      article: {
        connect: { id: article3.id },
      },
    },
  });

  await prisma.comment.create({
    data: {
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: {
        connect: { id: user2.id },
      },
      article: {
        connect: { id: article3.id },
      },
    },
  });

  await prisma.comment.create({
    data: {
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: {
        connect: { id: user2.id },
      },
      article: {
        connect: { id: article4.id },
      },
    },
  });

  await prisma.comment.create({
    data: {
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: {
        connect: { id: user3.id },
      },
      article: {
        connect: { id: article4.id },
      },
    },
  });

  await prisma.comment.create({
    data: {
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: {
        connect: { id: user4.id },
      },
      article: {
        connect: { id: article1.id },
      },
    },
  });

  console.log('Users, articles, comments and likes created successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
