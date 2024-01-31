import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CaretDown, DotsThree, Folder, FolderOpen } from '@phosphor-icons/react'
import * as Accordion from '@radix-ui/react-accordion'

import { Request } from './request'
import { Response } from './response'

export function Collection() {
  return (
    <div className="flex-1 flex divide-x">
      <div className="w-64 flex flex-col">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-12 flex items-center justify-between pl-3 pr-2 border-b">
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

        <ScrollArea className="flex-1 h-32">
          <div className="flex-1 flex flex-col py-2">
            <Accordion.Root type="multiple">
              <Accordion.Item value="item-1" className="flex flex-col">
                <Accordion.Trigger className="flex gap-2 h-8 px-3 items-center group hover:bg-muted">
                  <Folder
                    className="w-4 h-4 group-data-[state=open]:hidden text-zinc-600"
                    weight="bold"
                  />
                  <FolderOpen
                    className="w-4 h-4 group-data-[state=closed]:hidden text-zinc-600"
                    weight="bold"
                  />
                  <span className="text-sm">Folder</span>
                </Accordion.Trigger>

                <Accordion.Content className="flex flex-col pl-3 data-[state=open]:pb-2">
                  <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
                    <span className="text-xs text-green-500 font-semibold w-11 text-left">
                      GET
                    </span>
                    <span className="text-sm">Any get request</span>
                  </button>

                  <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
                    <span className="text-xs text-indigo-500 font-semibold w-11 text-left">
                      POST
                    </span>
                    <span className="text-sm">Any post request</span>
                  </button>

                  <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
                    <span className="text-xs text-amber-500 font-semibold w-11 text-left">
                      PUT
                    </span>
                    <span className="text-sm">Any put request</span>
                  </button>

                  <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
                    <span className="text-xs text-orange-500 font-semibold w-11 text-left">
                      PTCH
                    </span>
                    <span className="text-sm">Any patch request</span>
                  </button>

                  <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
                    <span className="text-xs text-red-500 font-semibold w-11 text-left">
                      DEL
                    </span>
                    <span className="text-sm">Any delete request</span>
                  </button>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>

            <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
              <span className="text-xs text-green-500 font-semibold w-11 text-left">
                GET
              </span>
              <span className="text-sm">Any get request</span>
            </button>

            <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
              <span className="text-xs text-indigo-500 font-semibold w-11 text-left">
                POST
              </span>
              <span className="text-sm">Any post request</span>
            </button>

            <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
              <span className="text-xs text-amber-500 font-semibold w-11 text-left">
                PUT
              </span>
              <span className="text-sm">Any put request</span>
            </button>

            <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
              <span className="text-xs text-orange-500 font-semibold w-11 text-left">
                PTCH
              </span>
              <span className="text-sm">Any patch request</span>
            </button>

            <button className="flex h-8 px-3 items-center justify-start hover:bg-muted">
              <span className="text-xs text-red-500 font-semibold w-11 text-left">
                DEL
              </span>
              <span className="text-sm">Any delete request</span>
            </button>
          </div>
        </ScrollArea>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-12 flex items-center justify-between px-3 border-t">
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

      <Request />

      <Response />
    </div>
  )
}
