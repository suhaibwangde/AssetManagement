import React, { PropTypes } from 'react';
import './AssetList.scss';
import dog from '../../content/dog.png';
import cat from '../../content/cat.png';
import both from '../../content/both.png';
import arrow from '../../content/arrow.png';

const getActiveClassName = (query, column) => {
  const active = isActive(query, column);
  if (active.isActive) {
    if(active.isAscending) {
     return  'Assets_Row_Header_Active_Ascending';
    } 
     else{
        return 'Assets_Row_Header_Active_Descending'
     } 
  } {
    return 'Assets_Row_Header';
  }
}

const isActive = (query, column) => {
  const active = {
    isActive : true,
    isAscending: 1
  }
  if(query && column){
    if(query['sort'] && query['sort'][column] ){
      active.isActive = true;
      active.isAscending =  query['sort'][column] === 1;
    } else {
      active.isActive = false;
    }
  } else {
     active.isActive = false;
  }
  return active;
}


const getPetDisplay = (asset) => {
  if(asset){
  switch (asset.Pet.toLowerCase()) {
    case 'c':
    case 'cat':{
      return <div className="PetWrapper"><img className="PetIcon" src={cat}/><div className="Pet"><span>Cat</span></div></div>
    }
    case 'd':
    case 'dog':{
      return<div className="PetWrapper"><img className="PetIcon" src={dog}/><div className="Pet"><span>Dog</span></div></div>
    }
    case 'b':
    case 'both':{
      return <div className="PetWrapper"><img className="PetIcon" src={both}/><div className="Pet"><span>Both</span></div></div>
    }
    default:{
      return<span className="None">{asset.Pet}</span>
    }
  }
  }else {
      return "Assets_Row_Data"
  }
};

const AssetList = ({ assets, updateQuery, query }) => {
  return (<table className="Assets">
    <tr className="Assets_Row">
      <th
        className={getActiveClassName(query, 'LastName')}
        onClick={() => updateQuery(query, 'LastName')}
      >
        Last Name{isActive(query, 'LastName').isActive ? <img className={getActiveClassName(query, 'LastName')+'_Arrow'} src={arrow}/> : ''}
        </th>
      <th
        className={getActiveClassName(query, 'FirstName')}
        onClick={() => updateQuery(query, 'FirstName')}
      >
        First Name{isActive(query, 'FirstName').isActive ? <img className={getActiveClassName(query, 'FirstName')+'_Arrow'} src={arrow}/> : ''}</th>
      <th
        className={getActiveClassName(query, 'MiddleInitial')}
        onClick={() => updateQuery(query, 'MiddleInitial')}
      >Middle Initial{isActive(query, 'MiddleInitial').isActive ? <img className={getActiveClassName(query, 'MiddleInitial')+'_Arrow'} src={arrow}/> : ''}</th>
      <th
        className={getActiveClassName(query, 'Pet')}
        onClick={() => updateQuery(query, 'Pet')}
      >Pet{isActive(query, 'Pet').isActive ? <img className={getActiveClassName(query, 'Pet')+'_Arrow'} src={arrow}/> : ''}</th>
      <th
        className={getActiveClassName(query, 'DateOfBirth')}
        onClick={() => updateQuery(query, 'DateOfBirth')}
      >Birthday{isActive(query, 'DateOfBirth').isActive ? <img className={getActiveClassName(query, 'DateOfBirth')+'_Arrow'} src={arrow}/> : ''}</th>
      <th
        className={getActiveClassName(query, 'FavoriteColor')}
        onClick={() => updateQuery(query, 'FavoriteColor')}
      >Favroite Color{isActive(query, 'FavoriteColor').isActive ? <img className={getActiveClassName(query, 'FavoriteColor')+'_Arrow'} src={arrow}/> : ''}</th>
    </tr>
    {assets.map((asset) =>
      <tr className="Assets_Row">
        <td className="Assets_Row_Data">{asset.LastName}</td>
        <td className="Assets_Row_Data">{asset.FirstName}</td>
        <td className="Assets_Row_Data">{asset.MiddleInitial}</td>
        <td className="Assets_Row_Data">{getPetDisplay(asset)}</td>
        <td className="Assets_Row_Data">
          {new Date(asset.DateOfBirth).getMonth() + '/' + new Date(asset.DateOfBirth).getDate() + '/' + new Date(asset.DateOfBirth).getFullYear()}
        </td>
        <td className="Assets_Row_Data">{asset.FavoriteColor}</td>
      </tr>
    )}
  </table>);
};

AssetList.propTypes = {
  assets: PropTypes.array.isRequired
};

export default AssetList;
