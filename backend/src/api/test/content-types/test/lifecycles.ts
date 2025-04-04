const { ApplicationError: testPageApplicationError } =
  require("@strapi/utils").errors;

module.exports = {
  async beforeUpdate(event: any) {
    try {
      // Get the data being updated
      const data = event.params.data;

      if (data.impactNews.length !== 2) {
        throw new testPageApplicationError(
          "Impact News Section must only contains exactly 6 entries."
        );
      }
    } catch (error) {
      strapi.log.error("Error enforcing component limit:", error);
      throw new testPageApplicationError(
        "Impact News Section must only contains exactly 6 entries."
      );
    }
  },
};
