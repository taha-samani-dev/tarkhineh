import PaymentResult from "@/components/payment/PaymentResult";

export default function page() {
  const transactionId = "65857127"
  const status = "failed"

  return (
    <PaymentResult status={status} transactionId={transactionId} />
  )
} 
