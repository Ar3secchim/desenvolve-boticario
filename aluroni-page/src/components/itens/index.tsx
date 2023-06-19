import menu from './itens.json'; 
import Item from './item';
import styles from './itens.module.scss';

export default function Itens() {
  return (
    <div className={styles.itens}>
      {menu.map(item => (
        <Item key={item.id} 
         {...item}
        />
      ))}
    </div>
  )
}