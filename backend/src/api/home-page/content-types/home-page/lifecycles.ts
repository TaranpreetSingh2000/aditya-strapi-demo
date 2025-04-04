const { ApplicationError: HomePageApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeUpdate(event: any) {
    const { where } = event.params;

    // Ensure an ID is provided
    if (!where?.id) {
      throw new HomePageApplicationError("Invalid update request: Missing entry ID.");
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

    console.log("Existing FAQ Entry:", existingFaqSectionEntry);

    if (!existingFaqSectionEntry || !existingFaqSectionEntry.faqSection) {
      throw new HomePageApplicationError("Error: faqSection not found in the entry.");
    }

    // Define the max allowed entries for faqAccordion
    const MAX_FAQ_ITEMS = 8;

    // Validate the faqAccordion array length
    for (const [
      index,
      section,
    ] of existingFaqSectionEntry.faqSection.entries()) {
      if (section?.faqAccordion?.length > MAX_FAQ_ITEMS) {
        throw new HomePageApplicationError(
          `Error: faqAccordion in section ${index + 1} cannot have more than ${MAX_FAQ_ITEMS} entries.`
        );
      }
    }
  },
};
