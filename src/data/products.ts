// Perfume imports
import odysseyMandarin from '../assets/perfume/odyssey-mandarin.webp'
import armafClubDeNuit from '../assets/perfume/armaf-club-de-nuit-intense.webp'
import zakatFire from '../assets/perfume/zakat-you-are-my-fire.webp'
import montaleSensual from '../assets/perfume/montale-sensual-instinct.webp'
import valentinoRoma from '../assets/perfume/valentino-born-in-roma.webp'
import fugazziPomegranoudh from '../assets/perfume/fugazzi-pomegranoudh.webp'
import fugazziSugarDaddy from '../assets/perfume/fugazzi-sugar-daddy.webp'
import blackoudOpulent from '../assets/perfume/blackoud-opulent.webp'
import blackoudAbyss from '../assets/perfume/blackoud-abyss.webp'
import leLaboSantal from '../assets/perfume/le-labo-santal-33.webp'
import leLaboBergamote from '../assets/perfume/le-labo-bergamote-22.webp'
import leLaboAnother from '../assets/perfume/le-labo-another-13.webp'
import bondTribeca from '../assets/perfume/bond-no9-tribeca.webp'
import creedSilver from '../assets/perfume/creed-silver-mountain-water.webp'
import creedAventus from '../assets/perfume/creed-aventus.webp'
import chBlack from '../assets/perfume/carolina-herrera-212-vip-black.webp'
import armafYumYum from '../assets/perfume/armaf-yum-yum.webp'
import zakatRed from '../assets/perfume/zakat-mosaic-red.webp'
import zakat25 from '../assets/perfume/zakat-25-green.webp'
import lattafaYara from '../assets/perfume/lattafa-yara.webp'
import armafSillage from '../assets/perfume/armaf-club-de-nuit-sillage.webp'

// Caps
import capBlack from '../assets/caps/dom-nomad-luxe-black.webp'
import capMaison from '../assets/caps/dom-apparel-maison.webp'
import capGold from '../assets/caps/dom-gold.webp'
import capGothic from '../assets/caps/dom-gothic-d.webp'
import capWhiteRed from '../assets/caps/dom-white-red.webp'
import capBlackout from '../assets/caps/dom-blackout.webp'
import capBlueWhite from '../assets/caps/dom-blue-white.webp'
import cap1997 from '../assets/caps/dom-apparel-1997.webp'

// Glasses
import glassesGoldBlue from '../assets/glasses/sunglasses-gold-blue.webp'
import glassesGoldClear from '../assets/glasses/sunglasses-gold-clear.webp'
import glassesNavy from '../assets/glasses/sunglasses-navy.webp'
import glassesBraid from '../assets/glasses/sunglasses-clear-braid.webp'
import glassesSimpleGold from '../assets/glasses/sunglasses-simple-gold.webp'
import glassesViolet from '../assets/glasses/sunglasses-violet.webp'
import glassesDetail from '../assets/glasses/sunglasses-detail.webp'

// Shoes
import shoeOffwhiteTop from '../assets/shoes/sneaker-offwhite-top.webp'
import shoeOffwhiteSole from '../assets/shoes/sneaker-offwhite-sole.webp'
import shoeOffwhiteProfile from '../assets/shoes/sneaker-offwhite-profile.webp'
import shoeWhiteBack from '../assets/shoes/sneaker-white-back.webp'
import shoeWhiteTop from '../assets/shoes/sneaker-white-top.webp'
import shoeWhiteAngle from '../assets/shoes/sneaker-white-angle.webp'

export interface Product {
  id: string
  name: string
  image: string
  tag?: string
}

