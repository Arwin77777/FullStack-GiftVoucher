import  { useState, useEffect } from 'react';
import '../css/rev.css'

const ReviewSlider = () => {
  const articles = [
    {
      imgSrc: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      author: 'Susan Smith',
      job: 'WEB DEVELOPER',
      info: 'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry',
    },
    {
      imgSrc: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      author: 'Anna Johnson',
      job: 'WEB DESIGNER',
      info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      imgSrc: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      author: 'Peter Jones',
      job: 'INTERN',
      info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      imgSrc: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      author: 'Bill Anderson',
      job: 'THE BOSS',
      info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
  ];

  const [curArticle, setCurArticle] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const showCurArticle = () => {
    const { imgSrc, author, job, info } = articles[curArticle];
    setArticle({ imgSrc, author, job, info });
  };

  const setArticle = ({ imgSrc, author, job, info }) => {
    // Your existing setArticle logic
    const imgElement = document.getElementById('img');
  const authorElement = document.getElementById('author');
  const jobElement = document.getElementById('job');
  const infoElement = document.getElementById('info');

  imgElement.src = imgSrc;
  imgElement.alt = author;
  authorElement.textContent = author;
  jobElement.textContent = job;
  infoElement.textContent = info;
  };

  const handleLeftArrowClick = () => {
    const prevArticle = curArticle - 1;
    setCurArticle(prevArticle >= 0 ? prevArticle : articles.length - 1);
  };

  const handleRightArrowClick = () => {
    const nextArticle = curArticle + 1;
    setCurArticle(nextArticle < articles.length ? nextArticle : 0);
  };

  const handleSurpriseButtonClick = () => {
    let newArticle = getRandomInt(articles.length, curArticle);
    setCurArticle(newArticle);
  };

  const getRandomInt = (max, notEqual) => {
    let random = Math.floor(Math.random() * max);
    return random !== notEqual ? random : getRandomInt(max, notEqual);
  };

  useEffect(() => {
    showCurArticle();
  }, [curArticle, showCurArticle]);

  return (
    <main className="container col">
        <div className='rev-bg'>
            <section className="container col">
                <div className="title">
                <h2>Our Reviews</h2>
                <div className="underline"></div>
                </div>
                <article className="review">
                <div className="img-container">
                    <img src="" alt="" id="img" />
                    <i className="fas fa-quote-right"></i>
                </div>
                <p id="author"></p>
                <p id="job"></p>
                <p id="info"></p>
                <div className="arrow-buttons">
                    <button className="btn arrow-btn" onClick={handleLeftArrowClick}>
                    <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="btn arrow-btn" onClick={handleRightArrowClick}>
                    <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
                <button className="btn surprise-btn" onClick={handleSurpriseButtonClick}>
                    Surprise Me
                </button>
                </article>
            </section>
        </div>
    </main>
  );
};

export default ReviewSlider;
