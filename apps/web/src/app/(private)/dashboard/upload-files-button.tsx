import { ArrowUpFromLineIcon, Upload, X } from 'lucide-react'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from '@/components/ui/file-upload'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function UploadFilesButton() {
  const [files, setFiles] = useState<File[]>([])

  const onFileReject = useCallback((file: File, message: string) => {
    toast(message, {
      description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
    })
  }, [])

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger
          render={
            <DialogTrigger
              render={
                <Button size={'icon'} variant={'outline'}>
                  <ArrowUpFromLineIcon />
                </Button>
              }
            />
          }
        />
        <TooltipContent>
          <p>Upload files</p>
        </TooltipContent>
      </Tooltip>

      <DialogContent className="min-w-fit">
        <DialogHeader>
          <DialogTitle>Upload Files</DialogTitle>
        </DialogHeader>
        <FileUpload
          maxFiles={5}
          maxSize={5 * 1024 * 1024}
          className="w-full max-w-md"
          value={files}
          onValueChange={setFiles}
          onFileReject={onFileReject}
          multiple
        >
          <FileUploadDropzone>
            <div className="flex flex-col items-center gap-1 text-center">
              <div className="flex items-center justify-center rounded-full border p-2.5">
                <Upload className="size-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">Drag & drop files here</p>
              <p className="text-xs text-muted-foreground">
                Or click to browse (max 5 files, up to 5MB each)
              </p>
            </div>
            <FileUploadTrigger asChild>
              <Button variant="outline" size="sm" className="mt-2 w-fit">
                Browse files
              </Button>
            </FileUploadTrigger>
          </FileUploadDropzone>
          <FileUploadList>
            {files.map((file) => (
              <FileUploadItem key={file.name} value={file}>
                <FileUploadItemPreview />
                <FileUploadItemMetadata />
                <FileUploadItemDelete asChild>
                  <Button variant="ghost" size="icon" className="size-7">
                    <X className="size-4" />
                  </Button>
                </FileUploadItemDelete>
              </FileUploadItem>
            ))}
          </FileUploadList>
        </FileUpload>
        <div className="mt-4 flex items-center justify-between gap-2">
          <div>Total files: {files.length}</div>
          <div className="flex gap-2">
            <DialogClose
              render={<Button variant={'destructive'}>Cancel</Button>}
            />
            <Button>Upload</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
