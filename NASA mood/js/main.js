
getFetch();

function getFetch(){
  const numImg = 3
  const url = 'https://api.nasa.gov/planetary/apod?api_key=wbVwcBXmeAffKEK9DkneSezqUaxDZMbR83TfGuBd&count=' + numImg;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if(data[0].media_type == 'image') {
          document.getElementById('one').style.backgroundImage = `url(${data[0].hdurl})`;
          document.querySelector('#one iframe').style.display = 'none';
        } else {
          document.getElementById('one').style.backgroundImage = none;
          document.querySelector('#one iframe').src = '#';
        }
        document.querySelector('#textOne p').innerText = data[0].explanation;

        if(data[1].media_type == 'image') {
          document.getElementById('two').style.backgroundImage = `url(${data[1].hdurl})`;
          document.querySelector('#two iframe').style.display = 'none';
        } else {
          document.getElementById('two').style.backgroundImage = none;
          document.querySelector('#two iframe').src = '#';
        }
        document.querySelector('#textTwo p').innerText = data[1].explanation;

        if(data[0].media_type == 'image') {
          document.getElementById('three').style.backgroundImage = `url(${data[2].hdurl})`;
          document.querySelector('#three iframe').style.display = 'none';
        } else {
          document.getElementById('three').style.backgroundImage = none;
          document.querySelector('#three iframe').src = '#';
        }
        document.querySelector('#textThree p').innerText = data[2].explanation;
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

