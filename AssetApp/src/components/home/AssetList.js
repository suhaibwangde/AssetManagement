import React, { PropTypes } from 'react';
import './AssetList.scss';
import dog from '../../content/dog.png';
import cat from '../../content/cat.png';
import both from '../../content/both.png';
import arrow from '../../content/arrow.png';
import toastr from 'toastr';

// Getg Active class name for header to be active
const getActiveClassName = (query, column) => {
  // Get isActive
  const active = isActive(query, column);
  // Check if that column is active
  if (active.isActive) {
    // Check if active column is ascendinhg
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

// build isActive object
const isActive = (query, column) => {
  // active object
  const active = {
    isActive: true,
    isAscending: 1
  }
  // if query is supplied & column
  if (query && column) {
    // if query has sort & sort column
    if (query['sort'] && query['sort'][column]) {
      // set is active true
      active.isActive = true;
      // if column value is 1 then its ascending
      active.isAscending = query['sort'][column] === 1;
    } else {
      // set isActive false
      active.isActive = false;
    }
  } else {
    // set is active false
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


// Get Total Number of pages
const totalPages = (count, noPerPage) => {
  // If Total Available assets are greater than number per page
  if (count > noPerPage) {
    // Round off divider
    let tots = Math.round(count / noPerPage);
    // Calculate reminder
    const mods = (count % noPerPage);
    // original count without rounding off
    const pages = (count / noPerPage);
    // if round off was less than 0.5 then page would be 1 less so increment
    if ((pages - mods) < 0.5) {
        tots++;
    }
    // return tots;
    return tots;
  }
  return 0;
}

const buildFoooter = (pageNumber, noPerPage, count, updateQueryAndLoad, activePage, query) => {
  const pages = [];
  if (noPerPage && count) {
    for (let i = 1; i <= totalPages(count, noPerPage); i++) {
      pages.push(<span className={parseInt(activePage) === i ? 'PageNumber_Active' : 'PageNumber'} onClick={() => updateQueryAndLoad(query, 'pageNumber', i)}>{i}</span>);
    }
  }
  return pages;
}

const nextPage = (pageNumber, noPerPage, count) => {
  if (pageNumber === totalPages(count, noPerPage) || pageNumber > totalPages(count, noPerPage))
    return 1;
  if (pageNumber < totalPages(count, noPerPage));
  return pageNumber + 1;
}

const previousPage = (pageNumber, noPerPage, count) => {
  if (pageNumber === 1 || pageNumber <= 0)
    return totalPages(count, noPerPage);
  if (pageNumber > 0);
  return pageNumber - 1;
}

const isValidPage = (pageNumber, noPerPage, count) => {
  if (pageNumber < 1)
    return false;
  if (pageNumber > totalPages(count, noPerPage))
    return false;
  return true;
}

const AssetList = ({ assets, updateQueryAndLoad, updateQuery, query, count, loadAssets, activePage }) => {
  if (assets && assets.length > 0) {
    const pages = buildFoooter(query.pageNumber, query.noPerPage, count, updateQueryAndLoad, activePage, query);
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
      {pages && pages.length > 0 && <tr className="Assets_Row">
        <td colSpan={6} className="PageFooter">
          <select className="noPerPage" onChange={(evt) => updateQueryAndLoad(query, 'noPerPage', evt.target.value)}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
          <span className='PageNumber' onClick={() => updateQueryAndLoad(query, 'pageNumber', previousPage(parseInt(query.pageNumber), query.noPerPage, count))}>{'<'}</span>
          {pages}
          <span className='PageNumber' onClick={() => updateQueryAndLoad(query, 'pageNumber', nextPage(parseInt(query.pageNumber), query.noPerPage, count))}>{'>'}</span>
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
      </tr>}
      {pages && pages.length == 0 && <tr className="Assets_Row">
        <td colSpan={6} className="PageFooter">
          <select className="noPerPage" onChange={(evt) => updateQueryAndLoad(query, 'noPerPage', evt.target.value)}>
            <option value={5} selected={query.noPerPage == 5 ? 'selected' : ''}>5</option>
            <option value={10} selected={query.noPerPage == 10 ? 'selected' : ''}>10</option>
            <option value={15} selected={query.noPerPage == 15 ? 'selected' : ''}>15</option>
            <option value={20} selected={query.noPerPage == 20 ? 'selected' : ''}>20</option>
          </select>
        </td>
      </tr>}
    </table>);
  } else {
    return (<p>No Assets to Display</p>);
  }
};

AssetList.propTypes = {
  assets: PropTypes.array.isRequired
};

export default AssetList;
