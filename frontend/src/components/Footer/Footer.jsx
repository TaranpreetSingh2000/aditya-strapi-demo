import FooterDisclaimer from "./FooterDisclaimer";
import FooterNote from "./FooterNote";

const Footer = ({footerData}) => {
  
  return (
    <footer >
      <FooterDisclaimer footerDisclaimerData={footerData?.footer}/>
      <FooterNote footerNoteData={footerData?.footerNote}/>
    </footer>
  );
};

export default Footer;
