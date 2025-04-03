const { ApplicationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeUpdate(event) {
    try {
      // Get the data being updated
      const { data } = event.params;
      console.log(data)
      // Check if we have homePage data with faqSection
      if (data.homePage && data.homePage.faqSection) {
        // For each faqSection item
        data.homePage.faqSection.forEach((section, index) => {
          // Check mainHeading array length
          if (section.mainHeading && Array.isArray(section.mainHeading) && section.mainHeading.length > 2) {
            throw new ApplicationError(
              `The mainHeading array in faqSection item ${index + 1} cannot have more than 2 entries.`
            );
          }
          
          // Check faqAccordion array length
          if (section.faqAccordion && Array.isArray(section.faqAccordion) && section.faqAccordion.length > 5) {
            throw new ApplicationError(
              `The faqAccordion array in faqSection item ${index + 1} cannot have more than 5 entries.`
            );
          }
        });
      }
    } catch (error) {
      throw error;
    }
  }
};