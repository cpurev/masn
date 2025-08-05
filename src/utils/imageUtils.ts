/**
 * Utility functions for handling images across the application
 */

/**
 * Converts Google Drive URLs to lh3.googleusercontent.com format for direct image access
 * 
 * @param url - The original image URL (can be Google Drive or any other URL)
 * @returns The converted URL or original URL if not a Google Drive link
 * 
 * @example
 * // Input: https://drive.google.com/file/d/1KfYVWSsZU2orSAsFzRjqJHfotxe3Qvab/view?usp=sharing
 * // Output: https://lh3.googleusercontent.com/d/1KfYVWSsZU2orSAsFzRjqJHfotxe3Qvab
 */
export function convertGoogleDriveUrl(url: string): string {
  if (!url || typeof url !== 'string') return url
  
  // Check if it's a Google Drive URL (both /file/d/ and uc?export=view formats)
  const driveFilePattern = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/
  const driveExportPattern = /https:\/\/drive\.google\.com\/uc\?export=view&id=([a-zA-Z0-9_-]+)/
  
  let match = url.match(driveFilePattern)
  if (!match) {
    match = url.match(driveExportPattern)
  }
  
  if (match && match[1]) {
    const fileId = match[1]
    const convertedUrl = `https://lh3.googleusercontent.com/d/${fileId}`
    
    // Debug logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('🔄 Google Drive URL converted:', { 
        original: url, 
        converted: convertedUrl 
      })
    }
    
    return convertedUrl
  }
  
  // If not a Google Drive URL, return original
  return url
}

/**
 * Processes an object containing image URLs and converts any Google Drive URLs
 * Useful for batch processing of data from Google Sheets
 */
export function processImageUrls<T extends Record<string, any>>(
  data: T, 
  imageFields: (keyof T)[] = ['img', 'image', 'photo']
): T {
  const processedData = { ...data }
  
  imageFields.forEach(field => {
    if (processedData[field] && typeof processedData[field] === 'string') {
      processedData[field] = convertGoogleDriveUrl(processedData[field] as string)
    }
  })
  
  return processedData
}

/**
 * Processes an array of objects and converts Google Drive URLs in specified image fields
 */
export function processImageUrlsInArray<T extends Record<string, any>>(
  dataArray: T[], 
  imageFields: (keyof T)[] = ['img', 'image', 'photo']
): T[] {
  return dataArray.map(item => processImageUrls(item, imageFields))
}