export const PERFUMES: Product[] = [
  { id: 'creed-aventus', name: 'Creed · Aventus', image: creedAventus, tag: 'Icónico' },
  { id: 'blackoud-abyss', name: 'Blackoud · Abyss', image: blackoudAbyss },
  { id: 'bond-tribeca', name: 'Bond No. 9 · TriBeCa', image: bondTribeca },
  { id: 'creed-silver', name: 'Creed · Silver Mountain Water', image: creedSilver },
  { id: 'le-labo-santal', name: 'Le Labo · Santal 33', image: leLaboSantal, tag: 'Culto' },
  { id: 'le-labo-bergamote', name: 'Le Labo · Bergamote 22', image: leLaboBergamote },
  { id: 'le-labo-another', name: 'Le Labo · Another 13', image: leLaboAnother },
  { id: 'valentino-roma', name: 'Valentino · Born in Roma Intense', image: valentinoRoma },
  { id: 'ch-black', name: 'Carolina Herrera · 212 VIP Black', image: chBlack },
  { id: 'montale-sensual', name: 'Montale Paris · Sensual Instinct', image: montaleSensual },
  { id: 'blackoud-opulent', name: 'Blackoud · Opulent', image: blackoudOpulent },
  { id: 'armaf-club-nuit', name: 'Armaf · Club de Nuit Intense', image: armafClubDeNuit },
  { id: 'armaf-sillage', name: 'Armaf · Club de Nuit Sillage', image: armafSillage },
  { id: 'armaf-yum-yum', name: 'Armaf · Yum Yum', image: armafYumYum },
  { id: 'zakat-fire', name: 'Zakat · You Are My Fire', image: zakatFire },
  { id: 'zakat-red', name: 'Zakat · Colección Mosaico', image: zakatRed },
  { id: 'zakat-25', name: 'Zakat · 25', image: zakat25 },
  { id: 'lattafa-yara', name: 'Lattafa · Yara', image: lattafaYara },
  { id: 'odyssey-mandarin', name: 'Odyssey · Mandarin', image: odysseyMandarin },
  { id: 'fugazzi-pomegranoudh', name: 'Fugazzi · Pomegranoudh', image: fugazziPomegranoudh },
  { id: 'fugazzi-sugar-daddy', name: 'Fugazzi · Sugar Daddy', image: fugazziSugarDaddy },
]

export const CAPS: Product[] = [
  { id: 'cap-black', name: 'Dom Apparel · Nomad Luxe', image: capBlack },
  { id: 'cap-maison', name: 'Dom Apparel · Maison Éminence', image: capMaison },
  { id: 'cap-gold', name: 'Dom Apparel · Gold', image: capGold },
  { id: 'cap-gothic', name: 'Dom Apparel · Gothic D', image: capGothic },
  { id: 'cap-white-red', name: 'Dom Apparel · White/Red', image: capWhiteRed },
  { id: 'cap-blackout', name: 'Dom Apparel · Blackout', image: capBlackout },
  { id: 'cap-blue-white', name: 'Dom Apparel · Blue/White', image: capBlueWhite },
  { id: 'cap-1997', name: 'Dom Apparel · 1997', image: cap1997 },
]

export const GLASSES: Product[] = [
  { id: 'glasses-gold-blue', name: 'Montura dorada · Azul', image: glassesGoldBlue },
  { id: 'glasses-gold-clear', name: 'Montura dorada · Cristal', image: glassesGoldClear },
  { id: 'glasses-navy', name: 'Montura dorada · Navy', image: glassesNavy },
  { id: 'glasses-braid', name: 'Montura trenzada · Cristal', image: glassesBraid },
  { id: 'glasses-simple-gold', name: 'Montura dorada · Clásica', image: glassesSimpleGold },
  { id: 'glasses-violet', name: 'Montura facetada · Violeta', image: glassesViolet },
  { id: 'glasses-detail', name: 'Detalle de bisagra', image: glassesDetail },
]

export const SHOES: Product[] = [
  { id: 'shoe-offwhite-top', name: 'Off-White · Trail Runner', image: shoeOffwhiteTop },
  { id: 'shoe-offwhite-sole', name: 'Off-White · Trail Runner', image: shoeOffwhiteSole },
  { id: 'shoe-offwhite-profile', name: 'Off-White · Trail Runner', image: shoeOffwhiteProfile },
  { id: 'shoe-white-back', name: 'Sneaker de colección', image: shoeWhiteBack },
  { id: 'shoe-white-top', name: 'Sneaker de colección', image: shoeWhiteTop },
  { id: 'shoe-white-angle', name: 'Sneaker de colección', image: shoeWhiteAngle },
]
