import mainImg from '../assets/main-picture.png'
import PrimaryBtn from './button';

function MainBlock() {
    return (
      <main className='main'>
        <img src={mainImg} style={{width: '100%'}} alt='react img' />
        <h1>Hello React!</h1>
        <p style={{marginBottom: '18px'}}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga
        </p>
        <PrimaryBtn />
      </main>
    );
}

export default MainBlock