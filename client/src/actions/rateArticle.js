import { searchReset } from './searchArticles';

export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

export function submitRating(ratingData) {
  return dispatch => {
    fetch('/api/srating', {
      method: 'POST',
      body: JSON.stringify(ratingData),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(response => {
      if(!response.ok) {
        dispatch(ratingError());
      } else {
        response.json().then(data => {
          if(localStorage.getItem('userEmail')) {
            fetch('/createUserRating', {
              method: 'POST',
              body: JSON.stringify({
                useremail: localStorage.getItem('userEmail'),
                articleurl: ratingData.url
              }),
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            }).then(response => {
              if(!response.ok) console.log(response.statusText)
            }).catch(err => console.log(err));
          } 
          dispatch(searchReset());
          dispatch(hideModal());
        }).catch(err => console.log(err))
      }
    }).catch(err => console.log(err))
  }
}

function ratingError() {}

export function showModal(sourceid, articleURL) {
  return {
    type: MODAL_SHOW,
    sourceid,
    articleURL
  }
}

export function hideModal() {
  return {
    type: MODAL_HIDE
  }
}