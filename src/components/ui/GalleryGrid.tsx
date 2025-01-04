import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
// import {Instagram } from "lucide-react"
interface Photo {
  id: number
  src: string
  alt: string
}


const photos: Photo[] = [
  { id: 1, src: "Deo_1.2.png", alt: "DeoPlast Post 1" },
  { id: 2, src: "Deo_2.0.png", alt: "DeoPlast Post 2" },
  { id: 3, src: "Deo_3.0.png", alt: "DeoPlast Post 3" },
  { id: 2, src: "jal-1.png", alt: "JalShakti Post 1" },
  { id: 2, src: "jal-2.png", alt: "JalShakti Post 2" },
  { id: 2, src: "jal-3.png", alt: "JalShakti Post 3" },
  { id: 4, src: "Deo_4.0.png", alt: "DeoPlast Post 4" },
  { id: 5, src: "Deo_5.0.png", alt: "DeoPlast Post 5" },
  { id: 6, src: "Deo_6.0.png", alt: "DeoPlast Post 6" },
  { id: 9, src: "Deo_4.0.png", alt: "DeoPlast Post 9" }, // repeated
  { id: 7, src: "Deo_7.0.png", alt: "DeoPlast Post 7" },
  { id: 8, src: "Deo_4.0.png", alt: "DeoPlast Post 8" }, // repreated
]

export default function GalleryGrid() {
//   const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <div className="mt-16 container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <Dialog key={photo.id}>
            <DialogTrigger asChild>
              <div className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] w-full h-full flex flex-col items-center justify-center p-0 z-[999]">
              <h1 className="text-xl md:text-3xl font-semibold mt-4 p-4 w-full text-center">
                {photo.alt}
              </h1>
              <div className="relative w-full h-full max-h-[calc(90vh-4rem)] aspect-square flex justify-center items-start">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover max-h-[80%]"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}