import React from 'react';
import ListItem from './ListItem';
import { useQuery } from '@apollo/client';
import { GET_PASSENGERS } from '../GraphQL/Passengers/queries';
const ListPassenger = ({ hapusPengunjung }) => {
    const { loading, error, data } = useQuery(GET_PASSENGERS);
    console.log({ loading, error, data });

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead bgcolor="red">
                    <tr>
                        <td>Nama</td>
                        <td>Umur</td>
                        <td>Jenis Kelamin</td>
                        <td bgcolor="white" className="removeBorder"></td>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((item) => (
                        <ListItem
                            key={item.id}
                            id={item.id}
                            nama={item.nama}
                            umur={item.umur}
                            jenisKelamin={item.jenisKelamin}
                            hapusPengunjung={hapusPengunjung}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger;