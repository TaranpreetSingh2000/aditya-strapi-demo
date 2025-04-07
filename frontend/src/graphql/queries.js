import { gql } from "@apollo/client";

const GET_HEADER_DATA = gql`
  query Header {
    header {
      logo {
        url
        alternativeText
      }
      nav {
        title
        url
        openInNewTab
      }
      cta {
        title
      }
    }
  }
`;

const GET_HOMEPAGE_DATA = gql`
  query HomePage {
    homePage {
      recentSection {
        title
        recentSlider {
          sliderHeading
          sliderDescription
        }
        cta {
          title
        }
      }
      faqSection {
        faqHeading {
          mainHeading {
            heading
            color
            breakLine
          }
          mainHeading2 {
            heading
            color
            breakLine
          }
          mainHeading3 {
            heading
            color
            breakLine
          }
        }
        faqAccordion {
          heading
          description
        }
      }
    }
  }
`;

const GET_FOOTER_DATA = gql`
  query Footer {
    footer {
      disclaimer {
        heading
        description
      }
    }
    footerNote {
      copyRightText
      socialMedia {
        socialIcon {
          url
        }
      }
    }
  }
`;
export { GET_HEADER_DATA, GET_FOOTER_DATA, GET_HOMEPAGE_DATA };
