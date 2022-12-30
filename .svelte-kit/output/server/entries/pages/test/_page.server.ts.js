import { e as error } from "../../../chunks/index2.js";
const load = async ({ params, platform }) => {
  platform.env;
  const post = await getPostFromDatabase(params.slug);
  if (post) {
    return post;
  }
  throw error(404, "Not found");
};
export {
  load
};
