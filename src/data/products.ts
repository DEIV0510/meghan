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

// Apparel — Vie-Riche (línea americana confirmada en el dossier de marca)
import tracksuitBlackRed from '../assets/apparel/vieriche-tracksuit-black-red.webp'
import tracksuitNavyOrange from '../assets/apparel/vieriche-tracksuit-navy-orange.webp'
import tracksuitBurgundy from '../assets/apparel/vieriche-tracksuit-burgundy.webp'
import setBlackWhite from '../assets/apparel/vieriche-set-black-white.webp'
import setGreyPinkFront from '../assets/apparel/vieriche-set-grey-pink-front.webp'
import setGreyPinkBack from '../assets/apparel/vieriche-set-grey-pink-back.webp'
import setGreenFront from '../assets/apparel/vieriche-set-green-front.webp'
import setGreenBack from '../assets/apparel/vieriche-set-green-back.webp'
import setBluePinkFront from '../assets/apparel/vieriche-set-blue-pink-front.webp'
import setBluePinkBack from '../assets/apparel/vieriche-set-blue-pink-back.webp'
import trackLightblueBack from '../assets/apparel/riche-worldwide-track-lightblue-back.webp'
import trackTealA from '../assets/apparel/riche-worldwide-track-teal-a.webp'
import trackTealB from '../assets/apparel/riche-worldwide-track-teal-b.webp'
import trackGreyBack from '../assets/apparel/riche-worldwide-track-grey-back.webp'
import trackGreyFront from '../assets/apparel/riche-worldwide-track-grey-front.webp'
import campShirtTeal from '../assets/apparel/vieriche-camp-shirt-teal.webp'
import setFlatlayTeal from '../assets/apparel/vieriche-set-flatlay-teal.webp'
import setFlatlayBeige from '../assets/apparel/vieriche-set-flatlay-beige.webp'
import jacketGreen from '../assets/apparel/riche-worldwide-jacket-green.webp'
import jacketNavy from '../assets/apparel/riche-worldwide-jacket-navy.webp'
import jacketRed from '../assets/apparel/riche-worldwide-jacket-red.webp'
import teeFlatlay from '../assets/apparel/riche-worldwide-tee-flatlay.webp'
import jerseyBlackRed from '../assets/apparel/riche-jersey-black-red.webp'
import poloWingGraphic from '../assets/apparel/vieriche-polo-wing-graphic.webp'
import jerseyWhiteBlue from '../assets/apparel/riche-jersey-white-blue.webp'

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

export const APPAREL: Product[] = [
  { id: 'tracksuit-black-red', name: 'Vie-Riche · Tracksuit Black/Red', image: tracksuitBlackRed, tag: 'Vie-Riche' },
  { id: 'tracksuit-navy-orange', name: 'Vie-Riche · Tracksuit Navy/Orange', image: tracksuitNavyOrange, tag: 'Vie-Riche' },
  { id: 'tracksuit-burgundy', name: 'Vie-Riche · Tracksuit Burgundy', image: tracksuitBurgundy, tag: 'Vie-Riche' },
  { id: 'set-black-white', name: 'Vie-Riche · Set Black/White', image: setBlackWhite, tag: 'Vie-Riche' },
  { id: 'set-grey-pink-front', name: 'Vie-Riche · Set Grey/Pink', image: setGreyPinkFront, tag: 'Vie-Riche' },
  { id: 'set-grey-pink-back', name: 'Vie-Riche · Set Grey/Pink', image: setGreyPinkBack, tag: 'Vie-Riche' },
  { id: 'set-green-front', name: 'Vie-Riche · Set Green', image: setGreenFront, tag: 'Vie-Riche' },
  { id: 'set-green-back', name: 'Vie-Riche · Set Green', image: setGreenBack, tag: 'Vie-Riche' },
  { id: 'set-blue-pink-front', name: 'Vie-Riche · Set Blue/Pink', image: setBluePinkFront, tag: 'Vie-Riche' },
  { id: 'set-blue-pink-back', name: 'Vie-Riche · Set Blue/Pink', image: setBluePinkBack, tag: 'Vie-Riche' },
  { id: 'track-lightblue-back', name: 'Riche Worldwide · Track Light Blue', image: trackLightblueBack, tag: 'Riche Worldwide' },
  { id: 'track-teal-a', name: 'Riche Worldwide · Track Teal', image: trackTealA, tag: 'Riche Worldwide' },
  { id: 'track-teal-b', name: 'Riche Worldwide · Track Teal', image: trackTealB, tag: 'Riche Worldwide' },
  { id: 'track-grey-back', name: 'Riche Worldwide · Track Grey', image: trackGreyBack, tag: 'Riche Worldwide' },
  { id: 'track-grey-front', name: 'Riche Worldwide · Track Grey', image: trackGreyFront, tag: 'Riche Worldwide' },
  { id: 'camp-shirt-teal', name: 'Vie-Riche · Camp Shirt Teal', image: campShirtTeal, tag: 'Vie-Riche' },
  { id: 'set-flatlay-teal', name: 'Vie-Riche · Set Teal', image: setFlatlayTeal, tag: 'Vie-Riche' },
  { id: 'set-flatlay-beige', name: 'Vie-Riche · Set Beige', image: setFlatlayBeige, tag: 'Vie-Riche' },
  { id: 'jacket-green', name: 'Riche Worldwide · Jacket Green', image: jacketGreen, tag: 'Riche Worldwide' },
  { id: 'jacket-navy', name: 'Riche Worldwide · Jacket Navy', image: jacketNavy, tag: 'Riche Worldwide' },
  { id: 'jacket-red', name: 'Riche Worldwide · Jacket Red', image: jacketRed, tag: 'Riche Worldwide' },
  { id: 'tee-flatlay', name: 'Riche Worldwide · Tee', image: teeFlatlay, tag: 'Riche Worldwide' },
  { id: 'jersey-black-red', name: 'Riche · Jersey Black/Red', image: jerseyBlackRed, tag: 'Riche' },
  { id: 'polo-wing-graphic', name: 'Vieriche Estate · Polo', image: poloWingGraphic, tag: 'Vieriche Estate' },
  { id: 'jersey-white-blue', name: 'Riche · Jersey White/Blue', image: jerseyWhiteBlue, tag: 'Riche' },
]
