export async function addMatch(parent, args, contextValue, info) {
  const match = await contextValue.prisma.matches.create({
    data: {
      ...args,
    },
  });
  return match;
}

export async function addBall(parent, args, contextValue, info) {
  const ball = await contextValue.prisma.balls.create({
    data: {
      ...args,
    },
  });
  return ball;
}
