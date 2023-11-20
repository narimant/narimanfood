
import Card from '../modules/Card';
import styles from './MenuPage.module.css'

const MenuPage = ({data}) => {

    return (
        <div className={styles.container}>
            <h2>menu</h2>
            <div className={styles.subContainer}>
               {
                data.map((item,index)=>(
                   <Card key={index} {...item}/>
                ))
               }
                
            </div>
           
        </div>
    );
};

export default MenuPage;

