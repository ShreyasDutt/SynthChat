import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Clock, Search } from "lucide-react"
import { Textarea } from "../ui/textarea"


export function SearchDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'icon'} variant={'ghost'}><Search/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle className="hidden"></DialogTitle>
        <DialogHeader>
            <div className="flex items-center border-b pb-1.5">
                <div className="mt-0.5 flex items-center text-muted-foreground/75">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search ml-px !size-4"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-slash ml-[3px] !size-4 skew-x-[30deg] opacity-20"
                >
                    <path d="M22 2 2 22" />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus mr-3 !size-4"
                >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                </svg>
                </div>

                <Textarea placeholder="Search or press enter to start a new chat" className="w-full placeholder:text-muted-foreground/50 placeholder:text-sm resize-none max-h-75 min-h-5"/>
            </div>
          
          <DialogDescription>
            <span    className="text-primary font-semibold flex items-center gap-1 justify-start"><Clock size={15}/>Recent Chats</span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
            <p>Recent chats will go here</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
