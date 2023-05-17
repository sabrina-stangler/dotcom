import { Organization, Project, ProjectAttr } from "../models"

// Direct Supply -------------------------------------

const ds_bluelabel: Project = {
  title: 'DSSI',
  description: 'massive eCommerce product, core offering',
  bullets: [
    'deployed changes across massive ecosystem of data, applications, & security',
    'learned to use a bunch of new tools for dev ops work (AWS console, etc.)',
    'performed maintenance patching tasks in AWS, wrote terraform'
  ],
  attrs: [ProjectAttr.fullstack, ProjectAttr.react]
}

const ds_connect: Project = {
  title: 'New Product',
  description: 'Launched MVP in 6wks',
  bullets: [
    'ideated new solution to fit timeline of 6wks',
    'stood up new product end to end in team of 6',
    'huge mentorship from my team in this role, I learned a LOT'
  ],
  attrs: [ProjectAttr.fullstack, ProjectAttr.react]
}

const ds: Organization = {
  name: 'Direct Supply',
  titles: ['Software Engineer'],
  description: 'Full-time, full stack development in team of 4-8 engineers + 1 business analyst + 1 product manager',
  startDate: new Date('2020-06-05'),
  endDate: new Date('2021-07-15'),
  projects: [ds_bluelabel, ds_connect]
}

// RokkinCat --------------------------------------

const rc_velocity: Project = {
  title: 'group biking',
  description: 'startup product in feature churn',
  bullets: [
    'integrated radio station controlled by coach, available to up to 50 participants',
    'learned elixir in order to make backend changes'
  ],
  attrs: [ProjectAttr.frontend, ProjectAttr.react, ProjectAttr.ionic]
}

const rc_quadjobs: Project = {
  title: 'job poster/finder',
  description: 'startup product building MVP v2',
  bullets: [
    'implemented two complete features with 3rd party integrations: Stripe & Twilio Conversations',
    'coordinated w/ 3rd party contractor building API',
  ],
  attrs: [ProjectAttr.frontend, ProjectAttr.react, ProjectAttr.ionic, ProjectAttr.mobile]
}

const rc_lmi: Project = {
  title: 'inventory management',
  description: 'SMB product building MVP for launch',
  bullets: [
    'led team of 2-5 engineers that changed frequently',
    'made feature and framework decisions',
    'reprioritized the backlog alongside the PM to keep the porject on time for launch',
    'our client launched with customers on Dec 23 with NO issues (cue shock)',
    'finally felt like I had a grip on elixir after this project',
  ],
  attrs: [ProjectAttr.frontend, ProjectAttr.backend, ProjectAttr.react, ProjectAttr.ionic, ProjectAttr.mobile, ProjectAttr.team_lead, ProjectAttr.product_management]
}

const rc_lpi: Project = {
  title: 'community app',
  description: 'SMB product performing bug fixes',
  bullets: [
    'reproducing & fixing user reported bugs',
    'balanced time input vs impact output to stay under monthly maintenance budget',
  ],
  attrs: [ProjectAttr.frontend, ProjectAttr.backend, ProjectAttr.angular, ProjectAttr.ionic, ProjectAttr.mobile]
}

const rc_website: Project = {
  title: 'rokkincatdotcom',
  description: 'company website',
  bullets: [
    'responsible for product vision',
    'created user stories, outlined schedule, communicated with stakeholders, reviewed PRs',
    'led one incredible(!) developer and one talented(!!) designer',
  ],
  attrs: [ProjectAttr.react, ProjectAttr.product_management],
  links: [{ label: 'erin heinz', href: 'https://erinheinz.com'}, { label: 'lyzzi brooks', href: 'https://dribbble.com/lyzzi'}]
}

const rc: Organization = {
  name: 'RokkinCat LLC',
  titles: ['Senior Frontend Software Engineer', 'Tech Lead'],
  description: 'Full-time, agency of 10 devs, working in small teams to bring product visions to life for startups & SMB’s building digital products for the first time',
  startDate: new Date('2021-07-19'),
  endDate: new Date('2022-12-31'),
  projects: [
    rc_lmi,
    rc_website,
    // rc_velocity,
    rc_quadjobs,
    // rc_lpi
  ]
}

// MacGregor Partners --------------------------------------

const mgp_tag: Project = {
  title: 'MGP Tag',
  description: 'new features & bug fixes',
  bullets: [
    '2 year internship, working on Tag (core product offering)',
    'learned a LOT about troubleshooting and thorough end-to-end testing',
    'architected new inventory management system with team of 5',
  ],
  attrs: [ProjectAttr.fullstack, ProjectAttr.angular, ProjectAttr.mobile, ProjectAttr.product_management]
}

const mgp: Organization = {
  name: 'MacGregor Partners LLC',
  titles: ['Software Engineer Intern'],
  description: 'Year round internship at local startup->SMB',
  startDate: new Date('2018-06-01'),
  endDate: new Date('2020-03-18'),
  projects: [mgp_tag]
}

// Cyberpunk Ventures --------------------------------------

const cv_tipascrxipt: Project = {
  title: 'Tip a ScRxipt',
  description: 'startup product consulting',
  bullets: [
    'interpreted client vision into user stories, mockups, and pitch deck for investors',
    'collaborated with fellow technical product managers (!! & !!!)',
  ],
  attrs: [ProjectAttr.product_management, ProjectAttr.design],
  links: [
    { label: 'pitch deck', href: 'https://drive.google.com/file/d/1PgbiZwU46LEYmUfYprW7vM-bv9t1PXAa/view?usp=sharing'},
    { label: 'sam aten', href: 'https://www.linkedin.com/in/samuelaten/'},
    { label: 'michael kirsanov', href: 'https://www.linkedin.com/in/michaelkirsanov/'},
    { label: 'tipascrxipt', href: 'https://tipascrxipt.com/'},
  ]
}

const cv: Organization = {
  name: 'Cyberpunk Ventures LLC',
  titles: ['Technical Product Manager'],
  description: 'Group startup & product consulting business',
  startDate: new Date('2019-06-01'),
  endDate: new Date('2020-08-01'),
  projects: [cv_tipascrxipt]
}

// Curious Bean --------------------------------------

const cb_placeholder: Project = {
  title: 'Hire me',
  description: 'Currently seeking clients for 2023',
  bullets: [
    'bringing product visions to life',
    'hybrid mobile development (with Ionic)',
    'web development in react or angular'
  ],
  attrs: [ProjectAttr.fullstack, ProjectAttr.react, ProjectAttr.angular, ProjectAttr.mobile, ProjectAttr.product_management, ProjectAttr.ionic]
}

const cb: Organization = {
  name: 'Curious Bean LLC',
  titles: ['Software Engineer', 'Technical Product Manager'],
  description: 'Self-employed consulting business',
  startDate: new Date('2023-01-01'),
  projects: [cb_placeholder]
}

const unsorted_orgs: Organization[] = [
  ds,
  rc,
  mgp,
  cv,
  // cb
]
const productExperience: Organization[] = unsorted_orgs.sort((a,b) => a.startDate.getTime() >= b.startDate.getTime() ? -1 : 1)

export default productExperience