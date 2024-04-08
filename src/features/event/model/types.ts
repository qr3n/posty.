type Setter<T> = (value: T) => void

export interface IEventContext {
  video: File | null,
  setVideo: Setter<File>,
  thumbnail: File | null,
  setThumbnail: Setter<File>,
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