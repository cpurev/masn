import { convertGoogleDriveUrl } from '@/utils/imageUtils'

type HomeItem = Record<string, unknown> & {
  section?: string
  type?: string
  order?: string | number
  title?: string
  subtitle?: string
  description?: string
  img?: string
}

export interface HomePageData {
  heroMain?: HomeItem
  heroServices: HomeItem[]
  intro: HomeItem[]
  servicesHeading?: HomeItem
  servicesCards: Array<HomeItem & { descriptionList: string[] }>
}

export function processHomePageData(
  raw: HomeItem[],
  options?: { separator?: string }
): HomePageData {
  const separator = options?.separator ?? ';'
  const safeItems = (raw || []).map(item => ({
    ...item,
    img: item.img ? convertGoogleDriveUrl(String(item.img)) : item.img
  }))

  const bySection = (section: string) =>
    safeItems.filter(i => i.section === section)

  const sortByOrder = <T extends HomeItem>(items: T[]): T[] =>
    items.sort((a, b) => parseInt(String(a.order || '0')) - parseInt(String(b.order || '0')))

  const heroSection = bySection('hero')
  const heroMain = heroSection.find(i => i.type === 'main')
  const heroServices = sortByOrder(heroSection.filter(i => i.type === 'service'))

  const intro = sortByOrder(bySection('intro'))

  const servicesSection = bySection('services')
  const servicesHeading = servicesSection.find(i => i.type === 'heading')
  const servicesCards = sortByOrder(servicesSection.filter(i => i.type === 'card')).map(item => {
    const descriptionText = String(item.description ?? '')
    return {
      ...item,
      descriptionList: descriptionText
        ? descriptionText.split(separator).map(part => part.trim()).filter(Boolean)
        : []
    }
  })

  return {
    heroMain,
    heroServices,
    intro,
    servicesHeading,
    servicesCards
  }
}

