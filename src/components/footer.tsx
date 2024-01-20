import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/facebook';
import 'react-social-icons/instagram';
import 'react-social-icons/twitter';
import 'react-social-icons/youtube';

import { FooterNav } from '@/components/footerNav';
import getCategories from '@/services/get-categories';

export const Footer = async () => {
  const categories = await getCategories();

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="flex h-[480px] w-full flex-col bg-[#454E53] p-10">
        <div className="flex h-full w-full flex-row">
          <FooterNav data={categories} />
        </div>
        <div className="flex justify-center">
          <SocialIcon url="https://www.facebook.com" bgColor="none" />
          <SocialIcon url="https://www.instagram.com" bgColor="none" />
          <SocialIcon url="https://www.twitter.com" bgColor="none" />
          <SocialIcon url="https://www.youtube.com" bgColor="none" />
        </div>
      </div>
      <div className="flex h-14 w-full items-center justify-center bg-[#055A5B] text-white">
        <p className="text-sm">
          © {currentYear}, JS Furniture. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
