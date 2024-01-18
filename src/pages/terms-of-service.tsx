import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function TermsOfService() {
  const navigate = useNavigate()

  return (
    <div>
      <Button type="button" onClick={() => navigate(-1)}>
        Back
      </Button>

      <span>terms of service</span>
    </div>
  )
}
