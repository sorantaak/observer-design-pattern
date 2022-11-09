import withAuth from "../../patterns/withAuth"


function Panel({ auth }) {
    console.log(auth)
    return (
        <h2>User Panel</h2>
    )
}


export default withAuth(Panel)
