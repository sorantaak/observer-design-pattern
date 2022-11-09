

export default function withAuth(Component) {
    let auth = true;
    // ajax 
    if(auth) {
        return props => <Component auth={true} {...props} />
    }

    return props => (
        <h2>You are not access</h2>
    )
}