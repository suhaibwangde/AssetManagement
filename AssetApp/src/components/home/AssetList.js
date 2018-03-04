import React, { PropTypes } from 'react';
import './AssetList.scss';
import dog from '../../content/dog.png';
import cat from '../../content/cat.png';
import both from '../../content/both.png';
import arrow from '../../content/arrow.png';

const getActiveClassName = (query, column) => {
  if (query && column) {
    return (query['sort']) ? (query['sort'] && query['sort'][column] ? ((query['sort'] && query['sort'][column] && query['sort'][column] === 1) ?
      'Assets_Row_Header_Active_Ascending' : 'Assets_Row_Header_Active_Descending') : 'Assets_Row_Header') : 'Assets_Row_Header';
  }
  return 'Assets_Row_Header';
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
        Last Name
        </th>
      <th
        className={getActiveClassName(query, 'FirstName')}
        onClick={() => updateQuery(query, 'FirstName')}
      >
        First Name</th>
      <th
        className={getActiveClassName(query, 'MiddleInitial')}
        onClick={() => updateQuery(query, 'MiddleInitial')}
      >Middle Initial</th>
      <th
        className={getActiveClassName(query, 'Pet')}
        onClick={() => updateQuery(query, 'Pet')}
      >Pet</th>
      <th
        className={getActiveClassName(query, 'DateOfBirth')}
        onClick={() => updateQuery(query, 'DateOfBirth')}
      >Birthday</th>
      <th
        className={getActiveClassName(query, 'FavoriteColor')}
        onClick={() => updateQuery(query, 'FavoriteColor')}
      >Favroite Color</th>
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
