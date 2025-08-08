import { convertGoogleDriveUrl } from '@/utils/imageUtils'

export type StandardPageItem = Record<string, unknown> & {
  section?: string
  title?: string
  subtitle?: string
  description?: string
  img?: string
  order?: string | number
}

export interface StandardPageData {
  hero?: StandardPageItem
  cards: Array<StandardPageItem & { descriptionList: string[] }>
}

export function processStandardPageData(
  data: StandardPageItem[],
  options?: { separator?: string }
): StandardPageData {
  const separator = options?.separator ?? ';'

  const hero = data.find(item => item.section === 'hero')

  const cards = data
    .filter(item => item.section === 'card')
    .sort((a, b) => parseInt(String(a.order || '0')) - parseInt(String(b.order || '0')))
    .map(item => {
      const descriptionText = String(item.description ?? '')
      return {
        ...item,
        img: item.img ? convertGoogleDriveUrl(String(item.img)) : item.img,
        descriptionList: descriptionText
          ? descriptionText.split(separator).map(part => part.trim()).filter(Boolean)
          : []
      }
    })

  return { hero, cards }
}

