export async function getMatches(parent, args, contextValue, info) {
  const matches = await contextValue.prisma.matches.findMany();
  return matches;
}

export async function getBalls(parent, args, contextValue, info) {
  const balls = await contextValue.prisma.balls.findMany();
  return balls;
}
