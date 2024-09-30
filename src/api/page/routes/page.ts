'use strict';

/**
 * page router.
 */

import {factories} from '@strapi/strapi';

module.exports = factories.createCoreRouter('api::page.page', {
    config: {
        find: {
            middlewares: ["api::page.page-populate-middleware"]
        },
        findOne: {
            middlewares: ["api::page.page-populate-middleware"]
        },
    }
});