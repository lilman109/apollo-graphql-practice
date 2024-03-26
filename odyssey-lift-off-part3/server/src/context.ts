import { TrackAPI } from "./datasources/track-api";

// defining context type for resolver
export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
}
