export default function(http) {
  return {
    bookTaxi(order) {
      const query = {
        query: `
          mutation createTaxiOrder(
            $name: String!,
            $phone: String!,
            $date: String!,
            $airport: String!,
            $terminal: String,
            $flightNumber: String!,
          ) {
            createTaxiOrder(
              name: $name,
              phone: $phone,
              date: $date,
              airport: $airport,
              terminal: $terminal,
              flightNumber: $flightNumber,
            ) {
              name
            }
          }`,
        variables: order,
      }
      return http.responseHandler(http.request(query))
    },
  }
}
