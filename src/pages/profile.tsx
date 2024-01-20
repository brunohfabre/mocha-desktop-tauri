import { useForm } from 'react-hook-form'

import { z } from 'zod'

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
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

export function Profile() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'John Doe',
    },
  })

  async function updateUser(data: FormData) {
    console.log(data)
  }

  return (
    <div className="max-w-3xl w-full mx-auto px-4 py-8 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <strong className="text-lg font-semibold">About you</strong>

        <Form {...form}>
          <form
            className="border rounded-lg flex flex-col p-4 gap-8"
            onSubmit={form.handleSubmit(updateUser)}
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
              <p className="text-base font-medium">Delete your account?</p>
              <p className="text-sm text-zinc-500">
                This action delete all data of your account.
              </p>
            </div>

            <Button type="button" variant="destructive" disabled>
              Delete account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
