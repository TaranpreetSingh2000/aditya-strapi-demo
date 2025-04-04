const FooterNote = ({footerNoteData}) => {
  
  return (
    <div className="py-3 md:py-6 px-4 lg:px-20 md:px-10 bg-[#c91429]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <p className="text-[#AEB0B3] font-semibold max-md:text-xs tracking-tight">
          {footerNoteData?.copyRightText}
        </p>
        <div className="md:flex hidden gap-5 items-center">
          {footerNoteData.socialMedia.length>0 && footerNoteData.socialMedia.map((item,index)=>(
          <span key={index}>
          <img src={process.env.NEXT_PUBLIC_API_URL + item.socialIcon[0].url} />
          </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterNote;
