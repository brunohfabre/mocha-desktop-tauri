import { useState } from 'react'
import { useForm } from 'react-hook-form'

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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { TabsContent } from '@/components/ui/tabs'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string().email(),
})

type FormData = z.infer<typeof formSchema>

export function Members() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const [removeAlertDialogVisible, setRemoveAlertDialogVisible] =
    useState(false)
  const [addMemberModalVisible, setAddMemberModalVisible] = useState(false)

  function handleRemoveMember() {
    console.log('handle-remove-member')

    setRemoveAlertDialogVisible(false)
  }

  function handleCloseAddMemberModal() {
    setAddMemberModalVisible(false)

    form.reset()
  }

  function addMember(data: FormData) {
    console.log(data)

    handleCloseAddMemberModal()
  }

  return (
    <>
      <AlertDialog
        open={removeAlertDialogVisible}
        onOpenChange={handleCloseAddMemberModal}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove member</AlertDialogTitle>
            <AlertDialogDescription>
              Really want to remove this member from workspace?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => setRemoveAlertDialogVisible(false)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleRemoveMember}>
              Yes, Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog
        open={addMemberModalVisible}
        onOpenChange={setAddMemberModalVisible}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add member</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(addMember)}
              className="flex flex-col gap-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button>Add member</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <TabsContent value="members">
        <div className="flex flex-col gap-4 mt-8">
          <header className="flex items-center justify-between">
            <strong className="text-lg font-semibold">Members</strong>

            <Button
              type="button"
              onClick={() => setAddMemberModalVisible(true)}
            >
              + Member
            </Button>
          </header>

          <div className="flex flex-col border rounded-lg p-4 divide-y">
            <div className="flex justify-between items-center gap-4 py-4 first:pt-0 last:pb-0">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              <div className="flex-1 flex flex-col">
                <p className="text-sm font-medium">Jhon Doe</p>
                <span className="text-sm text-zinc-500">jhondoe@email.com</span>
              </div>

              <div className="flex mr-8">
                <span className="text-sm font-medium">OWNER</span>
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
                <span className="text-sm text-zinc-500">jhondoe@email.com</span>
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
                <span className="text-sm text-zinc-500">jhondoe@email.com</span>
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
    </>
  )
}
