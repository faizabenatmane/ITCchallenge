
import analyse from '../assets/images/analyse.png';

const Transaction = () => (
  <div className="transaction-container">
    <h1>Transaction History</h1>
    <div className="transaction-filters">
      <select>
        <option>All Transactions</option>
        <option>Income</option>
        <option>Expenses</option>
      </select>
      <input type="date" />
    </div>
    <div className="transactions-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12.01.2020</td>
            <td>Starbucks New York LLP</td>
            <td className="expense">-$5.30</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>11.01.2020</td>
            <td>Wallmart Marketplace</td>
            <td className="expense">-$135.00</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>11.01.2020</td>
            <td>Catherine Pierce</td>
            <td className="income">+$250.00</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <img className='analyse' src={analyse} alt="no transactions" />
  </div>
);
export default Transaction;