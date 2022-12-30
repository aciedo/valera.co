import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
 
export const load = (async ({ platform }) => {
  const API: Fetcher = platform.env.API;

  const post = await API.fetch("https://api.valera.co/test")
 
  return {
    status: post.status,
    text: await post.text()
  };
 
}) satisfies PageServerLoad;