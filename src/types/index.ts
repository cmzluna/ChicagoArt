export interface Artwork {
  id: number;
  title: string;
  api_link: string;
  thumbnail: {
    lqip: string;
  };
  artist_display: string;
  date_display: string;
  main_reference_number: number;
}
