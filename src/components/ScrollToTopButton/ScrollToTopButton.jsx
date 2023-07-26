import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ScrollButton } from './ScrollToTopButton.styled';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollButton>
      )}
    </div>
  );
};

ScrollToTopButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;
