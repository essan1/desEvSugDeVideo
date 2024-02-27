class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;

    this.setInicio = () => {};
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }

  playMultimedia() {
    VideoPlayer.publicFunction(this.getUrl(), this.id);
  }

  setInicio(time) {
    let iframe = document.getElementById(this.id);
    if (iframe) {
      let url = this.getUrl();
      iframe.setAttribute("src", url + "?start=" + time);
    }
  }
}

let VideoPlayer = (function () {
  function privateFunction(url, id) {
    let iframe = document.getElementById(id);
    if (iframe) {
      iframe.setAttribute("src", url);
    }
  }

  return {
    publicFunction: function (url, id) {
      privateFunction(url, id);
    },
  };
})();

let musica = new Reproductor(
  "https://www.youtube.com/embed/lP26UCnoH9s?si=IxP8p8Ya2nqLYOlr",
  "musica"
);
let peliculas = new Reproductor(
  "https://www.youtube.com/embed/qvqyBWCN39o?si=SoFKTgYQSFEffSDF&start=3",
  "peliculas"
);
let series = new Reproductor(
  "https://www.youtube.com/embed/iM150ZWovZM?si=4n0MCQKoIoHwyCes&start=106",
  "series"
);

musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();

musica.setInicio(10);
