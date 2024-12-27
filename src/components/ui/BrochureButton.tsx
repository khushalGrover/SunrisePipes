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

export function BrochureButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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
        <h1>Brochure</h1>
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

