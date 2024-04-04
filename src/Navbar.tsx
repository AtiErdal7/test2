const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="content">
                <a href="/collect-ticket"style={{
                    color: "white",
                    backgroundColor:"grey",
                    borderRadius: "8px"
                }}>Click Page</a>
                <a href="/sign-in Rewards" style={{
                    color: "gold",
                    backgroundColor:"green",
                    borderRadius: "8px"
                }}>Sign-in Rewards</a>
            </div>
        </nav>
    );
}

export default Navbar;