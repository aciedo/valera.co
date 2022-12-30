import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
 
export const load = (async ({ platform }) => {
  let api;

  if (platform) {
    api = platform.env.API.fetch
  } else {
    api = fetch
  }

  const start = Date.now();
  const post = await api("https://api.valera.co/test")
  const lat = Date.now() - start;

  return {
    status: post.status,
    text: await post.text(),
    lat
  };
 
}) satisfies PageServerLoad;