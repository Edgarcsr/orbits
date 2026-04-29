'use client'

import Logo from '@/components/logo'
import { Separator } from '@/components/ui/separator'
import DashboardAvatar from './avatar'
import UploadFilesButton from './upload-files-button'

export default function DashboardHeader() {
  return (
    <div className="py-2 px-4 flex items-center gap-4 border-b">
      <Logo size={38} />
      <Separator orientation="vertical" className="h-8" />
      <div className="flex items-center gap-4 ml-auto">
        <UploadFilesButton />
        <DashboardAvatar />
      </div>
    </div>
  )
}
