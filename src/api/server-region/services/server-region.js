'use strict';

/**
 * server-region service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::server-region.server-region');
