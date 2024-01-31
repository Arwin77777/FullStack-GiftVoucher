import{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/car.scss'
// Define the width of each slide in the carousel
const slideWidth = 30;

// Initial data for the carousel items
const _items = [
    // ... (your data)
    {
      player: {
          title: 'Personlised Cake',
          desc: 'Luscious ganache nutella cake 500gm',
          image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-luscious-ganache-nutella-cake-500-gm--270011-m.jpg',
      },
  },
  {
      player: {
          title: "Ronnie O'Sullivan",
          desc: "The perfect last-minute gift to delight your loved one on their special day. Our expert florists have handcrafted this arrangement using the freshest carnations and roses. The blooms are elegantly arranged in a reusable green cylindrical vase ",
          image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-splendid-moments-birthday-arrangement-265154-m.jpg',
      },
  },
  {
      player: {
          title: 'Love in the moonlight',
          desc: 'Exclusively crafted for timeless romance, celebrate love with deep purple roses, purple alstroemeria',
          image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-love-in-the-moonlight-270021-m.jpg',
      },
  },
  {
      player: {
          title: 'Acrylic-Caricature',
          desc: 'Bride and Groom personalized acrylic caricature',
          image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-bride-and-groom-personalized-acrylic-caricature-270773-m.jpg',
      },
  },
  {
      player: {
          title: '  Personalized Travel Planner',
          desc: 'Creating a personalized travel planner involves considering various aspects such as destination, budget, duration, preferences, and more.',
          image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-my-personalized-travel-planner-271410-m.jpg',
      },
  },
];

// Duplicate the items for a smoother looping effect
const length = _items.length;
_items.push(..._items);

// Utility function to create an item with styles based on its position and index
const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    // Apply special styles for certain positions
    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles, filter: 'grayscale(1)' };
            break;
        case length:
            break;
        default:
            item.styles = { ...item.styles, opacity: 0 };
            break;
    }

    return item;
};

// CarouselSlideItem component responsible for rendering each slide
const CarouselSlideItem = ({ pos, idx }) => {
    const item = createItem(pos, idx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className="carousel-slide-item__body">
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </li>
    );
};

// PropTypes for the CarouselSlideItem component
CarouselSlideItem.propTypes = {
    pos: PropTypes.number.isRequired,
    idx: PropTypes.number.isRequired,
};

// Generate an array of keys for the carousel items
const keys = Array.from(Array(_items.length).keys());

// Main Carousel component
const Carousel = () => {
    // State to manage the current items in the carousel
    const [items, setItems] = useState(keys);

    // State to manage the ticking animation state
    const [isTicking, setIsTicking] = useState(false);

    // State to manage the index of the currently active item
    const [activeIdx, setActiveIdx] = useState(0);

    // Calculate the total number of items for looping
    const bigLength = items.length;

    // Function to handle clicking the previous button
    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    // Function to handle clicking the next button
    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength]
                );
            });
        }
    };

    // Function to handle clicking on the dots to navigate directly
    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };
    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
  };
    // Effect to handle the animation ticking
    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    // Effect to update the active index when the items change
    useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length);
    }, [items]);

    // Render the main carousel structure
    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button
                    className="carousel__btn carousel__btn--prev"
                    onClick={() => prevClick()}
                >
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {/* Map through the items and render each slide */}
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                            />
                        ))}
                    </ul>
                </div>
                <button
                    className="carousel__btn carousel__btn--next"
                    onClick={() => nextClick()}
                >
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {/* Render dots for navigation */}
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Export the Carousel component
export default Carousel;
