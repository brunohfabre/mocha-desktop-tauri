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

import { Members } from './members'

const formSchema = z.object({
  name: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

export function Workspace() {
  const navigate = useNavigate()

  const [deleteAlertDialogVisible, setDeleteAlertDialogVisible] =
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

          <Members />
        </Tabs>
      </div>
    </>
  )
}
