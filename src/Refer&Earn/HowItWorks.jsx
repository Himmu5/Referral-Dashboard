import Process from "./Process";

function HowItWorks() {
  return (
    <div className="px-9 mt-10 md:px-28">
      <div className="">
        <h1 className="text-3xl text-[#800080]">How does it work ?</h1>
        <div className="mt-5 md:flex flex-wrap gap-5 ">
          <Process
            path="/Vector.png"
            ExtraClass={"px-[12px]"}
            heading="Invite your Friends"
            para="Share the link tutedude.com with your friends"
          />
          <Process
            path="/Offer.png"
            heading="Friend purchases any course"
            para="Using you REFERRAL CODE in the payments page"
          />
          <Process
            path="/Discount.png"
            heading="You get ₹ 200 as referral money"
            para="Of total purchase the friend makes sharebale to your wallet"
          />
          <Process
            path="/Wallet.png"
            heading="Your Friend gets ₹ 200 Off "
            para="On his overall fee on successful purchase using your referral code "
          />
          <Process
            path="/Rupees.png"
            heading="Transfer money from wallet"
            para="When the wallet balance reaches
            ₹200 or more, you can withdraw it"
          />
        </div>

        <div className="flex flex-col space-y-3 my-10  text-[#800080]">
            <p>Friends Who Enrolled</p>
            <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
