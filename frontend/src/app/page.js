import { FAQAccordion } from "@/components/FAQAccordion";
import QASlider from "@/components/QASlider/QASlider";
import { fetchHomePageData } from "@/services/homepage.service";
import _get from 'lodash/get';

export default async function Home() {
  const homepageData = await fetchHomePageData();
  const faqSectionData = _get(homepageData, 'homePage.faqSection',[])
  const sliderSectionData = _get(homepageData, 'homePage.recentSection',{})  
  
  console.log('faqSectionData', faqSectionData);
  return (
    <>
    <QASlider sliderSectionData={sliderSectionData}/>
    <FAQAccordion faqSectionData={faqSectionData}/>
    </>
  );
}
