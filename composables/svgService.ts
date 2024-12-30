let cachedSvgContent: string | null = null

export const getSvgSprite = async (): Promise<{ url: string }> => {
    if (cachedSvgContent) return { url: cachedSvgContent }

    const baseBath = '/icons.svg'
    const response = await fetch(baseBath)
    if (!response.ok) throw new Error('Failed to fetch SVG file')
    cachedSvgContent = baseBath // Use the URL or content directly
    return { url: cachedSvgContent }
}
