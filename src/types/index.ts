export interface Artwork {
  id: number;
  title: string;
  api_link: string;
  image_id: string;
  description: string;
  thumbnail: {
    lqip: string;
  };
  artist_display: string;
  date_display: string;
  main_reference_number: number;
}
