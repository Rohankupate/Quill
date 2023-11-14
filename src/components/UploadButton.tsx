
"use client"
import { useState } from "react"
import { Dialog, DialogHeader, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog"

const  UploadButton = ()=>{
const [isOpen , setIsOpen] = useState(false)

return(

  <Dialog
  open={isOpen}
  onOpenChange={(v) => {
    if (!v) {
      setIsOpen(v)
    }
  }}>
  <DialogTrigger
    onClick={() => setIsOpen(true)}
    asChild>
    <Button>Upload PDF</Button>
  </DialogTrigger>

  <DialogContent>
    upload file 
  </DialogContent>
</Dialog>
  );


  
   



}
export default UploadButton