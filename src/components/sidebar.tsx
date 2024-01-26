import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import LogoDarkVector from '@/assets/logo-dark.png'
import LogoLightVector from '@/assets/logo-light.png'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/stores/auth'
import {
  CaretDown,
  Moon,
  Sun,
  CaretUpDown,
  Lock,
  Gear,
  Database,
  NoteBlank,
  Cube,
} from '@phosphor-icons/react'

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

interface SidebarProps {
  expanded: boolean
}

export function Sidebar({ expanded }: SidebarProps) {
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

  function handleNavigateToWorkspaces() {
    navigate('/workspaces')
  }

  function handleNavigateToCreateWorkspace() {
    navigate('/create-workspace')
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

      <div
        className={cn(
          'w-64 border-r flex flex-col transition-all',
          !expanded && 'w-14',
        )}
      >
        <header
          className={cn(
            'border-b h-14 flex items-center justify-between transition-all',
            expanded && 'pr-3',
          )}
        >
          <Link to="/" className="px-3 h-14 flex items-center">
            <img
              src={theme === 'light' ? LogoLightVector : LogoDarkVector}
              alt="Mocha"
              className="w-10"
            />
          </Link>

          {expanded && (
            <Button variant="outline" size="icon" onClick={handleChangeTheme}>
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
          )}
        </header>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              className={cn(
                'flex items-center justify-between px-3 h-14 border-b hover:bg-muted',
                !expanded && 'justify-center',
              )}
            >
              {expanded && <span className="text-sm">Workspace #1</span>}

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

        <div className="flex-1 flex flex-col">
          <span
            className={cn(
              'px-3 pt-3 pb-0.5 text-xs text-zinc-400',
              !expanded && 'self-center',
            )}
          >
            {expanded ? 'General' : 'G'}
          </span>
          <button
            type="button"
            className={cn(
              'flex items-center justify-start gap-1.5 px-3 h-10 text-sm hover:bg-muted',
              !expanded && 'justify-center',
            )}
          >
            <Cube size={16} />
            {expanded && 'Collections'}
          </button>
          <button
            type="button"
            className={cn(
              'flex items-center justify-start gap-1.5 px-3 h-10 text-sm hover:bg-muted',
              !expanded && 'justify-center',
            )}
          >
            <NoteBlank size={16} />
            {expanded && 'Notes'}
          </button>
          <button
            type="button"
            className={cn(
              'flex items-center justify-start gap-1.5 px-3 h-10 text-sm hover:bg-muted',
              !expanded && 'justify-center',
            )}
          >
            <Database size={16} />
            {expanded && 'Databases'}
          </button>
          <button
            type="button"
            className={cn(
              'flex items-center justify-start gap-1.5 px-3 h-10 text-sm hover:bg-muted',
              !expanded && 'justify-center',
            )}
          >
            <Lock size={16} />
            {expanded && 'Passwords'}
          </button>

          <span
            className={cn(
              'px-3 pt-3 pb-0.5 text-xs text-zinc-400',
              !expanded && 'self-center',
            )}
          >
            {expanded ? 'Workspace' : 'W'}
          </span>
          <button
            type="button"
            className={cn(
              'flex items-center justify-start gap-1.5 px-3 h-10 text-sm hover:bg-muted',
              !expanded && 'justify-center',
            )}
          >
            <Gear size={16} />
            {expanded && 'Preferences'}
          </button>
        </div>

        {expanded && (
          <div className="border rounded-lg mb-3 mx-3 p-3">
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              className={cn(
                'border-t h-14 flex items-center gap-2 hover:bg-muted',
                expanded && 'px-3',
                !expanded && 'justify-center',
              )}
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              {expanded && (
                <>
                  <div className="flex-1 flex flex-col">
                    <span className="text-sm font-semibold text-left">
                      John Doe
                    </span>
                    <span className="text-xs text-left">johndoe@email.com</span>
                  </div>

                  <CaretDown className="w-4 h-4" />
                </>
              )}
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
