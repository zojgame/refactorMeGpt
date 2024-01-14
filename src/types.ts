type ProgramLanguage = {
  id: string;
  value: string;
};

type Language = ProgramLanguage;

type Selector = {
  value: string;
  label: string;
  gptTitle?: string;
};

type AuthorizationRes = {
  id: number;
  username: string;
  accessToken: string;
  tokenType: string;
};

type HistoryRes = {
  body: string;
  dateTimeCreate: string;
};

// type GPTRes = {
//   id: string,
//   object: string,
//   created: number,
//   model: string,

// }

export type {
  Language,
  ProgramLanguage,
  Selector,
  AuthorizationRes,
  HistoryRes,
};
