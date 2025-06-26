import {
    Pixelify_Sans, 
    Meie_Script, 
    Orbitron, 
    UnifrakturMaguntia, 
    Space_Mono, 
    Fira_Code,
    Knewave,
    Slackside_One,
    Noto_Serif
} from "next/font/google";

export const pixelify = Pixelify_Sans({
  weight: "400",
  subsets: ["latin"],
});

const knewave = Knewave({
    weight: "400",
    subsets: ["latin"]
});

const slackside = Slackside_One({
    weight: "400",
    subsets: ["latin"]
});

const noto = Noto_Serif({
    weight: "400",
    subsets: ["latin"]
});

const meie = Meie_Script({
    weight: "400",
    subsets: ["latin"]
});

const spacemono = Space_Mono({
    weight: "400",
    subsets: ["latin"]
});

const orbitron = Orbitron({
    weight: "400",
    subsets: ["latin"]
});

const maguntia = UnifrakturMaguntia({
    weight: "400",
    subsets: ["latin"]
});

const firacode = Fira_Code({
    weight: "400",
    subsets: ["latin"]
})

export const animation_fonts = [
    pixelify.className, 
    meie.className, 
    spacemono.className,
    knewave.className,
    orbitron.className,
    noto.className,
    maguntia.className,
    firacode.className,
    slackside.className,
];