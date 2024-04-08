type Setter<T> = (value: T) => void

export interface IEventContext {
  video: File | null,
  setVideo: Setter<File>,
  thumbnail: string | null,
  setThumbnail: Setter<string>,
  next?: () => void,
  previous?: () => void,
  canContinue: boolean,
  setCanContinue: Setter<boolean>,
  title: string,
  description: string,
  setTitle: Setter<string>,
  setDescription: Setter<string>,
  currentSlide: number
}