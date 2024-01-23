import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

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
import { useAuthStore } from '@/stores/auth'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(1),
})
type FormData = z.infer<typeof formSchema>

export function CreateName() {
  const navigate = useNavigate()

  const token = useAuthStore((state) => state.token)
  const user = useAuthStore((state) => state.user)
  const setCredentials = useAuthStore((state) => state.setCredentials)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  async function createName(data: FormData) {
    console.log(data)

    setCredentials({
      token,
      user: {
        ...user!,
        name: 'John Doe',
      },
    })

    navigate('/')
  }

  return (
    <div className="flex-1 flex justify-center px-4 py-8">
      <div className="flex flex-col max-w-xl w-full gap-2">
        <strong className="text-lg font-semibold">Create name</strong>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(createName)}
            className="flex flex-col gap-8 border p-4 rounded-lg"
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
      </div>{' '}
    </div>
  )
}
