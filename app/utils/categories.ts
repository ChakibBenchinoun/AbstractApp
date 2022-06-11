export type Category = {img: string; header: string; info: string}[]

const categories: Category = [
  {
    img: '//theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png',
    header: 'Using Abstract',
    info: 'Abstract lets you manage, version, and document your designs in one place.',
  },
  {
    img: '//theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png',
    header: 'Manage your account',
    info: 'Configure your account settings, such as your email, profile details, and password.',
  },
  {
    img: '//theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png',
    header: 'Manage organizations, teams, and projects',
    info: 'Use Abstract organizations, teams, and projects to organize your people and your work.',
  },
  {
    img: '//theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png',
    header: 'Manage billing',
    info: 'Change subscriptions and payment details.',
  },
  {
    img: '//theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png',
    header: 'Authenticate to Abstract',
    info: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
  },
  {
    img: '//theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png',
    header: 'Abstract support',
    info: 'Get in touch with a human.',
  },
]

export function getCategories() {
  return categories
}
