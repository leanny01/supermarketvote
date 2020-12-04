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

        if (superMarketId === superMarketId.id) {
            console.log('vote has been clicked')
        } else {
            return superMarket
        }
    })


}

 

  return (
    <div>
      {
        superMarkets.map((superMarket) => <SuperMarket key={superMarket.id} superMarket={superMarket} handlesuperMarketUpVote ={handlesuperMarketUpVote}/>)
      }
    </div>

  )

}

const SuperMarket = (props) => {

  const {superMarket} = props;
  const handleUpVote = ()=>{superMarket.handlesuperMarketUpVote(superMarket.id) }


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
