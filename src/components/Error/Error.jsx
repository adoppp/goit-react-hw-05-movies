import Notiflix from 'notiflix';

export const Error = ({ errorText }) => {
  return <div>{Notiflix.Notify.warning(errorText)}</div>;
};