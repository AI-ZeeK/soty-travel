import { CiGrid42, CiUser } from "react-icons/ci";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoLogoInstagram, IoWalletOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "IoLogoInstagram":
      return <IoLogoInstagram fontSize={18} />;
    case "FaYoutube":
      return <FaYoutube fontSize={18} />;
    case "FaFacebook":
      return <FaFacebook fontSize={18} />;
    case "FaTwitter":
      return <FaTwitter fontSize={18} />;
    case "CiGrid42":
      return <CiGrid42 fontSize={24} />;
    case "CiUser":
      return <CiUser fontSize={24} />;
    case "MdOutlineLocalShipping":
      return <MdOutlineLocalShipping fontSize={24} />;
    case "IoWalletOutline":
      return <IoWalletOutline fontSize={24} />;
    case "IoIosLogOut":
      return <IoIosLogOut fontSize={24} />;

    default:
      return null;
  }
};

export interface SocialAccount {
  id: string;
  link: string;
  icon: string;
  subnav?: any[];
}
export interface AccountNavTypes {
  id: string;
  head: string;
  link: string;
  icon: string;
}

export interface NavTypes {
  id: string;
  head: string;
  link: string;
}

export interface footerTypes {
  id: string;
  head: string;
  links: linkTypes[];
}
export interface linkTypes {
  id: string;
  desc: string;
  link: string;
}
export interface ItemTypes {
  id: string;
  desc: string;
  img: string;
  img_2: string;
  img_3: string;
  img_4: string;
  price: number;
  refNo: string;
  favourite: boolean;
}
export interface Categories {
  id: string;
  head: string;
  type: string;
  category: ItemTypes[];
  state: boolean;
}
export interface PaymentOptions {
  id: string;
  head: string;
  checked: boolean;
  charges: string;
}

export const footerData: footerTypes[] = [
  {
    id: "LMK26P",
    head: "About",
    links: [
      {
        id: `RST98H`,
        desc: "Bonus program",
        link: "/bonus-program",
      },
      {
        id: `XST98H`,
        desc: "Gift cards",
        link: "/gift-cards",
      },
      {
        id: `ZST98H`,
        desc: "Credit and payment",
        link: "/credit-and-payment",
      },
      {
        id: `RPT98H`,
        desc: "Service contracts",
        link: "/service-contracts",
      },
      {
        id: `RPB88H`,
        desc: "Non-cash account",
        link: "/non-cash-accounts",
      },
      {
        id: `RPA98H`,
        desc: "Payment",
        link: "/payments",
      },
    ],
  },

  {
    id: "QWE72M",
    head: "Company",
    links: [
      {
        id: `RST98H`,
        desc: "Find an order",
        link: "/find-order",
      },
      {
        id: `XST98H`,
        desc: "Terms of delivery",
        link: "/terms-of-delivery",
      },
      {
        id: `ZST98H`,
        desc: "Login",
        link: "/auth",
      },
      {
        id: `RST10H`,
        desc: "Guarantee",
        link: "/guarantee",
      },
      {
        id: `XST73H`,
        desc: "Frequently asked questions",
        link: "/faq",
      },
      {
        id: `SOT98H`,
        desc: "Login",
        link: "Terms of use of the site",
      },
    ],
  },
];

export const navData: NavTypes[] = [
  {
    id: "LMK26P",
    head: "Home",
    link: "/",
  },
  {
    id: "XST98H",
    head: "About us",
    link: "/about",
  },
  {
    id: "QWE72M",
    head: "Destination",
    link: "/destination",
  },
  {
    id: "KQR71K",
    head: "Pages",
    link: "/pages",
  },
  {
    id: "KLP59J",
    head: "Contact Us",
    link: "/contact",
  },
];

export const isUser = true;
