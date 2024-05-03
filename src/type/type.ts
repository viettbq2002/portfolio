export type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};
export interface Image {
  id: number;
  src: string;
}
export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  additionLink?: string;
  role: string[];
  objective: string;
  features?: Features[];
  techStack: TechStack[];
  screenshots?: Image[];
}
export interface Features {
  name: string;
  description: string;
  icon: any;
}
export interface TechStack {
  name: string;
  icon: any;
}
