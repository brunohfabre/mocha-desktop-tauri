import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { z } from 'zod'

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
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(1),
})
type FormData = z.infer<typeof formSchema>

export function CreateCollectionModal() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const [searchParams, setSearchParams] = useSearchParams()

  const modal = JSON.parse(searchParams.get('modal') ?? 'false')

  function handleCloseModal() {
    setSearchParams((state) => {
      state.set('modal', 'false')

      return state
    })

    form.reset({
      name: '',
    })
  }

  function createCollection() {
    console.log('create-collection')
  }

  return (
    <Dialog open={modal} onOpenChange={handleCloseModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add collection</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(createCollection)}
            className="flex flex-col gap-8"
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

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
              <Button>Create</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
