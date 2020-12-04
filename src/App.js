import React, { useState,useEffect } from 'react';

import superMarketList from './List'
import './App.css';


const SuperMarketList = ()=>{
 
  const [superMarkets, setSuperMarkets] = useState([])
  

  useEffect(()=>{
    setSuperMarkets(superMarketList.superMarketList)

   
  },[])

  const handlesuperMarketUpVote =  (superMarketId)=> {


    const nextState = superMarkets.map(superMarket => {
      
        if (superMarketId === superMarket.id) {
            console.log('vote has been clicked')
            return {...superMarket,votes:superMarket.votes + 1}
        } else {
            return superMarket
        }
    })

    setSuperMarkets(nextState)



}

 
  return (
    <div className="main ui text container">
      <h1 className="ui dividing centered header">Popular Supermarkets</h1>
      <div id="content">

        <div id="content" className="ui unstackable items">
        {
         

          superMarkets.sort((a,b)=> (b.votes - a.votes ))
          .map((superMarket) => <SuperMarket key={superMarket.id} superMarket={superMarket} handlesuperMarketUpVote ={handlesuperMarketUpVote}/>)
          
        }
      </div>
     
    </div>
   </div>
    

  )

}

const SuperMarket = (props) => {

  const {superMarket,handlesuperMarketUpVote} = props;
  const handleUpVote = ()=>{handlesuperMarketUpVote(superMarket.id) }


  return (
    <div className="item">
      <div className="image">
        <img src={superMarket.superMarketImageUrl} />
      </div>

      <div className="middle aligned content">
        <div className='header'>
          <a onClick={handleUpVote}>
            yes
            <i className='large caret up icon' />
          </a>
          {superMarket.votes}
        </div>
        <div className="description">
          <a>{superMarket.title}</a>
          <p>{superMarket.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={superMarket.submitterAvatarUrl} />
        </div>
      </div>
    </div>
  )
}



export default SuperMarketList;
