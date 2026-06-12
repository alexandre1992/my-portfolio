export interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  achievements: string[];
  type: "mobile" | "web" | "embedded" | "other";
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
  isMock?: boolean;
}

export interface ProjectDetail {
  title: string;
  description: string;
  platform: "Android" | "Flutter" | "React" | "Delphi";
  techStack: string[];
  features: string[];
}
