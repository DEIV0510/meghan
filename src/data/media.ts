export interface ClipMeta {
  id: string
  src: string
  poster: string
  width: number
  height: number
}

function clip(id: string, width: number, height: number): ClipMeta {
  return {
    id,
    src: `/videos/${id}.mp4`,
    poster: `/posters/${id}.jpg`,
    width,
    height,
  }
}

export const CLIPS = {
  heroHorseHallway: clip('hero-horse-hallway', 576, 1024),
  transitionCarBlur: clip('transition-car-blur', 576, 1024),
  transitionHorseLegs: clip('transition-horse-legs', 720, 1280),
  modaGraffitiWalk: clip('moda-graffiti-walk', 576, 1024),
  modaStoneSit: clip('moda-stone-sit', 576, 1024),
  calzadoSneakerWall: clip('calzado-sneaker-wall', 576, 1024),
  showroomHallwayWalk: clip('showroom-hallway-walk', 576, 864),
  showroomLounge: clip('showroom-lounge', 576, 1024),
  archivePoloReveal: clip('archive-polo-reveal', 576, 1024),
  archiveBikePalms: clip('archive-bike-palms', 576, 1024),
} as const
