import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Certificate({ user, score }) {
  useEffect(() => {
    // Mock function to send email
    const sendCertificateEmail = () => {
      console.log(`Sending certificate to ${user.email}`)
      // In a real application, you would implement the email sending logic here
    }

    sendCertificateEmail()
  }, [user.email])

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold text-blue-700">Congratulations!</h2>
      <p className="text-lg">You have completed the Water Management Quiz</p>
      <p className="text-xl font-medium">Your score: {score} / 70</p>
      <p>A certificate has been sent to your email: {user.email}</p>
      <Button onClick={() => window.location.reload()} className="water-ripple">
        Take Another Quiz
      </Button>
    </div>
  )
}

