export const GOT_SOURCES = 'GOT_SOURCES';

export function getSources() {
  return dispatch => {
    fetch('/api/sources').then(response => {
      if(response.ok) {
        response.json().then(data => {
          if(data.sources) {
            let sources = new Map();
            data.sources.forEach(source => sources.set(source.id, source.name));
            dispatch(gotSources(sources));
          }
        })
      }
    })
  }
}

function gotSources(sources) {
  return {
    type: GOT_SOURCES,
    sources
  }
}