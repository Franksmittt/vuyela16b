export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  orientation: 'landscape' | 'portrait';
};

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/gallery-01.jpg',
    alt: 'Yellow wheel loader dumping bulk material in the Vuyela container yard',
    caption: 'Bulk handling on site',
    orientation: 'landscape',
  },
  {
    src: '/images/gallery/gallery-02.jpg',
    alt: 'Aerial view of the Vuyela logistics yard with shipping containers and stockpiles',
    caption: 'Elandsfontein yard — aerial',
    orientation: 'landscape',
  },
  {
    src: '/images/gallery/gallery-03.jpg',
    alt: 'Aerial overview of Vuyela facility showing containers, stockpiles, and heavy equipment',
    caption: 'Facility at full operation',
    orientation: 'landscape',
  },
  {
    src: '/images/gallery/gallery-04.jpg',
    alt: 'Forklift lifting a shipping container beside bulk stockpiles',
    caption: 'Container handling',
    orientation: 'landscape',
  },
  {
    src: '/images/gallery/gallery-05.jpg',
    alt: 'Yellow Vuyela trucks lined up beside stacked shipping containers',
    caption: 'Fleet ready to move',
    orientation: 'portrait',
  },
  {
    src: '/images/gallery/gallery-06.jpg',
    alt: 'Yellow LOVOL loader climbing a stockpile of bulk commodities',
    caption: 'Stockpile operations',
    orientation: 'landscape',
  },
  {
    src: '/images/gallery/gallery-07.jpg',
    alt: 'Kalmar reach stacker loading a Maersk container onto a trailer',
    caption: 'Reach stacker at work',
    orientation: 'portrait',
  },
];
