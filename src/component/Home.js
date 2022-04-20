import React, { useEffect } from 'react';
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PASSENGERS, DELETE_PASSENGER, ADD_PASSENGER } from '../GraphQL/Passengers/queries';

const Home = () => {

    const { loading, error, data, refetch } = useQuery(GET_PASSENGERS);

    const [addPassenger] = useMutation(ADD_PASSENGER, {
        onCompleted(data) {
            console.log(data);
            refetch();
        },
        onError(error) {
            console.log(error);
        }
    });

    const [deletePassenger, { error: deleteError }] = useMutation(DELETE_PASSENGER, {
        onCompleted(data) {
            console.log(data);
            refetch();
        },
        onError(error) {
            console.log(error);
        }
    });

    const hapusPengunjung = (id) => {
        deletePassenger({
            variables: {
                id: id
            }
        });
    };

    const tambahPengunjung = newUser => {
        addPassenger({
            variables: {
                nama: newUser.nama,
                umur: newUser.umur,
                jenisKelamin: newUser.jenisKelamin
            }
        });
    };

    return (
        <div>
            {
                loading ?
                    <div>Loading...</div> :
                    <div>
                        <Header />
                        <PassengerInput tambahPengunjung={tambahPengunjung} />
                        <ListPassenger hapusPengunjung={hapusPengunjung} />
                    </div>
            }
        </div>
    );
}

export default Home;
