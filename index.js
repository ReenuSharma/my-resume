import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {dresses} from './dress';
import Dress from './Dresso';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

//stateless function component
// always return JSX
function Greeting(){
    return(
        <div>
            <h3>hello people</h3>
            <Person />
            <Message />
            <ul>

                <li>
                    <a href='#'>first list</a>
                    
                </li>
                <li>
                    <a href='#'>second list</a>
                </li>
                <img src='' alt=''/>
                <input type='text' name ='' id=''/>

                <p>thanks for visiting</p>
                
            </ul>
            <p>thanks again</p>
        </div>
    ); 
}

const Person = () =>{return <h2>reenu sharma</h2>}//or just drop{return}
const Message = () => {
    return <p>this message is brought by a function which was later inserted into Greeting</p>
}




function BookList() {
    return (
    <section className='booklist'>
        
        <Book stock = 'one left'/>
        <Book1 stock='available' />
        <Book2 stock='only two left'/>
        <Watch1 
        img={watch_f.img}
        title={watch_f.title}
        author={watch_f.author}
        cost={watch_f.cost}
        stock ='available'
        />
        <Watch2 stock='in stoke'/>
        <Watch3 stock='available'/>
       
        {dresses.map((dress)=>{
            // const{img, title, author, cost, stock}=dress;
            return (
                <Dress key={dress.id} dress={dress}></Dress>
            );
        })}
        <Dress4 stock='available'/>
        <Book2 stock='only one left'/>
    </section>);
}

const Book =(props)=>{
    return <article className='book'>
        <Image />
        <Title />
        <Author />
        <Cost />
        <h5 style={{color: 'green'}}>{props.stock}</h5>
    </article>
}
const author = 'Father Sanjay Vashishth';
const Book1 =(props)=>{
    const title = 'The Past Life Of Reenu Sharma(module2)';
    return( <article className='book1'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sqgm-_Yod8GknHOMbT9Gxrf8ezFZFrsp5A&usqp=CAU" alt=""/>
        <h1>{title}</h1>
        <h4 style={{ color: '#617d98', fontSize: '0.75rem', margineTop: '0.25rem'}}>{author.toUpperCase()}</h4>
        <h4>Rs.200</h4>
        <p style={{color: 'black'}}>{props.stock}</p>
        
    </article>);
}
const Book2 =(props)=>{
    
const title2= 'The Past Life Of Reenu Sharma (module3)';
const author2 ='Author: shailesh vashishth';
     return( <article className='book2'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxs38UtC7rb9JeAxX8UWhmqhxnrAex5sx6g&usqp=CAU" alt=""/>
        <h1>{title2}</h1>
        <h4 style={{color: '#617d98', fontSize: '0.75rem', margineTop: '0.25rem'}}>{author2}</h4>
        <h5>Rs.200</h5>
        <p style={{color: 'orange'}}>{props.stock}</p>
    </article>);
}
const Watch1 =({img, title, author, cost, stock})=>{
    //const{ img, tital, author, cost}= props;
    return <article className='book2'>
        <img src={img} alt='' />
        <h1>{title}</h1>
        <h5>{author}</h5>
        <h4>{cost}</h4>
        <h5 style={{color: 'green'}}>{stock}</h5>
    </article>
}
const Watch2 =(props)=>{
    return <article className='book2'>
        <ImageW2 />
        <TitleW2 />
        <AuthorW2 />
        <CostW2 />
        <h5 style={{color: 'green'}}>{props.stock}</h5>
    </article>
}
const Watch3 =(props)=>{
    return <article className='book2'>
        <ImageW3 />
        <TitleW3 />
        <AuthorW3 />
        <CostW3 /> <h5>Popular</h5>
        <h5 style={{color: 'green'}}>{props.stock}</h5>
    </article>
}

const Dress4 =(props)=>{
    return <article className='book2'>
        <ImageD4 />
        <TitleD4 />
        <AuthorD4 />
        <CostD4 />
        <h5 style={{color: 'green'}}>{props.stock}</h5>
    </article>
}

const Image = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fxh5FsE0bJGzz5UxLFTYtP1Q17jBXtGaFA&usqp=CAU" alt=""/>
const Title = () =><h1>The Past Life Of Reenu Sharma</h1>
const Author =() =><h4 style={{ color: '#617d98', fontSize: '0.75rem', margineTop: '0.25rem'}}>Author: Mother Manjulata Vashishth</h4>
const Cost =()=><h5>Rs.200</h5>

//  const Author1 =() =><h4 style={{color: '#617d98', fontSize: '0.75rem', margineTop: '0.25rem'}}>Author: Father Sanjay</h4>

const watch_f = {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFjPbs2RvBAo_SUU587SqKQa9G9aJu_NAGw&usqp=CAU",
    title:'womens watch designed for elegance',
    author: 'Reenuclothings',
    cost:'Rs.300',
    stock:'available',
}

const ImageW2 = () => <img src="data:image/jpeg;base64,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" alt=""/>
const TitleW2 = () =><h1>A womenz watch designed for elegance</h1>
const AuthorW2 =() =><h4 style={{color: '#617d98', fontSize: '0.75rem', margineTop: '0.25rem'}}>Reenuclothings</h4>
const CostW2 =()=><h5>Rs.290</h5>

const ImageW3 = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXy3rcRGwkrzfkdazihHQYfOZNJL6ICsvIA&usqp=CAU" alt=""/>
const TitleW3 = () =><h1>A womens watch designed for elegance</h1>
const AuthorW3 =() =><h4 style={{color: '#617d98', fontSize: '0.75rem', margineTop: '0.25rem'}}>Reenuclothings</h4>
const CostW3 =()=><h5>Rs.450</h5>

const ImageD4 = () => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhOfqSf2X8Ymffp05P_lfCIOskpY9JOoojA&usqp=CAU" alt=""/>
const TitleD4 = () =><h1>A womens DRESS designed for elegance</h1>
const AuthorD4 =() =><h4 style={{color: '#617d98', fontSize: '0.75rem', margineTop: '0.25rem'}}>Reenuclothings</h4>
const CostD4 =()=><h5>Rs.195</h5>


//PRODUCT INFO ENDS

//ReactDom.render(<Greeting />, document.getElementById('root'));
ReactDom.render(<BookList />, document.getElementById('root'));
