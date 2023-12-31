import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.container}>
        <Oval
            height={80}
            width={80}
            color="#232020"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#FF9EAA"
            strokeWidth={4}
            strokeWidthSecondary={4}
            />
        </div>
    )
}