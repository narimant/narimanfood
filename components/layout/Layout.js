import Link from 'next/link';
import styles from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href='/'>Nariman<span>Food</span></Link>
            </div>
            <div className={styles.right}>
                <Link href="/menu">Menu</Link>
                <Link href="/categories" >Categories</Link>
            </div>
        </header>
        <div className={styles.container}>
        {children}
        </div>
        <footer className={styles.footer}>
            <a href='http://www.linkedin.com/in/nariman-tatari' target='blank' rel='noreferrer'>Nariman Linkdin Page</a>
        </footer>
        </>
    );
};

export default Layout;