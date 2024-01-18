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
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string().email(),
})
type FormData = z.infer<typeof formSchema>

export function SignIn() {
  const navigate = useNavigate()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  async function signIn(data: FormData) {
    console.log(data)

    navigate('/account-verification')
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(signIn)}
          className="flex flex-col max-w-sm w-full gap-8"
        >
          <div className="flex flex-col gap-2">
            <strong className="text-3xl font-semibold">Sign in</strong>
            <span className="text-sm text-zinc-500">Welcome back 👋</span>
          </div>

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

          <Button>Sign in</Button>
        </form>
      </Form>
    </div>
  )
}
