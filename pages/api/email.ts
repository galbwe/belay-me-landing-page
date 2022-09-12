// TODO: find the right types for req and res
export default function handler(req: any, res: any) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Email not found' })
    }

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.email}` })
  }