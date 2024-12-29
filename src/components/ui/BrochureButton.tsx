import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Download } from 'lucide-react'

export function BrochureButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(true)

  const handleDownload = () => {
    console.log("Downloading brochure...")
    window.open('./SunriseCompanyProfilev.4.2.pdf', '_blank')
    setIsDialogOpen(false)
  }

  const handleView3D = () => {
    window.location.href = 'https://sunrisepipes-3d.vercel.app/'
    setIsDialogOpen(false)
  }

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <div className="h-[200px] flex items-center justify-center">
          <h1 className="w-auto pr-3">click to download</h1>
          <Download size={20} />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Brochure Options</AlertDialogTitle>
          <AlertDialogDescription>
            Choose how you'd like to view the brochure.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDownload}>Download Brochure</AlertDialogAction>
          <AlertDialogAction onClick={handleView3D}>View in 3D</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

