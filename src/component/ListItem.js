import "./Home.css"

const ListItem = ({ id, nama, umur, jenisKelamin, hapusPengunjung }) => {

    return (
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenisKelamin}</td>
            <td className="removeBorder" onClick={() => hapusPengunjung(id)}><button>Hapus</button></td>
        </tr>
    )
}

export default ListItem;