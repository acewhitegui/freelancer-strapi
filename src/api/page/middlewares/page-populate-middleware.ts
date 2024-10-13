"use strict";

/**
 * `page-populate-middleware` middleware
 */
const populate = {
  contentSections: {
    on: {
      "sections.hero": {
        populate: "*",
      },
      "sections.features": {
        populate: "*",
      },
      "sections.bottom-actions": {
        populate: "*",
      },
      "sections.feature-columns-group": {
        populate: {
          features: {
            populate: "*",
          }
        },
      },
      "sections.feature-rows-group": {
        populate: {
          features: {
            populate: "*",
          }
        },
      },
      "sections.testimonials-group": {
        populate: {
          testimonials: {
            populate: "*",
          },
        },
      },
      "sections.large-video": {
        populate: "*",
      },
      "sections.rich-text": {
        populate: "*",
      },
      "sections.pricing": {
        populate: {
          plans: {
            populate: "*",
          },
        },
      },
      "sections.lead-form": {
        populate: "*",
      },
      "sections.heading": {
        populate: "*",
      },
    },
  },
  seo: {
    populate: "*",
  },
}

export default (config, {strapi}) => {
  // Add your own logic here.
  try {
    return async (ctx, next) => {
      ctx.query = {
        populate: populate,
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
