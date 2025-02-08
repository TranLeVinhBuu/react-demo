
import './style.css';

const MyComponent = () => {
  // const clowder = [1,2,3];
  const clowder = {
    name: 'cat',
    age: 3
  }
  return (
    <>
      <div>{JSON.stringify(clowder)}</div>
      <div>react component</div>
      <div className='child'>child</div>
    </>
  );
}

export default MyComponent;