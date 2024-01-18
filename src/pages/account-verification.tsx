'use client'

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
import { ArrowLeft } from '@phosphor-icons/react'

const formSchema = z.object({
  code: z.string().regex(/\w{5}-\w{5}-\w{5}/),
})
type FormData = z.infer<typeof formSchema>

export function AccountVerification() {
  const navigate = useNavigate()

  const setCredentials = useAuthStore((state) => state.setCredentials)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  async function verifyAccount(data: FormData) {
    console.log(data)

    setCredentials({
      token: 'asdasdasd',
      user: {
        id: 'asd',
        email: 'johndoe@email.com',
        avatarUrl: 'https://github.com/brunohfabre.png',
      },
    })

    navigate('/')
  }

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <div className="flex-1 flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(verifyAccount)}
          className="flex flex-col max-w-sm w-full gap-8"
        >
          <div className="flex flex-col gap-2">
            <strong className="text-3xl font-semibold">Verify account</strong>
            <span className="text-sm text-zinc-500">
              To continue, enter the code sent by email below.
            </span>
          </div>

          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Code</FormLabel>

                <FormControl>
                  <Input placeholder="Code" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-4">
            <Button>Verify</Button>
            <Button type="button" variant="secondary" disabled>
              Resend code (60)
            </Button>
          </div>

          <Button type="button" variant="link" onClick={handleGoBack}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
        </form>
      </Form>
    </div>
  )
}
