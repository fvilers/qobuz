import Composer from "./Composer";

interface Track {
  composer: Composer;
  copyright: string;
  displayable: boolean;
  downloadable: boolean;
  duration: number;
  hires_streamable: boolean;
  hires: boolean;
  id: number;
  isrc: string;
  maximum_bit_depth: number;
  maximum_channel_count: number;
  maximum_sampling_rate: number;
  media_number: number;
  parental_warning: boolean;
  performer: Composer;
  performers: string;
  previewable: boolean;
  purchasable_at: number;
  purchasable: boolean;
  sampleable: boolean;
  streamable_at: number;
  streamable: boolean;
  title: string;
  track_number: number;
  version: null;
  work: null;
}

export default Track;
