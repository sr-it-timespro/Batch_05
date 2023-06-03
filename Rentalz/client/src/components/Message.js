
import { Alert } from "react-bootstrap"

const Message = ({ messageType, messageContent }) => {

  // info, error

  const type = (messageType = "info") ? "primary" : "danger"

  return (

    <>

      <Alert key={type} variant={type}>
        {messageContent}
      </Alert>


    </>
  )
}

export { Message }