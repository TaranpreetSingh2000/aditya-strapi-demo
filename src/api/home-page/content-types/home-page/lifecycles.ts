const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeUpdate(event: any) {
    const { where } = event.params;

    // Ensure an ID is provided
    if (!where?.id) {
      throw new ApplicationError("Invalid update request: Missing entry ID.");
    }

    // Fetch the full record with populated faqSection
    const existingFaqSectionEntry = (await strapi.entityService.findOne(
      "api::home-page.home-page",
      where.id,
      {
        populate: {
          faqSection: {
            populate: "*",
          },
        },
      }
    )) as any;
    const existingRecentSectionEntry = (await strapi.entityService.findOne(
      "api::home-page.home-page",
      where.id,
      {
        populate: {
          recentSection: {
            populate: "*",
          },
        },
      }
    )) as any;

    console.log("Existing FAQ Entry:", existingFaqSectionEntry);
    console.log("Existing Recent Entry:", existingRecentSectionEntry);


    if (!existingFaqSectionEntry || !existingFaqSectionEntry.faqSection) {
      throw new ApplicationError("Error: faqSection not found in the entry.");
    }

    // Define the max allowed entries for faqAccordion
    const MAX_FAQ_ITEMS = 8;

    // Validate the faqAccordion array length
    for (const [index, section] of existingFaqSectionEntry.faqSection.entries()) {
      if (section?.faqAccordion?.length > MAX_FAQ_ITEMS) {
        throw new ApplicationError(
          `Error: faqAccordion in section ${index + 1} cannot have more than ${MAX_FAQ_ITEMS} entries.`
        );
      }
    }
  },
};
