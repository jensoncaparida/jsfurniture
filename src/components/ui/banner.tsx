import Image from 'next/image';

interface BannerProps {
  title: string;
  imageUrl: string;
}

export const Banner: React.FC<BannerProps> = ({ title, imageUrl }) => {
  return (
    <>
      <div
        className={`relative flex h-[250px] w-full items-center justify-center${imageUrl ? '' : ' bg-gray-300'}`}
      >
        <Image
          src={imageUrl}
          alt="All products banner"
          fill
          style={{
            objectFit: 'cover',
          }}
          className="brightness-50"
        />
        <h3
          className="absolute text-3xl uppercase text-white"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          {title}
        </h3>
      </div>
    </>
  );
};
