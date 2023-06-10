export type ValkType = "MEC" | "PSY" | "BIO" | "IMG" | "QUA"
export const VALKTYPES: ValkType[] = ["MEC", "PSY", "BIO" , "IMG", "QUA"]

export interface Valkyrie {
  imageUrl: string;
  title:    string;
  desc:     string;
  type:     ValkType;
  id: string;
}

export interface GetValkResponse{
  id: string;
  list: Valkyrie[];
}
