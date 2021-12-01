import HTTPRequestImpl from "./HTTPRequestImpl";

export default interface WikipediaResponseImpl extends HTTPRequestImpl{
  data: {
    query: {
      normalized?: [
        {
          from: string,
          to: string
        }
      ]
      pages: {
        [key: string]: {
          pageid: number,
          title: string,
          extract?: string
        },
      }
    },
  }
}