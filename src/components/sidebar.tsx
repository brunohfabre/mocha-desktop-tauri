import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LogoDarkVector from '@/assets/logo-dark.svg'
import LogoLightVector from '@/assets/logo-light.svg'
import { useAuthStore } from '@/stores/auth'
import { CaretDown, Moon, Sun, CaretUpDown } from '@phosphor-icons/react'

import { useTheme } from './theme-provider'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Sidebar() {
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()

  const clearCredentials = useAuthStore((state) => state.clearCredentials)

  const [signOutAlertDialogVisible, setSignOutAlertDialogVisible] =
    useState(false)

  function handleChangeTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  function handleNavigateToProfile() {
    navigate('/profile')
  }

  function handleNavigateToCollections() {
    navigate('/collections')
  }

  function handleNavigateToWorkspaces() {
    navigate('/workspaces')
  }

  function handleNavigateToCreateWorkspace() {
    navigate('/create-workspace')
  }

  function handleNavigateToPreferences() {
    navigate('/workspaces/123132')
  }

  function handleSignOut() {
    clearCredentials()
  }

  return (
    <>
      <AlertDialog
        open={signOutAlertDialogVisible}
        onOpenChange={setSignOutAlertDialogVisible}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out</AlertDialogTitle>
            <AlertDialogDescription>
              Really want to leaving mocha?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSignOut}>
              Yes, Sign out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="w-64 border-r flex flex-col">
        <header className="border-b h-14 px-3 flex items-center justify-between">
          <Link to="/">
            <img
              src={theme === 'light' ? LogoLightVector : LogoDarkVector}
              alt="Mocha"
              className="w-10"
            />
          </Link>

          <Button variant="outline" size="icon" onClick={handleChangeTheme}>
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </Button>
        </header>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center justify-between px-3 h-14 border-b">
              <span className="text-sm">Workspace #1</span>

              <CaretUpDown className="w-4 h-4" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-60">
            <DropdownMenuItem>workspace #1</DropdownMenuItem>
            <DropdownMenuItem>workspace #2</DropdownMenuItem>
            <DropdownMenuItem>workspace #3</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleNavigateToWorkspaces}>
              All workspaces
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleNavigateToCreateWorkspace}>
              + Create workspace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex-1 flex flex-col gap-1 p-3">
          <Button
            type="button"
            variant="ghost"
            className="flex justify-start px-3"
            onClick={handleNavigateToCollections}
          >
            Collections
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="flex justify-start px-3"
            disabled
          >
            Notes
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="flex justify-start px-3"
            disabled
          >
            Databases
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="flex justify-start px-3"
            disabled
          >
            Passwords
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="flex justify-start px-3"
            onClick={handleNavigateToPreferences}
          >
            Preferences
          </Button>
        </div>

        <div className="border rounded-lg mb-3 mx-3 p-4">
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="border-t h-14 flex px-3 items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              <div className="flex-1 flex flex-col">
                <span className="text-sm font-semibold text-left">
                  John Doe
                </span>
                <span className="text-xs text-left">johndoe@email.com</span>
              </div>

              <CaretDown className="w-4 h-4" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-60">
            <DropdownMenuItem onClick={handleNavigateToProfile}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSignOutAlertDialogVisible(true)}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
