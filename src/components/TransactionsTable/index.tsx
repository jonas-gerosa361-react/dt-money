import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Website development
            </td>
            <td className="deposit">
              R$12.000
            </td>
            <td>
              Gig
            </td>
            <td>
              20/02/2021
            </td>
          </tr>

          <tr>
            <td>
              Rent
            </td>
            <td className="withdraw">
              - R$1.100
            </td>
            <td>
              Housing
            </td>
            <td>
              20/02/2021
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
