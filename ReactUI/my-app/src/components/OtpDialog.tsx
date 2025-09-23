import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface OtpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onVerify: (otp: string) => void   // ✅ truyền OTP ra ngoài khi verify
}

export function OtpDialog({ open, onOpenChange, onVerify }: OtpDialogProps) {
  const [otp, setOtp] = useState("")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle>Enter OTP</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <DialogFooter className="flex gap-2">
          <Button 
            onClick={() => onVerify(otp)}   // ✅ gửi OTP ra ngoài
            className="bg-[#008CB8] text-white"
          >
            Verify
          </Button>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
