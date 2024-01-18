import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function PrivacyPolicy() {
  const navigate = useNavigate()

  return (
    <div>
      <Button type="button" onClick={() => navigate(-1)}>
        Back
      </Button>

      <span>Privacy policy</span>
    </div>
  )
}
