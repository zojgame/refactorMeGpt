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

export type { Language, ProgramLanguage, Selector, AuthorizationRes };
