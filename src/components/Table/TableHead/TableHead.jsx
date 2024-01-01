export const TableHead = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map(({ lable, key }) => <th key={key}>{lable }</th>)}
            </tr>
        </thead>
    )

}; 