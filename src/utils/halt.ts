export async function halt(delay = 0) {
  await new Promise((res) => setTimeout(() => res(true), delay));
  return;
}
