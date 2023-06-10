export interface Valkyrie {
  imageUrl: string;
  title:    string;
  desc:     string;
  type:     "MEC" | "PSY" | "BIO" | "IMG" | "QUA";
  id: string;
}

export interface GetValkResponse{
  id: string;
  list: Valkyrie[];
}
