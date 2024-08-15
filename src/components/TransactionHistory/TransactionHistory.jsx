import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem"
import css from "./TransactionHistory.module.css";

export default function TransactionHistory ({items}) {
    return (
    <table className={css.transactionsTable}>
        <thead>
            <tr>
            <th className={css.tableHeader}>Type</th>
            <th className={css.tableHeader}>Amount</th>
            <th className={css.tableHeader}>Currency</th>
            </tr>
        </thead>
        <tbody key={items.id}>
           {items.map((item) => (
            <>
            <TransactionHistoryItem items={item} />
            </>
           )
           )}
        </tbody>
    </table>
        );
}