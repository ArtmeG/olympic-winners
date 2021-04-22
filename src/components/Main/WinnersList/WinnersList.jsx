import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {INIT_WINNERS} from "../../../store/constans";
import {DataGrid} from "@material-ui/data-grid";
import winnersApi from "../../../apiServices/winnersApi";

const columns = [
  {field: 'athlete', headerName: 'Athlete', width: 200},
  {field: 'age', headerName: 'Age', width: 100},
  {field: 'country', headerName: 'Country', width: 150},
  {field: 'year', headerName: 'Year', width: 100},
  {field: 'date', headerName: 'Date', width: 150},
  {field: 'sport', headerName: 'Sport', width: 250},
  {field: 'gold', headerName: 'Gold', width: 100},
  {field: 'silver', headerName: 'Silver', width: 100},
  {field: 'bronze', headerName: 'Bronze', width: 100},
  {field: 'total', headerName: 'Total', width: 100},
];

function WinnersList() {
  const winners = useSelector(({winners}) => winners);
  const dispatch = useDispatch();

  useEffect(() => {
    winnersApi.get('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(res => res.data)
      .then(res => res.map(winner =>
        {
          winner.id = Math.random();
          return winner;
        }
      ))
      .then(res => {
        dispatch({
          type: INIT_WINNERS,
          payload: res
        });
      });
  }, [dispatch]);

  return (
    <DataGrid
      rows={winners}
      columns={columns}
      pageSize={15}
      autoHeight={true}
    />
  )
}

export default WinnersList;