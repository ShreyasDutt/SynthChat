"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const { theme } = useTheme();

  return (
    <div>
        <Button
        className="rounded-full hover:bg-transparent text-sm"
        variant={"ghost"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        size={'icon'}>{theme === "dark" ? <Moon /> : <Sun />}</Button>
    </div>
  )
}
