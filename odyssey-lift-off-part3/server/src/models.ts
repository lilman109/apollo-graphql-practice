// type for how the data is being returned (include only keys that are needed)
export type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
  description: string;
  numberOfViews: number;
};

export type AuthorModel = {
  id: string;
  name: string;
  photo: string;
};

export type ModuleModel = {
  id: string;
  title: string;
  length: number;
};
