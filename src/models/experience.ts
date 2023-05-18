// Project Attributes
export enum ProjectAttr {
  // Product
  frontend = 'frontend',
  backend = 'backend',
  fullstack = 'fullstack',
  react = 'react',
  angular = 'angular',
  ionic = 'ionic',
  mobile = 'mobile',
  product_management = 'product management',
  team_lead = 'team lead',
  ui_ux = 'ui/ux design',
  design = 'design',
  // Leadership
  eboard = 'exec board',
  top_dog = 'top dog',
  elected = 'elected',
  volunteer = 'volunteer',
  promotion = 'promotion',
}

export interface ProjectLink {
  label: string;
  href: string
}

export interface Project {
  title: string
  description: string
  bullets: string[]
  attrs: ProjectAttr[]
  links?: ProjectLink[]
}

export interface Organization {
  name: string;
  titles?: string[];
  description: string;
  startDate: Date;
  endDate?: Date;
  projects: Project[];
}