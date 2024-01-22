import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CaretDown, DotsThree, Folder } from '@phosphor-icons/react'
import * as Accordion from '@radix-ui/react-accordion'

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

        <ScrollArea className="flex-1 h-32">
          <Accordion.Root type="multiple">
            <Accordion.Item value="item-1" className="flex flex-col">
              <Accordion.Trigger className="flex gap-2 h-8 px-3 items-center">
                <Folder className="w-4 h-4" weight="bold" />
                <span className="text-sm">Folder 1</span>
              </Accordion.Trigger>

              <Accordion.Content className="flex flex-col pl-3">
                <button className="flex h-8 px-3 items-center">
                  <span className="text-xs text-green-500 font-semibold">
                    GET
                  </span>
                  <span className="text-sm">Any get request</span>
                </button>

                <button className="flex h-8 px-3 items-center">
                  <span className="text-xs text-green-500 font-semibold">
                    GET
                  </span>
                  <span className="text-sm">Any get request</span>
                </button>

                <button className="flex h-8 px-3 items-center">
                  <span className="text-xs text-green-500 font-semibold">
                    GET
                  </span>
                  <span className="text-sm">Any get request</span>
                </button>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <button className="flex h-8 px-3 items-center">
            <span className="text-xs text-indigo-500 font-semibold">POST</span>
            <span className="text-sm">Any post request</span>
          </button>

          <Accordion.Root type="multiple">
            <Accordion.Item value="item-1" className="flex flex-col">
              <Accordion.Trigger className="flex gap-2 h-8 px-3 items-center">
                <Folder className="w-4 h-4" weight="bold" />
                <span className="text-sm">Folder 2</span>
              </Accordion.Trigger>

              <Accordion.Content className="flex flex-col pl-3">
                <button className="flex h-8 px-3 items-center">
                  <span className="text-xs text-green-500 font-semibold">
                    GET{' '}
                  </span>
                  <span className="text-sm">Any get request</span>
                </button>

                <button className="flex h-8 px-3 items-center">
                  <span className="text-xs text-green-500 font-semibold">
                    GET
                  </span>
                  <span className="text-sm">Any get request</span>
                </button>

                <Accordion.Root type="multiple">
                  <Accordion.Item value="item-1" className="flex flex-col">
                    <Accordion.Trigger className="flex gap-2 h-8 px-3 items-center">
                      <Folder className="w-4 h-4" weight="bold" />
                      <span className="text-sm">Folder 3</span>
                    </Accordion.Trigger>

                    <Accordion.Content className="flex flex-col pl-3">
                      <button className="flex h-8 px-3 items-center">
                        <span className="text-xs text-green-500 font-semibold">
                          GET
                        </span>
                        <span className="text-sm">Any get request</span>
                      </button>

                      <button className="flex h-8 px-3 items-center">
                        <span className="text-xs text-green-500 font-semibold">
                          GET
                        </span>
                        <span className="text-sm">Any get request</span>
                      </button>

                      <button className="flex h-8 px-3 items-center">
                        <span className="text-xs text-green-500 font-semibold">
                          GET
                        </span>
                        <span className="text-sm">Any get request</span>
                      </button>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          <button className="flex h-8 px-3 items-center">
            <span className="text-xs text-amber-500 font-semibold">PUT</span>
            <span className="text-sm">Any put request</span>
          </button>
        </ScrollArea>

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
