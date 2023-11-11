import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header className='header'>
                <div className='header-title-logo'>
                    <Link to="/" className="logo">
                        <svg
                            className="logo"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="2em"
                            width="2em" >
                            <path d="M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375 0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375 2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h1v-5a1 1 0 011-1h3a1 1 0 011 1v5h6V9a.5.5 0 011 0v6h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3zm3 0h-2v3h2v-3z" />
                        </svg>
                        </Link>
                    <span className="header-title">My Shop</span>
                </div>

                <div className='header-path'>
                    <span className="header-items"><Link to="/items">Items</Link></span>
                    <span className="header-characters"><Link to="/characters">Characters</Link></span>
                    <span className="header-pets"><Link to="/pets">Pets</Link></span>
                </div>
            </header>
        </div>
    )
}
