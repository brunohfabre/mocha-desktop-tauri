import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { z } from 'zod'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

export function Workspace() {
  const navigate = useNavigate()

  const [deleteAlertDialogVisible, setDeleteAlertDialogVisible] =
    useState(false)
  const [removeAlertDialogVisible, setRemoveAlertDialogVisible] =
    useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'Workspace name',
    },
  })

  async function updateWorkspace(data: FormData) {
    console.log(data)
  }

  function handleDelete() {
    console.log('handle delete workspace')

    navigate('/workspaces')
  }

  return (
    <>
      <AlertDialog
        open={deleteAlertDialogVisible}
        onOpenChange={setDeleteAlertDialogVisible}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete workspace</AlertDialogTitle>
            <AlertDialogDescription>
              Really want to delete this workspace?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Yes, Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={removeAlertDialogVisible}
        onOpenChange={setRemoveAlertDialogVisible}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove member</AlertDialogTitle>
            <AlertDialogDescription>
              Really want to remove this member from workspace?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Yes, Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="max-w-3xl w-full mx-auto px-4 py-8 flex flex-col gap-8">
        <Tabs defaultValue="general">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex flex-col gap-2">
                <strong className="text-lg font-semibold">Workspace</strong>

                <Form {...form}>
                  <form
                    className="border rounded-lg flex flex-col p-4 gap-8"
                    onSubmit={form.handleSubmit(updateWorkspace)}
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel>Name</FormLabel>

                          <FormControl>
                            <Input placeholder="Name" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Button>Save</Button>
                    </div>
                  </form>
                </Form>
              </div>

              <div className="flex flex-col gap-2">
                <strong className="text-lg font-semibold">Danger zone</strong>

                <div className="border rounded-lg flex flex-col p-4 gap-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-base font-medium">Delete workspace?</p>
                      <p className="text-sm text-zinc-500">
                        This action delete all data of workspace.
                      </p>
                    </div>

                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => setDeleteAlertDialogVisible(true)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="members">
            <div className="flex flex-col gap-2 mt-8">
              <strong className="text-lg font-semibold">Members</strong>

              <div className="flex flex-col border rounded-lg p-4 divide-y">
                <div className="flex justify-between items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 flex flex-col">
                    <p className="text-sm font-medium">Jhon Doe</p>
                    <span className="text-sm text-zinc-500">
                      jhondoe@email.com
                    </span>
                  </div>

                  <div className="flex mr-8">
                    <span className="text-sm font-medium">ADMIN</span>
                  </div>

                  <div className="flex justify-end min-w-32"></div>
                </div>

                <div className="flex justify-between items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 flex flex-col">
                    <p className="text-sm font-medium">Jhon Doe</p>
                    <span className="text-sm text-zinc-500">
                      jhondoe@email.com
                    </span>
                  </div>

                  <div className="flex mr-8">
                    <span className="text-sm font-medium">ADMIN</span>
                  </div>

                  <div className="flex justify-end min-w-32">
                    <Button
                      type="button"
                      onClick={() => setRemoveAlertDialogVisible(true)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 flex flex-col">
                    <p className="text-sm font-medium">Jhon Doe</p>
                    <span className="text-sm text-zinc-500">
                      jhondoe@email.com
                    </span>
                  </div>

                  <div className="flex mr-8">
                    <span className="text-sm font-medium">ADMIN</span>
                  </div>

                  <div className="flex justify-end min-w-32">
                    <Button
                      type="button"
                      onClick={() => setRemoveAlertDialogVisible(true)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
