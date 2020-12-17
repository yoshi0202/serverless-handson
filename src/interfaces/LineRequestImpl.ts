export default interface LineRequestImpl {
  events: [{
    message: {
      text: string
    },
    source: {
      userId: string
    }
  }]
}