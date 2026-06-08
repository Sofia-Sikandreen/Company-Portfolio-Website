export async function getPage(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${slug}&depth=2`,
      { cache: 'no-store' }
    )
    const data = await res.json()
    return data.docs?.[0] || null
  } catch (err) {
    console.error('Error fetching page:', err)
    return null
  }
}