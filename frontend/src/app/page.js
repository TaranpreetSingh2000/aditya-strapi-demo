import { FAQAccordion } from "@/components/FAQAccordion";
import QASlider from "@/components/QASlider/QASlider";
import StepsToWealth from "@/components/StepsToWealth/StepsToWealth";
import { fetchHomePageData } from "@/services/homepage.service";
import _get from 'lodash/get';

export default async function Home() {
  const homepageData = await fetchHomePageData();
  const faqSectionData = _get(homepageData, 'homePage.faqSection',[])
  const sliderSectionData = _get(homepageData, 'homePage.recentSection',{})  
  // const StepsToWealthData = _get(homepageData, 'homePage.recentSection

  console.log("homepageData", homepageData);
  return (
    <>
    <QASlider sliderSectionData={sliderSectionData}/>
    <FAQAccordion faqSectionData={faqSectionData}/>
    <StepsToWealth stepsToWealthData={homepageData.homePage.roadmapSection}/>
    </>
  );
}
