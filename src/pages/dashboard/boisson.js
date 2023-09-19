import React, {useEffect,useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Archive  } from 'react-bootstrap-icons';
import axios from "axios";
import { URL,fetchBoisson } from '../../utils/constantes/urls';

const Boisson = () => {
  const [boissons, setBoissons]= useState([]);

  useEffect(()=>{
    const fetchBoisson= async()=>{
      try {
        const {data}= await axios.get(`${URL.fetchBoisson}`)
        setBoissons(data)
      } catch (error){
        console.log(error.message())
      }
    }
    fetchBoisson()
  },[])
  
  console.log(boissons);
  
  const deleteBoisson= ()=>{
    alert("attention")
  }
  return (
    <>
    <div>Boisson</div>
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Picture</th>
          <th scope='col'>description</th>
          <th scope='col'>prix</th>
          <th scope='col'>ation</th>
        </tr>
      </thead>
      <tbody className='table-group-divider'>
        {boissons.map(boisson=> (
        <tr>
          <th scope='row'>1</th>
          <td>{boisson.name}</td>
          <td><img src={boisson.image} alt="" width={100}/></td>
          <td>{boisson.description}</td>
          <td>{boisson.prix}</td>
          <td><i onClick={deleteBoisson}><Archive/></i></td>
        </tr>
        ))}
        
      </tbody>
    </table>
    <form>
      <label htmlFor=''>Name</label>
      <input type="text" id="name" placeholder='name'/>
      <label htmlFor=''>Picture</label>
      <input type="text" id="picture" placeholder='picture'/>
      <label htmlFor=''>description</label>
      <input type="text" id="description" placeholder='description'/>
      <label htmlFor=''>Prix</label>
      <input type="text" id="prix" placeholder='prix'/>
      <button>Validé</button>
    </form>
    </>
  )
}

export default Boisson