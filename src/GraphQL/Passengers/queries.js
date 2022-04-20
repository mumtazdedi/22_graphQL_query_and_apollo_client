import { gql } from "@apollo/client";

export const GET_PASSENGERS = gql`
    query data {
        data {
            id
            nama
            umur
            jenisKelamin
        }
    }
`;

export const DELETE_PASSENGER = gql`
mutation deletePassenger($id: Int!) {
    delete_data_by_pk(id: $id) {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

export const ADD_PASSENGER = gql`
mutation addPassenger($nama: String!, $umur: Int!, $jenisKelamin: String!) {
        insert_data_one(object: {nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin}) {
            id
            nama
            umur
            jenisKelamin
        }
      }
`;