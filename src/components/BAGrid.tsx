import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BAGrid(props: {
    gridData: [];
    gridCols: {
        colName: string,
        colValue: string
        displayField?: any
    }[];
    loading?: boolean;

}) {
    const { gridData, gridCols, loading } = props;
    return <>
        <Container maxWidth="md" sx={{ marginTop: "10px" }}>
            {loading ? <h1>Loading ...</h1> : <table className="table table-striped border rounded-3" >
                <thead>
                    <tr>
                        {
                            gridCols.map((x: any, i: any) => {
                                return <th key={i}>{x.colName}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        gridData.map((row: any, rowIndex: any) => {
                            return <tr key={rowIndex}>
                                {
                                    gridCols.map((x, i) => {
                                        return <td key={i}>
                                            {x.displayField ? x.displayField(row) : eval("row" + x.colValue)}
                                        </td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>}
        </Container> </>
}