export async function ballsPut(parent, args, contextValue, info) {
  const ans = await contextValue.prisma.balls.findMany({
    where: { matchId: parent.id },
  });
  return ans;
}
