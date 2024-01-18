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
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(createName)}
          className="flex flex-col max-w-lg w-full gap-8"
        >
          <strong className="text-2xl font-medium">Create name</strong>

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
            <Button>Create name</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
