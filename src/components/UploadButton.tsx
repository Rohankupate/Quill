"use client";
import { useState } from "react";
import { Dialog, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import Dropzone from "react-dropzone";
import { Cloud } from "lucide-react";
const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const UploadDropZone = () => {
    return (
      <Dropzone multiple={false} onDrop={(acceptedFile=>{console.log(acceptedFile)})}>
        {({ getRootProps, getInputProps, acceptedFiles }) => (
          <div {...getRootProps()} className="border h-64 m-4 p-1 border-dashed border-zinc-300 rounded-lg ">
            <div  className="flex items-center justify-centerh-full w-full ">
              <label  htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full rounder-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                <Cloud className="h-8 w-8 text-black"></Cloud>
                <div className="flex flex-col items-center justify-center pt-5 pb-4">
upload files here
                </div>
                
              </label>
            </div>

          </div>
        )}
      </Dropzone>
    );
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
        <UploadDropZone></UploadDropZone>
      </DialogContent>
    </Dialog>
  );
};
export default UploadButton;
