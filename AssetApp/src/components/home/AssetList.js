import React, { PropTypes } from 'react';
import './AssetList.scss';

const AssetList = ({ assets, updateQuery, query }) => {
  return (<table className="Assets">
    <tr className="Assets_Row">
      <th
        className="Assets_Row_Header"
        onClick={() => {
          if (query['sort'] && query['sort']['LastName'] && query['sort']['LastName'] === 1) {
            console.log('chek');
            updateQuery(Object.assign({}, query, { sort: { 'LastName': -1 } }))
          } else {
            updateQuery(Object.assign({}, query, { sort: { 'LastName': 1 } }))
          }
        }
        }
      >
        Last Name
        </th>
      <th
        className="Assets_Row_Header"
        onClick={() => {
          if (query['sort'] && query['sort']['FirstName'] && query['sort']['FirstName'] === 1) {
            updateQuery(Object.assign({}, query, { sort: { 'FirstName': -1 } }))
          } else {
            
            updateQuery( Object.assign({}, query, { sort: { 'FirstName': 1 } }))
          }
        }
        }
      >
        First Name</th>
      <th
        className="Assets_Row_Header"
        onClick={() => {
          if (query['sort'] && query['sort']['MiddleInitial'] && query['sort']['MiddleInitial'] === 1) {
            updateQuery(Object.assign({}, query, { sort: { 'MiddleInitial': -1 } }))
          } else {
            updateQuery(Object.assign({}, query, { sort: { 'MiddleInitial': 1 } }))
          }
        }
        }
      >Middle Initial</th>
      <th
        className="Assets_Row_Header"
        onClick={() => {
          if (query['sort'] && query['sort']['Pet'] && query['sort']['Pet'] === 1) {
            updateQuery( Object.assign({}, query, { sort: { 'Pet': -1 } }))
          } else {
            updateQuery(Object.assign({}, query, { sort: { 'Pet': 1 } }))
          }
        }
        }
      >Pet</th>
      <th
        className="Assets_Row_Header"
        onClick={() => {
          if (query['sort']['DateOfBirth'] && query['sort']['DateOfBirth'] === 1) {
            updateQuery(Object.assign({}, query, { sort: { 'DateOfBirth': -1 } }))
          } else {
            updateQuery( Object.assign({}, query, { sort: { 'DateOfBirth': 1 } }))
          }
        }
        }
      >Birthday</th>
      <th
        className="Assets_Row_Header"
        onClick={() => {
          if (query['sort']['FavoriteColor'] && query['sort']['FavoriteColor'] === 1) {
            updateQuery(Object.assign({}, query, { sort: { 'FavoriteColor': -1 } }))
          } else {
            updateQuery( Object.assign({}, query, { sort: { 'FavoriteColor': 1 } }))
          }
        }
        }
      >Favroite Color</th>
    </tr>
    {assets.map((asset) =>
      <tr className="Assets_Row">
        <td className="Assets_Row_Data">{asset.LastName}</td>
        <td className="Assets_Row_Data">{asset.FirstName}</td>
        <td className="Assets_Row_Data">{asset.MiddleInitial}</td>
        <td className="Assets_Row_Data">{asset.Pet}</td>
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
