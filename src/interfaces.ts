// core
interface ItemBody {
  channel: string
  url: string
  attachments?: string
}

interface Handler {
  icon: string | null // :emoji: or url
  identifier?: string
  botName?: string
  formatter(url: string): Promise<string> // stringified attachment array
}

// specific responses
interface xkcdResponse {
  month: string
  num: number
  link: string
  year: string
  news: string
  safe_title: string
  transcript: string
  alt: string
  img: string
  title: string
  day: string
}
