import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
 
export const load = (async ({ platform }) => {
  let post;

  const start = Date.now();
  if (platform) {
    post = await platform.env.API.fetch("https://api.valera.co/test")
  } else {
    post = await fetch("https://api.valera.co/test")
  }
  const lat = Date.now() - start;

  return {
    status: post.status,
    text: await post.text(),
    lat
  };
 
}) satisfies PageServerLoad;