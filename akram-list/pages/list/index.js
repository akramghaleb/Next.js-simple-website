import styles from '@/styles/list.module.css'

export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props:{ users:data}
    }
}

const AkramList = ({users}) => {
    return ( 
        <div>
            <h1>All Listing</h1>
            {users.map(user=>(
                <div key={user.id}>
                    <a className={styles.single}>
                        <h3> {user.name}</h3>
                    </a>
                </div>
            ))}
        </div>
     );
}
 
export default AkramList;