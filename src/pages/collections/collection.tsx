import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CaretDown, DotsThree } from '@phosphor-icons/react'

export function Collection() {
  return (
    <div className="flex-1 flex divide-x">
      <div className="w-64 divide-y flex flex-col">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-12 flex items-center justify-between pl-3 pr-2">
              <span className="text-sm">Collection name</span>

              <Button type="button" size="icon" variant="ghost">
                <DotsThree className="w-4 h-4" weight="bold" />
              </Button>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-60">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex-1 flex flex-col">
          <p>item 1</p>
          <p>item 2</p>
          <p>item 3</p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-12 flex items-center justify-between px-3">
              <span className="text-sm">Environment #2</span>

              <CaretDown className="w-4 h-4" weight="bold" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-60">
            <DropdownMenuItem>Enviroment #1</DropdownMenuItem>
            <DropdownMenuItem>Enviroment #2</DropdownMenuItem>
            <DropdownMenuItem>Enviroment #3</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Manage environments</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex-1 p-4">
        <p>request</p>
      </div>
      <div className="flex-1 p-4">
        <p>response</p>
      </div>
    </div>
  )
}
