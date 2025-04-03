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

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    faqAccordion: Schema.Attribute.Component<'accordian.accordion', true>;
    loadMoreCta: Schema.Attribute.Component<
      'action-button.action-button',
      false
    >;
    mainHeading: Schema.Attribute.Component<
      'style-heading.style-heading',
      true
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
      'faq.faq': FaqFaq;
      'slider.slider': SliderSlider;
      'style-heading.style-heading': StyleHeadingStyleHeading;
      'title.title': TitleTitle;
    }
  }
}
