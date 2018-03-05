import React, { PropTypes } from 'react';
import './AssetList.scss';
import dog from '../../content/dog.png';
import cat from '../../content/cat.png';
import both from '../../content/both.png';
import arrow from '../../content/arrow.png';
import toastr from 'toastr';

const getActiveClassName = (query, column) => {
  const active = isActive(query, column);
  if (active.isActive) {
    if (active.isAscending) {
      return 'Assets_Row_Header_Active_Ascending';
    }
    else {
      return 'Assets_Row_Header_Active_Descending'
    }
  } {
    return 'Assets_Row_Header';
  }
}

const isActive = (query, column) => {
  const active = {
    isActive: true,
    isAscending: 1
  }
  if (query && column) {
    if (query['sort'] && query['sort'][column]) {
      active.isActive = true;
      active.isAscending = query['sort'][column] === 1;
    } else {
      active.isActive = false;
    }
  } else {
    active.isActive = false;
  }
  return active;
}


const getPetDisplay = (asset) => {
  if (asset) {
    switch (asset.Pet.toLowerCase()) {
      case 'c':
      case 'cat': {
        return <div className="PetWrapper"><img className="PetIcon" src={cat} /><div className="Pet"><span>Cat</span></div></div>
      }
      case 'd':
      case 'dog': {
        return <div className="PetWrapper"><img className="PetIcon" src={dog} /><div className="Pet"><span>Dog</span></div></div>
      }
      case 'b':
      case 'both': {
        return <div className="PetWrapper"><img className="PetIcon" src={both} /><div className="Pet"><span>Both</span></div></div>
      }
      default: {
        return <span className="None">{asset.Pet}</span>
      }
    }
  } else {
    return "Assets_Row_Data"
  }
};

const buildFoooter = (pageNumber, noPerPage, count, updateQueryAndLoad, activePage, query) => {
  const pages = [];
  if (noPerPage && count) {
    for (let i = 1; i <= (count / noPerPage); i++) {
      pages.push(<span className={parseInt(activePage) === i ? 'PageNumber_Active' : 'PageNumber'} onClick={() => updateQueryAndLoad(query, 'pageNumber', i)}>{i}</span>);
    }
  }
  return pages;
}

const nextPage = (pageNumber, noPerPage, count) => {
  const totalPages = (count / noPerPage);
  if (pageNumber === totalPages)
    return 1;
  if (pageNumber < totalPages);
  return pageNumber + 1;
}

const previousPage = (pageNumber, noPerPage, count) => {
  const totalPages = (count / noPerPage);
  if (pageNumber === 0)
    return totalPages;
  if (pageNumber > 0);
  return pageNumber - 1;
}

const isValidPage = (pageNumber, noPerPage, count) => {
  const totalPages = (count / noPerPage);
  if (pageNumber < 1)
    return false;
  if (pageNumber > totalPages)
    return false;
  return true;
}

const AssetList = ({ assets, updateQueryAndLoad, updateQuery, query, count, loadAssets, activePage }) => {
  return (<table className="Assets">
    <tr className="Assets_Row">
      <th
        className={getActiveClassName(query, 'LastName')}
        onClick={() => updateQueryAndLoad(query, 'sort', 'LastName')}
      >
        Last Name{isActive(query, 'LastName').isActive ? <img className={getActiveClassName(query, 'LastName') + '_Arrow'} src={arrow} /> : ''}
      </th>
      <th
        className={getActiveClassName(query, 'FirstName')}
        onClick={() => updateQueryAndLoad(query, 'sort', 'FirstName')}
      >
        First Name{isActive(query, 'FirstName').isActive ? <img className={getActiveClassName(query, 'FirstName') + '_Arrow'} src={arrow} /> : ''}</th>
      <th
        className={getActiveClassName(query, 'MiddleInitial')}
        onClick={() => updateQueryAndLoad(query, 'sort', 'MiddleInitial')}
      >Middle Initial{isActive(query, 'MiddleInitial').isActive ? <img className={getActiveClassName(query, 'MiddleInitial') + '_Arrow'} src={arrow} /> : ''}</th>
      <th
        className={getActiveClassName(query, 'Pet')}
        onClick={() => updateQueryAndLoad(query, 'sort', 'Pet')}
      >Pet{isActive(query, 'Pet').isActive ? <img className={getActiveClassName(query, 'Pet') + '_Arrow'} src={arrow} /> : ''}</th>
      <th
        className={getActiveClassName(query, 'DateOfBirth')}
        onClick={() => updateQueryAndLoad(query, 'sort', 'DateOfBirth')}
      >Birthday{isActive(query, 'DateOfBirth').isActive ? <img className={getActiveClassName(query, 'DateOfBirth') + '_Arrow'} src={arrow} /> : ''}</th>
      <th
        className={getActiveClassName(query, 'FavoriteColor')}
        onClick={() => updateQueryAndLoad(query, 'sort', 'FavoriteColor')}
      >Favroite Color{isActive(query, 'FavoriteColor').isActive ? <img className={getActiveClassName(query, 'FavoriteColor') + '_Arrow'} src={arrow} /> : ''}</th>
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
    <tr className="Assets_Row">
      <td colSpan={6} className="PageFooter">
        <select className="noPerPage" onChange={(evt) => updateQueryAndLoad(query, 'noPerPage', evt.target.value)}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
        <span className='PageNumber' onClick={() => updateQueryAndLoad(query, 'pageNumber', previousPage(query.pageNumber, query.noPerPage, count))}>{'<'}</span>
        {buildFoooter(query.pageNumber, query.noPerPage, count, updateQueryAndLoad, activePage, query).map((a) => a)}
        <span className='PageNumber' onClick={() => updateQueryAndLoad(query, 'pageNumber', nextPage(query.pageNumber, query.noPerPage, count))}>{'>'}</span>
        <div className="CustomPage">
          <input className="CustomPage_PageNumber" type="text" value={query.pageNumber} onKeyPress={(e) => {
            if (e.which === 13) {
              if (isValidPage(query.pageNumber, query.noPerPage, count)) {
                loadAssets(query)
              } else {
                toastr.error('Please enter page between 1 and ' + (count / query.noPerPage));
              }
            }
          }} onChange={(evt) => {
            updateQuery(query, 'pageNumber', evt.target.value);
            if (evt.target.value && evt.target.value.length > 0) {
              if (!isValidPage(evt.target.value, query.noPerPage, count)) {
                toastr.error('Please enter page between 1 and ' + (count / query.noPerPage));
              }
            }
          }} />
          {' '}
          <input className="CustomPage_LoadPage" type="button" value="Go" onClick={() => {
            if (isValidPage(query.pageNumber, query.noPerPage, count)) {
              loadAssets(query)
            } else {
              toastr.error('Please enter page between 1 and ' + (count / query.noPerPage));
            }
          }} />
        </div>
      </td>
    </tr>
  </table>);
};

AssetList.propTypes = {
  assets: PropTypes.array.isRequired
};

export default AssetList;
