"use strict";

/**
 * `page-populate-middleware` middleware
 */

export default (config, {strapi}) => {
  // Add your own logic here.
  try {
    return async (ctx, next) => {
      ctx.query = {
        filters: {slug: ctx.query.filters.slug},
        locale: ctx.query.locale,
      };
      console.log("page-populate-middleware.js: ctx.query = ", ctx.query);
      return await next();
    };
  } catch (e) {
    console.error("ERROR to handle pate middleware, error info: ", e)
  }
};
