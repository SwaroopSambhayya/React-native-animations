import Animated, {
  ZoomInRotate,
  Layout,
  SlideInRight,
  SlideOutRight,
  FadeInUp,
  FadeOutUp,
  StretchInX,
  LightSpeedInRight,
  LightSpeedOutRight,
  StretchOutX,
  RotateInUpLeft,
  RotateOutUpLeft,
  RollInLeft,
  ZoomOutRotate,
  BounceIn,
  PinwheelIn,
  BounceOut,
  FlipInYRight,
  FlipOutYRight,
  PinwheelOut,
  RollOutLeft,
} from "react-native-reanimated";
export default data = [
  {
    title: "EaseInEaseOut",
    name: "Superman",
    description:
      "Clark Joseph Kent, also known by his birth name Kal-El or superhero persona Superman, is a fictional character and a superhero in the DC Extended Universe series of films, based on the character of the same name created by Jerry Siegel and Joe Shuster.",
    image:
      "https://www.dccomics.com/sites/default/files/styles/comics320x485/public/Char_Thumb_Superman_5c3fc2758f6984.90100206.jpg?itok=esABWATU",
    entryType: null,
  },
  {
    title: "ZoomInRotate",
    name: "Batman",
    description:
      "In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.",
    image:
      "https://www.dccomics.com/sites/default/files/styles/comics320x485/public/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?itok=O3UVj2Np",
    entryType: ZoomInRotate,
    exitType: ZoomOutRotate,
  },
  {
    title: "SlideInRight",
    name: "Wonder Woman",
    description:
      "Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man's World.",
    image:
      "https://www.dccomics.com/sites/default/files/styles/whos_who/public/Char_WhosWho_WonderWoman_20190116_5c3fc6aa51d124.25659603.jpg?itok=5aBydSqj",
    entryType: SlideInRight,
    exitType: SlideOutRight,
  },
  {
    title: "FadeInUp",
    name: "Aquaman",
    description:
      "The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his tumultuous realm of the sea.",
    image:
      "https://www.dccomics.com/sites/default/files/styles/comics320x485/public/Char_Thumb_Aquaman_5c411a95e70ff5.50429372.jpg?itok=jQSdLKTj",
    entryType: FadeInUp,
    exitType: FadeOutUp,
  },
  {
    title: "BounceIn",
    name: "Green Lantern",
    description:
      "Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.",
    image:
      "https://www.dccomics.com/sites/default/files/HJFLC_Cv1_R3_gallery_57fc3635f2c6a2.45566872.jpg",
    entryType: BounceIn,
    exitType: BounceOut,
  },
  {
    title: "FlipInYRight",
    name: "The Flash",
    description:
      "The Flash has mastery over not just speed, but time itself, and he has often used his powers to travel though different eras and even into other dimensions.",
    image:
      "https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_FL23_6-7_52ab8f8d847397.15032461.jpg",
    entryType: FlipInYRight,
    exitType: FlipOutYRight,
  },
  {
    title: "StretchInX",
    name: "Cat Woman",
    description:
      "The Bat may be the king of the beasts of Gotham. But the Cat? The Cat is definitely the queen. Infamous burglar Selina Kyle is certainly one of the most iconic characters in the DC Universe",
    image:
      "https://www.dccomics.com/sites/default/files/styles/comics320x485/public/Char_Thumb_Catwoman_5c47c984ed1bf1.93808647.jpg?itok=tVEAGidr",
    entryType: StretchInX,
    exitType: StretchOutX,
  },
  {
    title: "LightSpeedInRight",
    name: "Captain Cold",
    description:
      "Armed with a sophisticated cold gun, Leonard Snart has been tangling with the Flash since his earliest days. The self-appointed leader of the Rogues, a loose band of criminals united in their hatred of the Scarlet Speedster, Captain Cold has consistently pitted his “absolute zero” against the Flash’s super-speed",
    image:
      "https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_captainCold_52ab9a0184c3a3.49779680.jpg",
    entryType: LightSpeedInRight,
    exitType: LightSpeedOutRight,
  },
  {
    title: "PinwheelIn",
    name: "Black Adam",
    description:
      "One of the world’s foremost wielders of magic, Black Adam has been both hero and villain over a life that’s spanned thousands of years.",
    image:
      "https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_blackadam_52ab963299f1c0.78977706.jpg",
    entryType: PinwheelIn,
    exitType: PinwheelOut,
  },
  {
    title: "RollInLeft",
    name: "Cyborg",
    description:
      "Part man, part machine, Vic Stone is a former member of the Teen Titans and a current member of the Justice League who wrestles to preserve his humanity with every new upgrade.",
    image:
      "https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_JL5_52ab71a32357c7.19695885.jpg",
    entryType: RollInLeft,
    exitType: RollOutLeft,
  },
  {
    title: "RotateInUpLeft",
    name: "Deathstroke",
    description:
      "A formidable operative for the U.S. military, Col. Slade Wilson agreed to undergo an experimental process that increased his mental and physical abilities to superhuman levels. Rather than continue his career as a soldier, Slade became the masked mercenary Deathstroke. ",
    image:
      "https://www.dccomics.com/sites/default/files/DSK_Cv31_var_5b899541440074.86650156.jpg",
    entryType: RotateInUpLeft,
    exitType: RotateOutUpLeft,
  },
];
