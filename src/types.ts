export interface Step1Data {
  whatHappened: string;
  firstThought: string;
  feeling: string;
  storyBelieved: string;
  facts: string;
  interpretations: string;
}

export interface Step2Data {
  hasProof: string;
  alternativeView: string;
  friendAdvice: string;
  jesusView: string;
  biblicalTruth: string;
  anomalies: string[];
}

export interface Step3Data {
  burdenCarried: string;
  miedoEntregar: string;
  uncontrollablePart: string;
  characterFormed: string;
  developedVersion: string;
  redemptiveName: string;
}

export interface Step4Data {
  smallMission: string;
  mavi: string;
  habitToStart: string;
  evidences: string[];
}

export interface FullUserData {
  step1: Step1Data;
  step2: Step2Data;
  step3: Step3Data;
  step4: Step4Data;
}

export interface GeminiRewriteResult {
  lies: string[];
  strengths: string[];
  emotions: string[];
  truths: string[];
  newNarrative: string;
  pastoralPrayer: string;
}
