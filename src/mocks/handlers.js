import { http, HttpResponse } from 'msw'

const allSeries = [
  {
    id: 1,
    title: "Stranger Things",
    creator: "The Duffer Brothers",
    rating: 8.7,
    dates: "2016-2025",
    image: "https://picsum.photos/id/1/200/300",
    channel: "Netflix"
  },
  {
    id: 2,
    title: "Breaking Bad",
    creator: "Vince Gilligan",
    rating: 9.5,
    dates: "2008-2013",
    image: "https://picsum.photos/id/2/200/300",
    channel: "Netflix"
  },
  {
    id: 3,
    title: "The Walking Dead",
    creator: "Frank Darabont, Angela Kang",
    rating: 8.1,
    dates: "2010-2022",
    image: "https://picsum.photos/id/3/200/300",
    channel: "Prime Video"
  },
  {
    id: 4,
    title: "Game of Thrones",
    creator: "David Benioff, D.B. Weiss",
    rating: 9.2,
    dates: "2011-2019",
    image: "https://picsum.photos/id/4/200/300",
    channel: "HBO"
  },
  {
    id: 5,
    title: "The Crown",
    creator: "Peter Morgan",
    rating: 8.6,
    dates: "2016-2023",
    image: "https://picsum.photos/id/5/200/300",
    channel: "Netflix"
  },
  {
    id: 6,
    title: "Friends",
    creator: "David Crane, Marta Kauffman",
    rating: 8.9,
    dates: "1994-2004",
    image: "https://picsum.photos/id/6/200/300",
    channel: "HBO Max"
  },
  {
    id: 7,
    title: "The Office",
    creator: "Greg Daniels",
    rating: 8.9,
    dates: "2005-2013",
    image: "https://picsum.photos/id/7/200/300",
    channel: "Prime Video"
  },
  {
    id: 8,
    title: "Black Mirror",
    creator: "Charlie Brooker",
    rating: 8.8,
    dates: "2011-present",
    image: "https://picsum.photos/id/8/200/300",
    channel: "Netflix"
  },
  {
    id: 9,
    title: "The Mandalorian",
    creator: "Jon Favreau",
    rating: 8.9,
    dates: "2019-present",
    image: "https://picsum.photos/id/9/200/300",
    channel: "Disney+"
  },
  {
    id: 10,
    title: "The Witcher",
    creator: "Lauren Schmidt Hissrich",
    rating: 8.2,
    dates: "2019-present",
    image: "https://picsum.photos/id/10/200/300",
    channel: "Netflix"
  },
  {
    id: 11,
    title: "Better Call Saul",
    creator: "Vince Gilligan, Peter Gould",
    rating: 8.9,
    dates: "2015-2022",
    image: "https://picsum.photos/id/11/200/300",
    channel: "Netflix"
  },
  {
    id: 12,
    title: "The Simpsons",
    creator: "Matt Groening",
    rating: 8.7,
    dates: "1989-present",
    image: "https://picsum.photos/id/12/200/300",
    channel: "Disney+"
  },
  {
    id: 13,
    title: "Rick and Morty",
    creator: "Justin Roiland, Dan Harmon",
    rating: 9.1,
    dates: "2013-present",
    image: "https://picsum.photos/id/13/200/300",
    channel: "Adult Swim"
  },
  {
    id: 14,
    title: "The Boys",
    creator: "Eric Kripke",
    rating: 8.7,
    dates: "2019-present",
    image: "https://picsum.photos/id/14/200/300",
    channel: "Prime Video"
  },
  {
    id: 15,
    title: "Dark",
    creator: "Baran bo Odar, Jantje Friese",
    rating: 8.7,
    dates: "2017-2020",
    image: "https://picsum.photos/id/15/200/300",
    channel: "Netflix"
  }
]

export const handlers = [
  http.get('https://peticiones.online/api/series', () => {
    return HttpResponse.json(allSeries)
  }),
  http.post('https://peticiones.online/api/series', () => {
    return HttpResponse.json({
       "error": false,
       "msj" : "se creo correctamente"
    })
  }),
]
