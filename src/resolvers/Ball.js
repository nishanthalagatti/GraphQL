export async function matchPlayed(parent, args, contextValue, info) {
  const ans = await contextValue.prisma.matches.findUnique({
    where: { id: parent.matchId },
  });
  return ans;
}
