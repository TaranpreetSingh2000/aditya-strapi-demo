// const { ApplicationError: testPageApplicationError } =
//   require("@strapi/utils").errors;

// module.exports = {
//   async beforeUpdate(event: any) {
//     try {
//       const { data } = event.params;

//       const impactNewsIds = data.impactNews?.map((item: any) => item.id) || [];

//       if (impactNewsIds.length !== 2) {
//         throw new testPageApplicationError(
//           "Impact News section must contain exactly 2 entries."
//         );
//       }

//       // Fetch full impact news entries with all nested fields populated
//     const fullImpactNews = await strapi.entityService.findMany(
//       "api::test.test",
//       {
//         populate: {
//           impactNews: {
//             populate: "*",
//           },
//         },
//       }
//     ) as any;


//       console.log("Full Impact News Entries:", fullImpactNews);

//       // Now validate inner content of each impact news item
//       for (const news of fullImpactNews) {
//         // Replace 'your_inner_field' with the actual key inside impact news, like 'newsItems'
//         if (
//           !news.newsItems ||
//           !Array.isArray(news.newsItems) ||
//           news.newsItems.length === 0
//         ) {
//           throw new testPageApplicationError(
//             "Each Impact News item must have at least one news item filled."
//           );
//         }
//       }

//     } catch (error) {
//       strapi.log.error("Error validating Impact News section:", error);
//       throw new testPageApplicationError(
//         "Impact News section validation failed."
//       );
//     }
//   },
// };
