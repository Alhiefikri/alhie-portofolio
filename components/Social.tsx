import Link from "next/link";

import { FaGithub, FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";

const socials = [
  { icon: FaGithub, path: "https://github.com/alhiefikri" },
  { icon: FaLinkedin, path: "https://linkedin.com/alif-fikri" },
  { icon: FaFacebook, path: "https://facebook.com/alhiefikri" },
  { icon: FaTiktok, path: "https://tiktok.com/alhiefikri" },
];

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const Social = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            <item.icon />
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
