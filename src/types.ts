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

export type { Language, ProgramLanguage, Selector };
