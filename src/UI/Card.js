import styles from './Card.module.css'
const Card = (CardProps) => {
    const className = `${styles.default} ${CardProps.className}`;
    return (
        <div className={className}>
            {CardProps.children}
        </div>
    )
}
export default Card;