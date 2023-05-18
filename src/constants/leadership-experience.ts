import { Organization, Project, ProjectAttr } from "../models"

// Student Organizations at MSOE

const msoe_sse: Project = {
  title: 'Society of Software Engineer (SSE)',
  description: 'President (2 terms)',
  bullets: [
    'led executive board of 8 through weekly meetings',
    '~bi-weekly event planning for general membership',
    'managed intra-university & industry relationships',
    'learned how NOT to delegate, truly learning the hard way'
  ],
  attrs: [ProjectAttr.elected, ProjectAttr.eboard, ProjectAttr.top_dog],
  links: [{ label: 'msoe-sse.com', href: 'https://msoe-sse.com/'}]
}

const msoe_sg: Project = {
  title: 'Student Government',
  description: 'Vice President (1 term)',
  bullets: [
    'solicited feedback & prototyped solutions to improve student experience',
    'collaborated with university staff/leadership'
  ],
  attrs: [ProjectAttr.elected, ProjectAttr.eboard],
  links: [{ label: 'president: alaina jante', href: 'https://www.linkedin.com/in/alaina-jante/'}]
}

const msoe_uif: Project = {
  title: 'University Innovation Fellow (UIF)',
  description: 'Fellow',
  bullets: [
    'change agents of culture and resources for innovation & entrepreneurship on campus',
    'int\'l org, member of founding cohort at MSOE',
    'first flat leadership structure I participated in, learned when to & when not to step up',
  ],
  attrs: [ProjectAttr.eboard],
  links: [{ label: 'impact', href: 'https://universityinnovation.org/wiki/Fellow:Sabrina_Stangler'}, { label: 'msoe press', href: 'https://www.msoe.edu/about-msoe/news/details/msoe-university-innovation-fellows-chosen-to-lead-silicon-valley-meetup/'}]
}

const student_orgs: Organization = {
  name: 'Student Orgs',
  description: 'In my student leadership, improve MSOE era',
  startDate: new Date('2016-09-01'),
  endDate: new Date('2020-05-25'),
  projects: [msoe_sse, msoe_sg, msoe_uif]
}

// Startup Vibes

const msoe_linc: Project = {
  title: 'Liberian Network for Careers (LiNC)',
  description: 'Founder & Director',
  bullets: [
    'led team of 6 students in an attempt to build android app (spoiler: we flopped)',
    'coordinated with leader of liberian nonprofit, YOPTI, Nate Cooper',
    'first time leading a group & balancing team, partner, and target user motivations'
  ],
  attrs: [ProjectAttr.top_dog, ProjectAttr.volunteer, ProjectAttr.product_management],
  links: [{ label: 'linc', href: 'https://www.linkedin.com/company/37216520/admin/'}, { label: 'nate cooper', href: 'https://www.linkedin.com/in/nathaniel-zinah-cooper/'}]
}

const commons_linc: Project = {
  title: 'The Commons - LiNC',
  description: 'Team Lead',
  bullets: [
    'led cross-disciplinary team through design thinking process',
    'pitched LiNC as a project to solicit team members',
    'pitched final solution at group demo day'
  ],
  attrs: [ProjectAttr.top_dog, ProjectAttr.volunteer, ProjectAttr.product_management],
}

const socius: Project = {
  title: 'Socius Education',
  description: 'Founder & Product Manager',
  bullets: [
    'ideated & iterated digital solution to improve accessibility to trustworthy financial education',
    'left startup after 8 months because 1) burnt out and 2) startup side hustle did not fit my priorities',
    'generated user stories & product roadmap for MVP that was executed by remote teammate in the netherlands (!bob)',
    'pitched idea to a dozen Milwaukee startup community leaders'
  ],
  attrs: [ProjectAttr.product_management, ProjectAttr.volunteer],
  links: [{ label: 'socius.education', href: 'http://socius.education/'}]
}

const startups: Organization = {
  name: 'Startup Graveyard',
  description: 'The flopped startups of ambitions past',
  startDate: new Date('2016-09-01'),
  endDate: new Date('2021-02-01'),
  projects: [msoe_linc, commons_linc, socius]
}

// Company Internal Leadership

const ds_fun_ambassador: Project = {
  title: 'Direct Supply Dev Team',
  description: 'Fun Ambassador',
  bullets: [
    'coordinated bi-weekly team game times for remote team of 7',
    'knighted official fun ambassador & advocated for importance in improving team cohesion'
  ],
  attrs: [ProjectAttr.volunteer],
}

const rc_lmi_teamlead: Project = {
  title: 'RokkinCat LMI Project',
  description: 'Tech Lead',
  bullets: [
    'led team of 2-5 engineers that changed frequently',
    'made feature and framework decisions',
    'reprioritized the backlog alongside the PM to keep the porject on time for launch',
    'previous team lead took leave of absence, I started performing tech lead responsibilities, then was promoted to the position officially after 2 months',
    'navigated new team dynamic with former team lead returning to project while I maintained tech lead responsibility'
  ],
  attrs: [ProjectAttr.team_lead, ProjectAttr.promotion, ProjectAttr.product_management],
}

const mgp_intern_mentor: Project = {
  title: 'MacGregor Partners',
  description: 'Intern Mentor',
  bullets: [
    'onboarded new intern(!) - providing company-specific context & walking through product',
    'advocated to management for new intern to perform a UX review, then facilitated that'
  ],
  attrs: [ProjectAttr.promotion],
  links: [{ label: 'joseph rex', href: 'https://josephrex.me/'}]
}

const company_internal: Organization = {
  name: 'Company Internal Leadership',
  description: 'Ways I stepped up for shits & giggles',
  startDate: new Date('2019-02-01'),
  endDate: new Date('2022-12-22'),
  projects: [rc_lmi_teamlead, ds_fun_ambassador, mgp_intern_mentor]
}

const leadershipExperience: Organization[] = [company_internal, startups, student_orgs]

export default leadershipExperience