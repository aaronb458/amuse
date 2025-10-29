import { auth } from '@/auth';

export async function createTRPCContext() {
  const session = await auth();

  return {
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
