export interface Artwork {
  id: number;
  title: string;
  api_link: string;
  image_id: string;
  description: string;
  thumbnail: {
    lqip: string;
    height: string;
    width: string;
  };
  artist_display: string;
  date_display: string;
  main_reference_number: number;
  placeOfOrigin: string;
  date: string;
  artworkType: string;
  dimensions: string;
}
