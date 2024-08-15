import css from "./TransactionHistoryItem.module.css";

export default function TransactionHistoryItem ({items: {type, amount, currency}}) {
    return (
        <>
         <tr className={css.tableRow}>
      <td className={css.tableItem}>{type}</td>
      <td className={css.tableItem}>{amount}</td>
      <td className={css.tableItem}>{currency}</td>
    </tr>
        </>
    )
}