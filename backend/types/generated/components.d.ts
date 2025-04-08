import type { Schema, Struct } from '@strapi/strapi';

export interface AccordianAccordion extends Struct.ComponentSchema {
  collectionName: 'components_accordian_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ActionButtonActionButton extends Struct.ComponentSchema {
  collectionName: 'components_action_button_action_buttons';
  info: {
    displayName: 'Action Button';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CtaButtonCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_button_cta_buttons';
  info: {
    displayName: 'CTA Button';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    faqAccordion: Schema.Attribute.Component<'accordian.accordion', true>;
    faqHeading: Schema.Attribute.Component<
      'section-heading.section-heading',
      false
    >;
  };
}

export interface ImpactNewsWithImageImpactNewsWithImage
  extends Struct.ComponentSchema {
  collectionName: 'components_impact_news_with_image_impact_news_with_images';
  info: {
    displayName: 'Impact news with Image';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    timeline: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImpactNewsWithoutImageImpactNewsWithoutImage
  extends Struct.ComponentSchema {
  collectionName: 'components_impact_news_without_image_impact_news_without_images';
  info: {
    displayName: 'Impact news without Image';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    tag: Schema.Attribute.String;
    timeline: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImpactNewsImpactNews extends Struct.ComponentSchema {
  collectionName: 'components_impact_news_impact_news';
  info: {
    description: '';
    displayName: 'Impact News';
  };
  attributes: {
    newsWithImage: Schema.Attribute.Component<
      'impact-news-with-image.impact-news-with-image',
      false
    > &
      Schema.Attribute.Required;
    newsWithoutImage: Schema.Attribute.Component<
      'impact-news-without-image.impact-news-without-image',
      false
    > &
      Schema.Attribute.Required;
    newsWithoutImage2: Schema.Attribute.Component<
      'impact-news-without-image.impact-news-without-image',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    description: '';
    displayName: 'Menu';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionHeadingSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_section_heading_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    mainHeading: Schema.Attribute.Component<
      'style-heading.style-heading',
      false
    >;
    mainHeading2: Schema.Attribute.Component<
      'style-heading.style-heading',
      false
    >;
    mainHeading3: Schema.Attribute.Component<
      'style-heading.style-heading',
      false
    >;
  };
}

export interface SliderSlider extends Struct.ComponentSchema {
  collectionName: 'components_slider_sliders';
  info: {
    description: '';
    displayName: 'Slider';
  };
  attributes: {
    sliderDescription: Schema.Attribute.Text;
    sliderHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SocialMediaSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_social_media_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    socialIcon: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required;
    socialMediaUrl: Schema.Attribute.String;
  };
}

export interface StyleHeadingStyleHeading extends Struct.ComponentSchema {
  collectionName: 'components_style_heading_style_headings';
  info: {
    description: '';
    displayName: 'Style Heading';
  };
  attributes: {
    breakLine: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    color: Schema.Attribute.Enumeration<['Black', 'Red']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Black'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TitleTitle extends Struct.ComponentSchema {
  collectionName: 'components_title_titles';
  info: {
    description: '';
    displayName: 'title';
  };
  attributes: {
    cta: Schema.Attribute.Component<'action-button.action-button', false>;
    recentSlider: Schema.Attribute.Component<'slider.slider', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accordian.accordion': AccordianAccordion;
      'action-button.action-button': ActionButtonActionButton;
      'cta-button.cta-button': CtaButtonCtaButton;
      'faq.faq': FaqFaq;
      'impact-news-with-image.impact-news-with-image': ImpactNewsWithImageImpactNewsWithImage;
      'impact-news-without-image.impact-news-without-image': ImpactNewsWithoutImageImpactNewsWithoutImage;
      'impact-news.impact-news': ImpactNewsImpactNews;
      'menu.menu': MenuMenu;
      'section-heading.section-heading': SectionHeadingSectionHeading;
      'slider.slider': SliderSlider;
      'social-media.social-media': SocialMediaSocialMedia;
      'style-heading.style-heading': StyleHeadingStyleHeading;
      'title.title': TitleTitle;
    }
  }
}
